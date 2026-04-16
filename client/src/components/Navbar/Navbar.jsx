import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "../../constants";
import useActiveSection from "../../hooks/useActiveSection";
import myLogo from "../../assets/icons/msLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(sectionIds);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-sm px-6 py-3 flex items-center justify-between">
          {/* Logo — always visible */}
          {/* Mobile-only logo */}
          <div className="flex md:hidden items-center select-none">
            <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-widest">
                <img src={myLogo} alt="" />
              </span>
            </div>
          </div>

          {/* Desktop nav — hidden on mobile */}
          <ul className="hidden md:flex items-center gap-6">
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

          {/* Center logo — desktop only */}
          <div className="hidden md:flex items-center select-none mx-4">
            <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-content: center">
              <span className="text-white font-bold text-sm tracking-widest">
                <img src={myLogo} alt="" />
              </span>
            </div>
          </div>

          {/* Desktop right nav */}
          <ul className="hidden md:flex items-center gap-6">
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

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-navy p-1"
          >
            {menuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[80%] max-w-xs md:hidden"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            border: "1px solid rgba(15,27,76,0.1)",
            boxShadow: "0 20px 60px rgba(15,27,76,0.15)",
          }}
        >
          <ul className="flex flex-col p-4 gap-2">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block w-full text-center py-3 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                      active === id
                        ? "bg-navy text-white"
                        : "text-navy hover:bg-navy/10"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Backdrop to close menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
