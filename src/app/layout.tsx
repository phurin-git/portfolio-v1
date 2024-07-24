import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phurin Nararat",
  description: "Enthusiastic Automation Engineer who passionate for coding and programing transitioning to Full Stack Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background text-highlight"}>{children}</body>
    </html>
  );
}
