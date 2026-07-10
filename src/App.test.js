import { render, screen, within } from "@testing-library/react";
import App from "./App";
import Reveal from "./components/Reveal";

jest.mock("framer-motion", () => {
  const React = require("react");

  return {
    motion: new Proxy(
      {},
      {
        get: (_target, element) => {
          const MotionComponent = ({
            children,
            viewport,
            initial,
            whileInView,
            whileHover,
            transition,
            animate,
            ...props
          }) =>
            React.createElement(
              element,
              {
                ...props,
                "data-viewport-once":
                  viewport?.once === undefined ? undefined : String(viewport.once),
                "data-viewport-amount":
                  viewport?.amount === undefined ? undefined : String(viewport.amount),
              },
              children
            );

          return MotionComponent;
        },
      }
    ),
  };
});

test("renders portfolio owner name", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      name: /muhammad faiz bintang pratama/i,
    })
  ).toBeInTheDocument();
});

test("runs reveal animation only once when content enters the viewport", () => {
  render(
    <Reveal>
      <span>Reveal content</span>
    </Reveal>
  );

  expect(screen.getByText("Reveal content").parentElement).toHaveAttribute(
    "data-viewport-once",
    "true"
  );
});

afterEach(() => {
  window.location.hash = "";
});

test("renders updated projects in the requested order", () => {
  render(<App />);

  expect(screen.getByText("5 projects")).toBeInTheDocument();

  const projectsSection = screen.getByRole("heading", { name: "Projects" }).closest("section");
  expect(projectsSection).not.toBeNull();

  const projectTitles = within(projectsSection)
    .getAllByRole("heading", { level: 3 })
    .map((heading) => heading.textContent);

  expect(projectTitles).toEqual([
    "Hibiscus Efsya POS",
    "Hibiscusefsya Landingpage",
    "MBK Hibiscusefsya Katalog",
    "Amara Baby Shop",
    "STB Label Cable Plant 1",
  ]);

  expect(
    screen.getByRole("link", { name: /open hibiscusefsya landingpage/i })
  ).toHaveAttribute("href", "https://hibiscusefsya.com/");
  expect(
    screen.getByRole("link", { name: /open mbk hibiscusefsya katalog/i })
  ).toHaveAttribute("href", "https://bodycare.hibiscusefsya.com/");
  expect(screen.queryByText("Bunching Label Plant 1")).not.toBeInTheDocument();
});

test("renders a project detail page from a project hash", () => {
  window.location.hash = "#project-2";
  render(<App />);

  expect(screen.getByRole("heading", { name: "Hibiscusefsya Landingpage" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Interface gallery" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /back to projects/i })).toHaveAttribute("href", "#Projects");
  expect(screen.getAllByRole("img")).toHaveLength(3);
});
