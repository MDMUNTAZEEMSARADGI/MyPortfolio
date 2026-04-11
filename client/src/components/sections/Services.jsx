import { useState } from "react";

import { SERVICES } from "../../constants";

import {
  SiHtml5, SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiFigma, SiTailwindcss, SiBootstrap,
  SiMysql, SiMongodb, SiFirebase,
  SiVercel, SiNetlify, SiGithub, SiDocker,
} from "react-icons/si";

import {
  FiCode, FiSmartphone, FiZap, FiShield, FiGlobe,
} from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";

const ICON_MAP = {
  "Frontend Mastery":    <FiCode className="w-8 h-8 text-navy" />,
  "UI/UX & Design":      <MdOutlineDesignServices className="w-8 h-8 text-navy" />,
  "Mobile Development":  <FiSmartphone className="w-8 h-8 text-navy" />,
  "Performance & SEO":   <FiZap className="w-8 h-8 text-navy" />,
  "Backend & Database":  <FiShield className="w-8 h-8 text-navy" />,
  "Deployment & Tools":  <FiGlobe className="w-8 h-8 text-navy" />,
};

const SERVICES_DATA = [
  {
    title: "Frontend Mastery",
    items: ["HTML", "CSS/SCSS", "JavaScript", "TypeScript", "React.js", "Next.js 14+"],
  },
  {
    title: "UI/UX & Design",
    items: ["Figma", "Tailwind CSS", "Bootstrap", "Design Systems", "Prototyping", "Animations"],
  },
  {
    title: "Mobile Development",
    items: ["React Native", "Responsive Design", "PWA", "Touch Optimized", "Cross-Platform"],
  },
  {
    title: "Performance & SEO",
    items: ["95+ Lighthouse", "SSR/SSG", "Image Optimization", "Core Web Vitals", "SEO", "Schema"],
  },
  {
    title: "Backend & Database",
    items: ["MySQL", "MongoDB", "Firebase", "REST APIs", "Authentication"],
  },
  {
    title: "Deployment & Tools",
    items: ["Vercel", "Netlify", "GitHub", "VS Code", "Sanity CMS", "n8n Automation"],
  },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-3xl p-8 flex flex-col gap-6 cursor-default overflow-hidden transition-all duration-300"
      style={{
        boxShadow: hovered
          ? "0 20px 60px rgba(15, 27, 76, 0.12), 0 4px 20px rgba(15, 27, 76, 0.08)"
          : "0 2px 20px rgba(15, 27, 76, 0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        border: "1px solid rgba(15, 27, 76, 0.08)",
      }}
    >
      {/* Subtle corner glow on hover */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, rgba(15,27,76,0.06) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
        {ICON_MAP[service.title]}
      </div>

      {/* Title */}
      <h3 className="text-navy font-bold text-xl">
        {service.title}
      </h3>

      {/* Items list */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
            <span
              className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Contact link */}
      <a
        href="#contact"
        className="flex items-center gap-1.5 text-sm font-medium text-navy hover:gap-3 transition-all duration-200 mt-2 group"
      >
        Contact
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-500 bg-white/80">
            <span>✦</span>
            <span className="tracking-widest text-xs font-medium uppercase">My Expertise</span>
            <span>✦</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-navy">Premium </span>
            <span className="text-gray-300">Services</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Crafting responsive, interactive, and visually appealing web applications
            using modern frontend technologies, ensuring clean code, optimal
            performance, and seamless user experiences.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Bottom CTA button */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 hover:gap-4"
          >
            Hire Me Now
            <span className="text-base">✦</span>
          </a>
        </div>

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