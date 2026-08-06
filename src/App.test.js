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

  expect(screen.getByText("6 projects")).toBeInTheDocument();

  const projectsSection = screen.getByRole("heading", { name: "Projects" }).closest("section");
  expect(projectsSection).not.toBeNull();

  const projectTitles = within(projectsSection)
    .getAllByRole("heading", { level: 3 })
    .map((heading) => heading.textContent);

  expect(projectTitles).toEqual([
    "Yulia APP",
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
  expect(screen.getByRole("heading", { name: "Project images" })).toBeInTheDocument();
  expect(screen.getByText("Company Profile Landing Page")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /back to projects/i })).toHaveAttribute("href", "#Projects");
  expect(screen.getAllByRole("img")).toHaveLength(1);
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    "/Hibiscusefsya Landingpage/detail-project/1.png"
  );
});

test("renders Yulia APP details from its project hash", () => {
  window.location.hash = "#project-6";
  render(<App />);

  expect(screen.getByRole("heading", { name: "Yulia APP" })).toBeInTheDocument();
  expect(screen.getByText("Aplikasi Manajemen Tenaga Alih Daya PLN")).toBeInTheDocument();
  expect(screen.getAllByRole("img")).toHaveLength(2);
  expect(screen.getAllByRole("img")[0]).toHaveAttribute(
    "src",
    "/Yulia APP/detail-project/1.png"
  );
});

test("shows an empty image state when a project has no configured gallery", () => {
  window.location.hash = "#project-4";
  render(<App />);

  expect(screen.getByText("Project images belum tersedia.")).toBeInTheDocument();
  expect(screen.queryByRole("img")).not.toBeInTheDocument();
});
