import Reveal from "./Reveal";
import DecayCard from "./DecayCard";
import { useLang } from "../context/LanguageContext";
import translations from "../context/translations";

function About() {
  const { lang } = useLang();
  const t = translations[lang].about;

  return (
    <section className="space-y-4">
      <Reveal>
        <h2 className="text-sm font-bold dark:text-white text-black">{t.title}</h2>
      </Reveal>

      <div className="flex flex-row items-center gap-6">
        <div className="flex-1">
          <Reveal delay={0.2}>
            <p className="text-justify text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              {t.bio}
            </p>
          </Reveal>
        </div>

        <div className="flex-shrink-0">
          <Reveal delay={0.2}>
            <DecayCard
              width={128}
              height={240}
              image={`${process.env.PUBLIC_URL}/faizpp.jpg`}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;