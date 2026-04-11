import { useState, useEffect, useRef } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiDocker,
  SiNodedotjs,
  SiPython,
  SiFigma,
} from "react-icons/si";

const SKILLS = [
  {
    icon: SiHtml5,
    name: "HTML5",
    color: "#e34f26",
    desc: "Semantic markup and modern HTML5 features.",
  },
  //   { icon: SiCss3,        name: "CSS",          color: "#1572b6", desc: "Modern styling with animations and responsive layouts." },
  {
    icon: SiJavascript,
    name: "JavaScript",
    color: "#f7df1e",
    desc: "ES6+ features, async/await, and DOM manipulation.",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178c6",
    desc: "Strongly typed JavaScript for scalable apps.",
  },
  {
    icon: SiReact,
    name: "React.js",
    color: "#61dafb",
    desc: "Component-based UI with hooks and context.",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "#000000",
    desc: "SSR, SSG, and full-stack React framework.",
  },
  {
    icon: SiVuedotjs,
    name: "Vue.js",
    color: "#42b883",
    desc: "Progressive framework for building UIs.",
  },
  //   { icon: SiNuxtdotjs,   name: "Nuxt.js",      color: "#00dc82", desc: "Vue-based SSR and static site framework." },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#38bdf8",
    desc: "Utility-first CSS for rapid UI development.",
  },
  {
    icon: SiBootstrap,
    name: "Bootstrap",
    color: "#7952b3",
    desc: "Responsive grid system and UI components.",
  },
  {
    icon: SiPhp,
    name: "PHP",
    color: "#777bb4",
    desc: "Server-side scripting for web development.",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    color: "#4479a1",
    desc: "Relational database management system.",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "#47a248",
    desc: "NoSQL document-oriented database.",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
    color: "#ffca28",
    desc: "Backend as a service with realtime database.",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    color: "#339933",
    desc: "JavaScript runtime for backend development.",
  },
  {
    icon: SiDocker,
    name: "Docker",
    color: "#2496ed",
    desc: "Containerization for consistent environments.",
  },
  {
    icon: SiPython,
    name: "Python",
    color: "#3776ab",
    desc: "Scripting, automation, and AI development.",
  },
  {
    icon: SiFigma,
    name: "Figma",
    color: "#f24e1e",
    desc: "UI/UX design and prototyping tool.",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    color: "#181717",
    desc: "Version control and collaboration platform.",
  },
];

// generate stable random positions once
function generatePositions(count) {
  const positions = [];
  const centerX = 50;
  const centerY = 50;
  const minDist = 12;
  const centerClear = 18;

  let attempts = 0;
  while (positions.length < count && attempts < 2000) {
    attempts++;
    const x = 5 + Math.random() * 90;
    const y = 5 + Math.random() * 90;

    const distFromCenter = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2),
    );
    if (distFromCenter < centerClear) continue;

    const tooClose = positions.some((p) => {
      const d = Math.sqrt(Math.pow(x - p.x, 2) + Math.pow(y - p.y, 2));
      return d < minDist;
    });
    if (tooClose) continue;

    positions.push({
      x,
      y,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
      rangeX: 6 + Math.random() * 8,
      rangeY: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
      size: Math.random() > 0.5 ? "lg" : "sm",
    });
  }
  return positions;
}

const POSITIONS = generatePositions(SKILLS.length);

export default function Skills() {
  const [active, setActive] = useState(SKILLS[1]); // CSS default like screenshot
  const [styleTag, setStyleTag] = useState("");

  useEffect(() => {
    // build keyframes for each icon dynamically
    const css = POSITIONS.map(
      (p, i) => `
      @keyframes float-${i} {
        0%   { transform: translate(0px, 0px) rotate(${p.rotation}deg); }
        25%  { transform: translate(${p.rangeX}px, ${-p.rangeY}px) rotate(${p.rotation + 5}deg); }
        50%  { transform: translate(${-p.rangeX * 0.5}px, ${p.rangeY}px) rotate(${p.rotation - 3}deg); }
        75%  { transform: translate(${p.rangeX * 0.7}px, ${p.rangeY * 0.5}px) rotate(${p.rotation + 2}deg); }
        100% { transform: translate(0px, 0px) rotate(${p.rotation}deg); }
      }
      .float-icon-${i} {
        animation: float-${i} ${p.duration}s ease-in-out ${p.delay}s infinite;
      }
    `,
    ).join("\n");
    setStyleTag(css);
  }, []);

  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            My Expertise
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Creating sleek, responsive, and user-friendly interfaces with modern
            frameworks and tools, ensuring seamless interactivity and polished
            design across web applications.
          </p>
        </div>

        {/* Floating area */}
        <div className="relative w-full h-[600px] md:h-[700px]">
          {/* Inject keyframe animations */}
          {styleTag && <style>{styleTag}</style>}

          {/* Floating icons */}
          {SKILLS.map((skill, i) => {
            const pos = POSITIONS[i];
            if (!pos) return null;
            const Icon = skill.icon;
            const isLg = pos.size === "lg";
            const isActive = active.name === skill.name;

            return (
              <button
                key={skill.name}
                onClick={() => setActive(skill)}
                className={`float-icon-${i} absolute cursor-pointer transition-transform duration-200 hover:scale-125 ${
                  isActive ? "scale-125" : ""
                }`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                title={skill.name}
              >
                <Icon
                  style={{ color: skill.color }}
                  className={
                    isLg ? "w-8 h-8 md:w-10 md:h-10" : "w-5 h-5 md:w-7 md:h-7"
                  }
                />
              </button>
            );
          })}

          {/* Center active skill card */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col items-center gap-3 text-center">
              {/* Glowing circle */}
              <div
                className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-lg transition-all duration-500"
                style={{
                  background: `radial-gradient(circle, ${active.color}22 0%, ${active.color}08 100%)`,
                  border: `2px solid ${active.color}33`,
                  boxShadow: `0 0 40px ${active.color}22`,
                }}
              >
                {(() => {
                  const Icon = active.icon;
                  return (
                    <Icon
                      style={{ color: active.color }}
                      className="w-14 h-14 md:w-16 md:h-16 transition-all duration-500"
                    />
                  );
                })()}
              </div>

              {/* Skill name */}
              <p className="text-navy font-bold text-xl md:text-2xl">
                {active.name}
              </p>

              {/* Skill desc */}
              <p className="text-gray-400 text-xs md:text-sm max-w-[180px] leading-relaxed">
                {active.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
