import profileImg from "../../assets/images/profile.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Hello badge */}
      <div className="border border-gray-300 rounded-full px-5 py-1 text-sm text-gray-500 mb-6">
        Hello
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-center text-gray-400 font-light mb-2">
        I'm <span className="text-navy font-bold">Md Muntazeem Saradgi</span>
      </h1>

      {/* Roles row — image in center */}
      <div className="flex items-center justify-center gap-8 md:gap-16 mb-8 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-navy">
          Frontend Developer
        </h2>

        {/* Profile image — semicircle style */}
        <div className="relative w-52 md:w-64 h-52 md:h-64 flex-shrink-0">
          <div className="absolute bottom-0 left-0 right-0 h-[90%] bg-navy rounded-t-full overflow-hidden">
            <img
              src={profileImg}
              alt="Md Muntazeem Saradgi"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-navy">
          Agentic AI Developer
        </h2>
      </div>

      {/* Bottom row — bio left, buttons center, experience right */}
      <div className="w-full max-w-6xl px-6 flex items-end justify-between mt-4">
        {/* Left bio */}
        <p className="max-w-[220px] text-sm text-gray-500 italic leading-relaxed">
          I am a Frontend Developer specializing in HTML, CSS, JavaScript,
          TypeScript, Next.js, React.js, Vue.js, Tailwind CSS, n8n, Agentic AI,
          and Docker. I build fast, responsive, and SEO-optimized web
          applications.
        </p>

        {/* Center buttons */}
        <div className="flex gap-3 mb-2">
          <a
            href="#whyhireme"
            className="bg-navy text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-navy-light transition-colors duration-200"
          >
            About Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Right experience badge */}
        <div className="text-right">
          <div className="flex justify-end gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-orange-400 text-lg">
                ★
              </span>
            ))}
          </div>
          <p className="text-2xl font-bold text-navy">1 Years</p>
          <p className="text-sm text-gray-400">Experience</p>
        </div>
      </div>
    </section>
  );
}
