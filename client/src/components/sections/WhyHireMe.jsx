import profileImg from "../../assets/images/profile.png";

const POINTS = [
  "1+ Years of hands-on experience building full-stack web applications with the MERN stack (MongoDB, Express.js, React.js, Node.js)",
  "Proficient in designing RESTful APIs, JWT authentication, and scalable server-side architecture",
  "Strong command of React.js including hooks, Redux state management, and reusable component architecture",
  "Experienced in responsive UI development using Tailwind CSS, SCSS, and modern CSS techniques",
  "Committed to writing clean, maintainable code with a focus on performance optimization and best practices",
];

export default function WhyHireMe() {
  return (
    <section id="whyhireme" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Why Hire Me?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Passionate about delivering high-quality, responsive, and
            user-friendly websites. I bring creativity, precision, and modern
            web standards to every project I work on.
          </p>
        </div>

        {/* Main content row */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left — profile image with circle style */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-navy/10">
              <img
                src={profileImg}
                alt="Md Muntazeem Saradgi"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-navy mb-2">Why Hire Me?</h3>
            <h4 className="text-3xl font-bold text-navy mb-5">
              Turning Ideas Into Reality
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              I am <strong className="text-navy">Md Muntazeem Saradgi</strong>,
              a MERN Full Stack Developer specializing in{" "}
              <strong className="text-navy">
                JavaScript, React.js, Node.js, Expressjs, tailwindcss, MongoDB
                and MySQL
              </strong>
              . My mission is to build visually stunning, high-performance web
              applications that provide seamless user experiences.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8">
              {POINTS.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="text-navy mt-0.5">↘</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-navy text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-200"
              >
                Contact Me
              </a>
              <a
                href="/Md_Muntazeem_Saradgi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-navy text-navy px-6 py-2.5 rounded-full text-sm font-medium hover:bg-navy hover:text-white transition-colors duration-200"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="text-center mt-20">
          <p className="text-gray-400 italic text-sm max-w-2xl mx-auto leading-relaxed">
            "I believe great design isn't just how it looks — it's how it feels
            and performs. I'm here to build digital experiences that leave a
            lasting impression."
          </p>
          <p className="text-navy font-semibold mt-3 text-sm">
            Md Muntazeem Saradgi
          </p>
        </div>
      </div>
    </section>
  );
}
