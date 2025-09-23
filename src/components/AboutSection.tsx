import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { Tag } from "lucide-react";
import { ImageWithSkeleton } from "./ImageWithSkeleton";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Tentang Saya</SectionTitle>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              {/* <Image src="/images/profile.jpeg" alt="Foto Profil Bagas Ramadhan Rusnadi" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" /> */}
              <ImageWithSkeleton src="/images/profile.jpeg" alt="Foto Profil Bagas Ramadhan Rusnadi" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
              Saya adalah seorang web developer dengan pengalaman dalam menciptakan aplikasi web yang responsif dan efisien. Saya memiliki ketertarikan mendalam pada teknologi front-end modern dan arsitektur back-end yang kokoh. Saya selalu
              antusias untuk belajar hal-hal baru dan berkolaborasi dalam tim untuk memecahkan masalah yang menantang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
