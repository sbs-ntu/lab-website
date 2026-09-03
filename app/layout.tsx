import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speech Behavior and Science Lab | NTU",
  description:
    "Speech production, perception, motor control, and computational research at National Taiwan University.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
