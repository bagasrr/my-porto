import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold text-maroon-600 dark:text-maroon-500">
          <Image src="/images/Logo BR Kecil.jpeg" alt="Logo" width={40} height={40} className="inline-block mr-2" />
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
            Tentang Saya
          </a>
          <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
            Proyek
          </a>
          <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 transition-colors">
            Kontak
          </a>
          <a href="/resume/CV_Software_Engineer.pdf" target="_blank" className="bg-maroon-600 text-white px-4 py-2 rounded-md hover:bg-maroon-700 transition-all duration-300">
            Download CV
          </a>
        </nav>
        {/* Tombol menu untuk mobile bisa ditambahkan di sini */}
      </div>
    </header>
  );
};
