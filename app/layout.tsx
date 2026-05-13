import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreightHouse Logistics | Dispatching Beyond Expectations",
  description:
    "Freight Dispatch Built for Maximum Carrier Profitability",
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
