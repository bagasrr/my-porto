"use client"; // Hook ini menggunakan API browser, jadi harus 'use client'

import { useState, useEffect, useRef } from "react";

// Hook ini akan menerima daftar ID dari section yang ingin diamati
export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Inisialisasi IntersectionObserver
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika sebuah section masuk ke dalam viewport, set sebagai section aktif
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Opsi: section dianggap "aktif" jika 50% bagiannya terlihat
      { threshold: 0.5 }
    );

    // Amati setiap section berdasarkan ID yang diberikan
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    // Cleanup: hentikan observasi saat komponen di-unmount
    return () => {
      observer.current?.disconnect();
    };
  }, [sectionIds]); // Jalankan efek ini jika sectionIds berubah

  return activeSection;
};
