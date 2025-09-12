import Reveal from "./Reveal";

function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      ],
    },
    {
      title: "UI/UX & Tools",
      skills: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC" }, 
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "Indonesia", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" },
        { name: "Inggris", icon: "https://cdn-icons-png.flaticon.com/512/197/197374.png" },
        { name: "Arab", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <Reveal>
        <h2 className="text-sm font-bold dark:text-white text-gray-900">
          Skills
        </h2>
      </Reveal>

      {categories.map((category, index) => (
        <Reveal delay={index * 0.15} key={index}>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold dark:text-gray-300 text-gray-600">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 group transition-transform hover:scale-[1.02] duration-200"
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`w-5 h-5 object-contain ${
                        skill.name === "GitHub"
                          ? "dark:invert"
                          : ""
                      }`}
                    />
                  )}
                  <span className="text-sm dark:text-gray-400 text-gray-700 group-hover:dark:text-white group-hover:text-black">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

export default Skills;
