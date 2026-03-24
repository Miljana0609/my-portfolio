import { FaJava, FaReact, FaDocker, FaAws, FaGithub } from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
} from "react-icons/si";
const tech = [
  { icon: <FaDocker color="#2496ED" />, name: "Docker" },
  { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <FaReact color="#61DAFB" />, name: "React" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiHtml5 color="#E34F26" />, name: "HTML" },
  { icon: <SiCss color="#1572B6" />, name: "CSS" },
  { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
  { icon: <FaGithub color="#F05032" />, name: "Git" },
  { icon: <FaAws color="#FF9900" />, name: "AWS" },
  { icon: <FaJava color="#007396" />, name: "Java" },
  { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#f1ede7]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Technologies
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#2c3a33]">
            Tech Stack<span className="text-accent">.</span>
          </h2>

          <p className="text-[#6b635c] max-w-lg mx-auto mt-4">
            Tools and technologies I work with and continuously develop my skills in.
          </p>
        </div>

        {/* SCROLL */}
        <div className="relative overflow-hidden">

          {/* Fade left */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#f1ede7] to-transparent z-10" />

          {/* Fade right */}
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#f1ede7] to-transparent z-10" />

          <div className="flex animate-scroll gap-8">

            {/* ORIGINAL */}
            {tech.map((item, i) => (
              <div
                key={`a-${i}`}
                className="flex flex-col items-center gap-2 flex-shrink-0 text-[#2c3a33] opacity-80 hover:opacity-100 transition"
              >
                <div className="text-4xl md:text-5xl">
                  {item.icon}
                </div>
                <span className="text-sm tracking-wide">
                  {item.name}
                </span>
              </div>
            ))}

            {/* DUPLICATE */}
            {tech.map((item, i) => (
              <div
                key={`b-${i}`}
                className="flex flex-col items-center gap-2 flex-shrink-0 text-[#2c3a33] opacity-80 hover:opacity-100 transition"
              >
                <div className="text-4xl md:text-5xl">
                  {item.icon}
                </div>
                <span className="text-sm tracking-wide">
                  {item.name}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;