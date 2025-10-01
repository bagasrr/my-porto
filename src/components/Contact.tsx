import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <a href="https://github.com/bagasrr" target="_blank" className="text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
        <Github size={28} />
      </a>
      <a href="https://linkedin.com/in/bagasrr17" target="_blank" className="text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
        <Linkedin size={28} />
      </a>
      <a href="mailto:bagasramadhanrusnadi@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
        <Mail size={28} />
      </a>
    </div>
  );
};

export default Contact;
