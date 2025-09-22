import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import Skills from "../components/Skills";

export default function HomePage() {
  return (
    // Body utama dengan warna latar dasar
    <main className="bg-white dark:bg-slate-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
