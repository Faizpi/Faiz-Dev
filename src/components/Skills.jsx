import Reveal from "./Reveal";

function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS", icon: "https://cdn.simpleicons.org/css3/1572B6" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "C#", icon: "https://img.icons8.com/color/48/000000/c-sharp-logo.png" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express.js", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },
        { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
        { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
      ],
    },
    {
      title: "UI/UX & Tools",
      skills: [
        { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
        { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "Indonesia", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"},
        { name: "Inggris", icon: "https://cdn-icons-png.flaticon.com/512/197/197374.png" },
        { name: "Arab", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <Reveal>
        <h2 className="text-sm font-bold text-white">Skills</h2>
      </Reveal>

      {categories.map((category, index) => (
        <Reveal delay={index * 0.15} key={index}>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-300">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 group transition-transform hover:scale-[1.02] duration-200">
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <span className="text-sm text-gray-300 group-hover:text-white">
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
