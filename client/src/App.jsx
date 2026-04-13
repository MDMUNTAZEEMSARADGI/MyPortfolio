import Navbar from "./components/Navbar/Navbar";
import About from "./components/sections/About";
import WhyHireMe from "./components/sections/WhyHireMe";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Idea from "./components/sections/Idea";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ChatBot from "./components/ui/ChatBot";

export default function App() {
  return (
    <>
      {/* ✅ Fixed background — stays in place while page scrolls */}
      <div className="grid-bg-fixed" />

      {/* ✅ Main content scrolls over the background */}
      <div className="relative min-h-screen font-sans">
        <Navbar />
        <main>
          <About />
          <WhyHireMe />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <Idea />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}
