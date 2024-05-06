import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanban | Brandon Nielsen",
  description: "Kanban, a task manager",
  authors: [{ name: "Brandon Nielsen" }],
  creator: "Brandon Nielsen",
  publisher: "Brandon Nielsen",
  keywords: [
    "web developer",
    "code",
    "web development",
    "next.js",
    "nextjs",
    "react",
    "javascript",
    "oregon",
    "small businesses",
    "frontend",
    "front-end",
    "software engineer",
    "programmer",
  ],
};

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className={plus_jakarta_sans.className}>{children}</body>
    </html>
  );
}
