import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bagas Ramadhan Rusnadi - Portfolio",
  description: "Portfolio website of Bagas Ramadhan Rusnadi, a web developer specializing in modern web technologies and responsive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./images/logokecil-bulet.png" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>{children}</body>
    </html>
  );
}
