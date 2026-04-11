import { NAV_LINKS } from "../../constants";
import useActiveSection from "../../hooks/useActiveSection";

export default function Navbar() {
  const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(sectionIds);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-sm px-6 py-3 flex items-center justify-between">
        {/* Left nav links */}
        <ul className="flex items-center gap-6">
          {NAV_LINKS.slice(0, 4).map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    active === id
                      ? "text-navy font-semibold border-b-2 border-navy pb-0.5"
                      : "text-gray-600 hover:text-navy"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Center logo */}
        <div className="text-navy font-bold text-xl tracking-tight select-none mx-6">
          <span className="border-2 border-navy rounded-full px-2 py-1">
            MS
          </span>
        </div>

        {/* Right nav links */}
        <ul className="flex items-center gap-6">
          {NAV_LINKS.slice(4).map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    active === id
                      ? "text-navy font-semibold border-b-2 border-navy pb-0.5"
                      : "text-gray-600 hover:text-navy"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
