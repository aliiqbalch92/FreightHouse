import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreightOS | Modern Freight Infrastructure",
  description:
    "A cinematic logistics technology website built around scroll-controlled freight movement.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
