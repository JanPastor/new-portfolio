import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jan Pastor - Portfolio",
  description: "Personal portfolio website showcasing my work and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.className} bg-gradient-to-br from-[#1E3A5F] to-[#2778a3] min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
