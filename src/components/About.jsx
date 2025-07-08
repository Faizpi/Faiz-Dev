import Reveal from "./Reveal";
function About() {
  return (
    <section className="space-y-2">
      <Reveal>
      <h2 className="text-sm font-bold text-white">About</h2>
      </Reveal>

      <Reveal delay={0.2}>
      <p className="text-gray-400 text-sm leading-relaxed">
        Informatics student at Sultan Ageng Tirtayasa University, focused on UI/UX Design and Web Development. Passionate about crafting intuitive, functional, and visually engaging digital experiences. Experienced with modern web technologies and design tools, and eager to keep learning and building impactful solutions.  
      </p>
      </Reveal>
    </section>
  );
}

export default About;
