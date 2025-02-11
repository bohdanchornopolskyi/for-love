import "~/styles/globals.css";

import { Playfair_Display_SC } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Valentine's Day",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" className={`${font.className}`}>
      <body className="bg-[#fdd2e8]">{children}</body>
    </html>
  );
}
