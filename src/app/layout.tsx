import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "E Learning Platform",
  description: "E Learning Platform for Digital Courses"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
      <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] min-h-screen">
        <aside className="sidebar bg-gray-800 text-white p-4">
          <Sidebar />
        </aside>
        <main className="p-4">
          {children}
        </main>
      </div>
      </body>
    </html>
  );
}
