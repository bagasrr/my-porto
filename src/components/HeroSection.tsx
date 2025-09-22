import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
          Halo, saya <span className="text-maroon-600 dark:text-maroon-500">Bagas Ramadhan Rusnadi</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">Seorang Full-Stack Developer yang bersemangat membangun aplikasi web yang modern dan fungsional.</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" target="_blank" className="text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
            <Github size={28} />
          </a>
          <a href="#" target="_blank" className="text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:emailkamu@example.com" className="text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
            <Mail size={28} />
          </a>
        </div>
        <a href="#projects" className="inline-flex items-center justify-center bg-maroon-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-maroon-700 transition-all duration-300 shadow-lg">
          Lihat Proyek Saya <ArrowDown className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};
