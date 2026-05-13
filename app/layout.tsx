import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freight House | Carrier Dispatch Operations",
  description:
    "24/7 freight dispatch operations built to maximize carrier profitability and reduce downtime.",
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
