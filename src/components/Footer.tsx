import { Github, Linkedin, Mail } from "lucide-react";
import Contact from "./Contact";

export const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 dark:text-slate-400">
        <Contact />
        <p>&copy; {new Date().getFullYear()} Bagas Ramadhan Rusnadi. Dibuat dengan ❤️ menggunakan Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
};
