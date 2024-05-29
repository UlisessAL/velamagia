import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col items-center  bg-[#FCD9DB]  min-h-screen">
        <Navbar />
        <main className="h-full w-full bg-[#FCD9DB] flex flex-col justify-center items-center gap-3">
          {children}
        </main>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2024 - Todos los derechos reservados a Velamagia</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
