"use client"; // Tandai sebagai Client Component

import Link from "next/link";
import { useActiveSection } from "../hooks/useActiveSection";
import Image from "next/image";

// Helper function untuk menggabungkan class (opsional, tapi rapi)
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export const Navbar = () => {
  // 1. Definisikan section yang ingin diamati
  const sectionIds = ["hero", "about", "projects", "contact"];

  // 2. Gunakan custom hook kita untuk mendapatkan section yang aktif
  const activeSection = useActiveSection(sectionIds);

  // 3. Definisikan link navigasi
  const navLinks = [
    { href: "#about", label: "Tentang Saya" },
    { href: "#projects", label: "Proyek" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-maroon-800 dark:text-maroon-300">
          <Image src="/images/logokecil-transparent.png" alt="Logo Bagas Ramadhan Rusnadi" width={40} height={40} className="inline-block mr-2" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-maroon-700 dark:hover:text-maroon-400",
                // 4. Terapkan class `active` jika link ini adalah section yang sedang aktif
                activeSection === link.href.substring(1) ? "text-maroon-700 dark:text-maroon-400 font-semibold" : "text-slate-600 dark:text-slate-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a href="/cv-bagas.pdf" target="_blank" rel="noopener noreferrer" className="bg-maroon-700 text-white px-4 py-2 rounded-md hover:bg-maroon-800 transition-colors">
          Download CV
        </a>
      </nav>
      <div className="h-px bg-gradient-to-r from-transparent via-maroon-300 to-transparent dark:via-maroon-800"></div>
    </header>
  );
};
