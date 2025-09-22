import { Mail } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Hubungi Saya</SectionTitle>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">Saya selalu terbuka untuk peluang baru dan kolaborasi. Jika Anda memiliki pertanyaan atau hanya ingin menyapa, jangan ragu untuk mengirimkan email.</p>
        <a href="mailto:emailkamu@example.com" className="inline-flex items-center justify-center bg-maroon-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-maroon-700 transition-all duration-300 shadow-lg">
          <Mail className="mr-2 h-5 w-5" /> Kirim Email
        </a>
      </div>
    </section>
  );
};
