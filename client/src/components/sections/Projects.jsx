import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const PROJECTS = [
  {
    title: "Sparkio",
    category: "E-commerce",
    description:
      "A dynamic full stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    github: "#",
    live: null,
    image: "/images/sparkio.png",
  },
  {
    title: "SkyTech Official Website",
    category: "Live Project",
    description:
      "SkyTech is a professional software house website built to showcase services, expertise, and portfolio for clients.",
    github: "#",
    live: "#",
    image: "/images/skytech.png",
  },
  {
    title: "Mobile Mart",
    category: "Live Project",
    description:
      "A milestone dynamic E-commerce website using Next.js, Tailwind CSS, Tailblocks, Shadcn UI, UI/UX.",
    github: "#",
    live: "#",
    image: "/images/mobilemart.png",
  },
  {
    title: "Health Agent",
    category: "Healthcare App",
    description:
      "Your personal health & wellness AI assistant built with modern frontend and agentic AI tools.",
    github: "#",
    live: null,
    image: "/images/healthagent.png",
  },
  {
    title: "Saleem Enterprises",
    category: "Client Project",
    description:
      "High-quality solid surface solutions website — transforming homes and businesses with durable, elegant Corian surfaces.",
    github: "#",
    live: null,
    image: "/images/saleem.png",
  },
  {
    title: "Attendance Management",
    category: "Attendance Management",
    description:
      "A milestone student attendance management system with login, dashboard, and reporting.",
    github: "#",
    live: null,
    image: "/images/attendance.png",
  },
];

const FILTERS = [
  "All",
  "E-commerce",
  "Live Project",
  "Healthcare App",
  "Client Project",
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 cursor-default"
      style={{
        boxShadow: hovered
          ? "0 20px 50px rgba(15,27,76,0.12), 0 4px 20px rgba(15,27,76,0.08)"
          : "0 2px 16px rgba(15,27,76,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        border: "1px solid rgba(15,27,76,0.07)",
      }}
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.classList.add(
              "flex",
              "items-center",
              "justify-center",
            );
          }}
        />

        {/* External link icon top right */}
        <a
          href={project.live || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <FiExternalLink className="w-4 h-4 text-navy" />
        </a>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Category badge */}
        <span className="text-xs text-gray-400 font-medium border border-gray-200 rounded-full px-3 py-1 w-fit">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-navy font-bold text-lg leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-2">
          {project.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
          <span className="text-xs text-gray-400 font-medium">
            Md Muntazeem Saradgi
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-navy font-medium hover:opacity-70 transition-opacity duration-200"
          >
            <FiGithub className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="project" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row — heading + see all */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-navy">Md Muntazeem Saradgi </span>
            <span className="text-gray-300">Projects</span>
          </h2>
          <button
            onClick={() => setActiveFilter("All")}
            className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-500 hover:border-navy hover:text-navy transition-colors duration-200 bg-white"
          >
            See All
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border"
              style={{
                background: activeFilter === filter ? "#0f1b4c" : "white",
                color: activeFilter === filter ? "white" : "#6b7280",
                borderColor: activeFilter === filter ? "#0f1b4c" : "#e5e7eb",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-sm">
            No projects found in this category.
          </div>
        )}

        {/* Divider with diamond */}
        <div className="relative flex items-center justify-center mt-20">
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
