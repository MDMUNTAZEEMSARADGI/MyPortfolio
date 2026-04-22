const TIMELINE = [
  // WORK EXPERIENCE
  {
    type: "work",
    company: "Aroha Technologies",
    role: "MERN Full Stack Developer",
    period: "July 2025 – Present",
    current: true,
    description:
      "Building and maintaining scalable full-stack web applications. Developing responsive React.js interfaces with Redux, designing RESTful APIs using Node.js and Express.js, and managing MongoDB databases with Mongoose. Collaborating in an Agile team to deliver production-ready features and optimize performance.",
  },
  // EDUCATION
  {
    type: "education",
    company: "PDA College of Engineering, Kalaburagi",
    role: "B.E. in Information Science",
    period: "Aug 2020 – Jun 2024",
    current: false,
    description:
      "Graduated with a GPA of 7.15. Gained strong foundations in Data Structures & Algorithms, Object-Oriented Programming, Database Management, and Software Engineering principles.",
  },
  {
    type: "education",
    company: "Gurukul Independent PU College",
    role: "12th — Science (PCME)",
    period: "2019 – 2020",
    current: false,
    description: "Completed 12th grade with 83.16%, building a solid academic foundation in Science and Mathematics.",
  },
  {
    type: "education",
    company: "New Noble Boys High School",
    role: "10th — SSLC",
    period: "2018",
    current: false,
    description: "Completed 10th grade with 79.36%, developing strong fundamentals in core subjects.",
  },
];

// Icons
function WorkIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeWidth="2" />
    </svg>
  );
}

function EduIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 12v5c3.33 2 8.67 2 12 0v-5" strokeWidth="2" />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
    </svg>
  );
}

function TimelineItem({ exp, index }) {
  const isLeft = index % 2 === 0;
  const isWork = exp.type === "work";

  const badge = (
    <span
      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
      style={{
        background: isWork ? "rgba(15,27,76,0.08)" : "rgba(234,88,12,0.08)",
        color: isWork ? "#0f1b4c" : "#ea580c",
      }}
    >
      {isWork ? <WorkIcon /> : <EduIcon />}
      {isWork ? "Work Experience" : "Education"}
    </span>
  );

  const content = (
    <div className={isLeft ? "text-right flex flex-col items-end" : "text-left flex flex-col items-start"}>
      {badge}
      <h3 className="text-xl font-bold text-navy leading-tight">{exp.company}</h3>
      <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-1 mb-2">
        <CalIcon />
        {exp.period}
        {exp.current && (
          <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-600">
            Current
          </span>
        )}
      </div>
      <h4 className="text-navy font-semibold text-sm mb-2">{exp.role}</h4>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{exp.description}</p>
    </div>
  );

  return (
    <div className="relative flex items-start w-full">
      {/* Left column */}
      <div className="w-1/2 pr-10 flex flex-col items-end">
        {isLeft ? content : <div />}
      </div>

      {/* Center dot */}
      <div className="relative z-10 flex-shrink-0 flex items-start justify-center" style={{ width: "20px", marginTop: "6px" }}>
        <div
          className="w-4 h-4 rounded-full border-2 flex-shrink-0"
          style={{
            background: exp.current ? "white" : isWork ? "#0f1b4c" : "#ea580c",
            borderColor: isWork ? "#0f1b4c" : "#ea580c",
            boxShadow: exp.current
              ? "0 0 0 5px rgba(15,27,76,0.1), 0 0 0 9px rgba(15,27,76,0.04)"
              : "none",
          }}
        />
      </div>

      {/* Right column */}
      <div className="w-1/2 pl-10">
        {!isLeft ? content : <div />}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-navy">Experience </span>
            <span className="text-gray-300">&amp; </span>
            <span className="text-navy">Education</span>
          </h2>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-3 h-3 rounded-full bg-navy" />
            Work Experience
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            Education
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line */}
          <div
            className="absolute top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              left: "50%",
              background:
                "repeating-linear-gradient(to bottom, #cbd5e1 0px, #cbd5e1 6px, transparent 6px, transparent 12px)",
            }}
          />

          <div className="flex flex-col gap-14">
            {TIMELINE.map((exp, index) => (
              <TimelineItem key={`${exp.company}-${index}`} exp={exp} index={index} />
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