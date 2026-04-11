import {
  FiFacebook,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiLink,
} from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const FOOTER_NAV = [
  "Home",
  "About",
  "Services",
  "Experience",
  "Project",
  "Resume",
];

const FOOTER_SERVICES = [
  "Website Development",
  "Responsive Design",
  "UI/UX Optimization",
  "Frontend Development",
  "Performance Improvement",
];

const SOCIAL_LINKS = [
//   { icon: FiFacebook, href: "#", label: "Facebook" },
  {
    icon: FiInstagram,
    href: "https://instagram.com/muntazeem._s_",
    label: "Instagram",
  },
  {
    icon: FiTwitter,
    href: "https://twitter.com/md_muntazeem",
    label: "Twitter",
  },
  {
    icon: FiGithub,
    href: "https://github.com/MDMUNTAZEEMSARADGI",
    label: "GitHub",
  },
//   { icon: SiFiverr, href: "#", label: "Fiverr" },
//   { icon: FiLink, href: "#", label: "Website" },/
//   { icon: BsWhatsapp, href: "#", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-navy font-bold text-lg">Let's connect there</h3>
          <a
            href="#contact"
            className="border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-500 hover:border-navy hover:text-navy transition-colors duration-200 bg-white"
          >
            Hire me
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-10" />

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="w-12 h-12 rounded-full border-2 border-navy flex items-center justify-center">
              <span className="text-navy font-bold text-sm">MS</span>
            </div>

            <div>
              <h4 className="text-navy font-bold text-lg">
                Md Muntazeem Saradgi
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mt-2 max-w-xs">
                Passionate frontend developer delivering modern, responsive, and
                user-friendly websites. I focus on clean code, performance, and
                a premium UI/UX experience.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 flex-wrap mt-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-navy transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h5 className="text-navy font-semibold text-sm mb-4">Navigation</h5>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 text-sm hover:text-navy transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h5 className="text-navy font-semibold text-sm mb-4">Services</h5>
            <ul className="flex flex-col gap-3">
              {FOOTER_SERVICES.map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h5 className="text-navy font-semibold text-sm mb-4">Contact</h5>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+91 8792198726"
                  className="text-gray-400 text-sm hover:text-navy transition-colors duration-200"
                >
                  +91 8792198726
                </a>
              </li>
              <li>
                <a
                  href="mailto:mdmuntazeemsaradgi@gmail.com"
                  className="text-gray-400 text-sm hover:text-navy transition-colors duration-200"
                >
                  mdmuntazeemsaradgi@email.com
                </a>
              </li>
              <li>
                <a
                  href="https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-navy transition-colors duration-200"
                >
                  www.workingOnIT.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="w-full h-px bg-gray-100 mb-6" />
        <p className="text-center text-gray-400 text-xs">
          © 2026 Md Muntazeem Saradgi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
