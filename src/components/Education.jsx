import Reveal from "./Reveal"; 

function Education() {
  const education = [
    {
      year: "2023 – Present",
      logo: `${process.env.PUBLIC_URL}/Untirta.png`,
      institution: "Universitas Sultan Ageng Tirtayasa",
      degree: "S1 Informatika",
      desc: "GPA 3.85 / 4.0",
    },
  ];

  const trainings = [
    {
      year: "Februari 2025",
      logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      institution: "AWS",
      degree: "Fundamentals of Analytics on AWS",
      desc: "Data lakes, data analytics, and AWS analytics services.",
    },
    {
      year: "Januari 2025",
      logo: `${process.env.PUBLIC_URL}/udemy.png`,
      institution: "Udemy",
      degree: "The Complete 2024 Web Development Bootcamp",
      desc: "Covers HTML, CSS, JS, Node.js, MongoDB, Express.js, React.js, APIs, and deployment.",
    },
    {
      year: "Januari 2025",
      logo: `${process.env.PUBLIC_URL}/udemy.png`,
      institution: "Udemy",
      degree: "Front-End Web Developer Bootcamp",
      desc: "Frontend mastery using modern tools and best practices.",
    },
    {
      year: "Desember 2024",
      logo: `${process.env.PUBLIC_URL}/udemy.png`,
      institution: "Udemy",
      degree: "Basics of Database Design & Development",
      desc: "Covers relational databases, ERD, normalization, and SQL.",
    },
  ];

  const renderItem = (item, i) => (
    <Reveal delay={i * 0.2} key={i}>
      <div className="grid grid-cols-12 gap-4 items-start py-2">
        <div className="col-span-2 text-xs text-gray-500 pt-2">{item.year}</div>
        <div className="col-span-2 flex justify-center">
          <img
            src={item.logo}
            alt={item.institution}
            className="w-10 h-10 object-contain rounded-full bg-white p-1"
          />
        </div>
        <div className="col-span-8 space-y-1">
          <h3 className="text-sm font-semibold text-white">{item.institution}</h3>
          <p className="text-xs text-gray-400">{item.degree}</p>
          <p className="text-xs text-gray-500">{item.desc}</p>
        </div>
      </div>
    </Reveal>
  );

  return (
    <section className="space-y-8">
      <Reveal>
        <h2 className="text-sm font-bold text-white">Education</h2>
      </Reveal>
      {education.map(renderItem)}

      <Reveal>
        <h2 className="text-sm font-bold text-white pt-4">Certifications & Trainings</h2>
      </Reveal>
      {trainings.map(renderItem)}
    </section>
  );
}

export default Education;
