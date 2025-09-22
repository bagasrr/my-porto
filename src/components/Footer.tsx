import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 dark:text-slate-400">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/bagasrr" target="_blank" className="hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/bagasrr17" target="_blank" className="hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:bagasramadhanrusnadi@gmail.com" className="hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Bagas Ramadhan Rusnadi. Dibuat dengan ❤️ menggunakan Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
};
