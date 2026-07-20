import Scrollytelling from "@/components/Scrollytelling";
import GlobalCharacter from "@/components/GlobalCharacter";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white md:cursor-none relative">
      <Cursor />
      
      {/* The 3D Character fixed in the background tracking the mouse */}
      <GlobalCharacter />

      {/* Hero Section has its own solid bg so it hides the character until scrolled past */}
      <div className="relative z-20 bg-[#121212]">
        <Scrollytelling />
      </div>

      {/* The Projects grid */}
      <Projects />
      
      {/* 3D Tech Stack */}
      <TechStack />

      {/* Current Status and Internships */}
      <Experience />

      {/* Achievements and Extras */}
      <Achievements />

      {/* Footer Contact Section */}
      <Contact />
    </main>
  );
}
