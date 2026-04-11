const EXPERIENCE = [
  {
    company: "Autoboli",
    role: "Frontend Developer (Vue.js)",
    period: "Dec 2025 - Present",
    current: true,
    description:
      "Joined Autoboli and working on developing responsive and dynamic interfaces with Vue.js. Focused on building reusable components, improving performance, and enhancing user experience across the platform.",
  },
  {
    company: "Aykays",
    role: "Frontend Developer (React.js, Next.js)",
    period: "June 2025 - Aug 2025",
    current: false,
    description:
      "Working at Aykays on modern frontend projects. Building scalable UI components with Next.js and Tailwind CSS. Collaborating with the team to improve performance, UX, and design workflows.",
  },
  {
    company: "Skytech",
    role: "Frontend Developer (React.js)",
    period: "Jan 2025 - June 2025",
    current: false,
    description:
      "Worked at Skytech as a frontend developer. Developed high-performance web apps using Next.js and React. Focused on clean UI, user experience, and cross-browser responsive layouts for real clients.",
  },
];

function TimelineItem({ exp, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-0 w-full">
      {/* Left side */}
      <div
        className={`w-1/2 ${
          isLeft
            ? "pr-12 text-right flex flex-col items-end"
            : "pr-12 flex flex-col items-end opacity-0 pointer-events-none"
        }`}
      >
        {isLeft && (
          <>
            {/* Company */}
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: "#0f1b4c" }}
            >
              {exp.company},
            </h3>

            {/* Period */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  strokeWidth="2"
                />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
              </svg>
              {exp.period}
            </div>
          </>
        )}
      </div>

      {/* Center timeline dot */}
      <div className="relative flex flex-col items-center z-10 flex-shrink-0">
        {/* Dot */}
        <div
          className="w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all duration-300"
          style={{
            background: exp.current ? "white" : "#0f1b4c",
            borderColor: "#0f1b4c",
            boxShadow: exp.current ? "0 0 0 4px rgba(15,27,76,0.15)" : "none",
          }}
        />
      </div>

      {/* Right side */}
      <div
        className={`w-1/2 ${
          isLeft ? "pl-12 opacity-0 pointer-events-none" : "pl-12"
        }`}
      >
        {!isLeft && (
          <>
            {/* Company */}
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: "#0f1b4c" }}
            >
              {exp.company},
            </h3>

            {/* Period */}
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  strokeWidth="2"
                />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
              </svg>
              {exp.period}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="exprience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-navy">My </span>
            <span className="text-gray-300">Work </span>
            <span className="text-navy">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                "repeating-linear-gradient(to bottom, #cbd5e1 0px, #cbd5e1 6px, transparent 6px, transparent 12px)",
            }}
          />

          {/* Timeline items */}
          <div className="flex flex-col gap-16">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.company} className="relative">
                {/* Left/Right label row */}
                <div className="flex items-start">
                  {/* Left column */}
                  <div className="w-1/2 pr-12 flex flex-col items-end">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-2xl font-bold text-navy">
                          {exp.company},
                        </h3>
                        <div className="flex items-center gap-1.5 text-gray-400 text-sm mt-1">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              strokeWidth="2"
                            />
                            <line
                              x1="16"
                              y1="2"
                              x2="16"
                              y2="6"
                              strokeWidth="2"
                            />
                            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                            <line
                              x1="3"
                              y1="10"
                              x2="21"
                              y2="10"
                              strokeWidth="2"
                            />
                          </svg>
                          {exp.period}
                        </div>
                      </>
                    ) : (
                      // empty placeholder to keep layout
                      <div />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex-shrink-0 -translate-x-1/2">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-navy"
                      style={{
                        background: exp.current ? "white" : "#0f1b4c",
                        boxShadow: exp.current
                          ? "0 0 0 5px rgba(15,27,76,0.12), 0 0 0 9px rgba(15,27,76,0.05)"
                          : "none",
                      }}
                    />
                  </div>

                  {/* Right column */}
                  <div className="w-1/2 pl-12">
                    {index % 2 !== 0 ? (
                      <>
                        <h3 className="text-2xl font-bold text-navy">
                          {exp.company},
                        </h3>
                        <div className="flex items-center gap-1.5 text-gray-400 text-sm mt-1">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              strokeWidth="2"
                            />
                            <line
                              x1="16"
                              y1="2"
                              x2="16"
                              y2="6"
                              strokeWidth="2"
                            />
                            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                            <line
                              x1="3"
                              y1="10"
                              x2="21"
                              y2="10"
                              strokeWidth="2"
                            />
                          </svg>
                          {exp.period}
                        </div>
                      </>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>

                {/* Role + description — always on right of center */}
                <div className="flex mt-4">
                  <div className="w-1/2" />
                  <div className="w-px flex-shrink-0" />
                  <div className="w-1/2 pl-12">
                    <h4 className="text-navy font-bold text-lg mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider with diamond */}
        <div className="relative flex items-center justify-center mt-24">
          <div className="w-full h-px bg-gray-200" />
          <div
            className="absolute w-3 h-3 bg-navy rotate-45"
            style={{ boxShadow: "0 0 0 3px white, 0 0 0 4px #e5e7eb" }}
          />
        </div>
      </div>
    </section>
  );
}
