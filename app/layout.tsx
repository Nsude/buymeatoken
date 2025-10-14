import type { Metadata } from "next";
import "./globals.css";
import "../components/buttons/buttons.css";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "Buy Me a Token",
  description: "Appreciate your favourite creators.",
};

const OldSchoolGrotesk = localFont({
  src: [
    {
      path: "../public/font/osg-regular.otf",
      style: "normal",
      weight: "400"
    },
    {
      path: "../public/font/osg-medium.otf",
      style: "normal",
      weight: "500"
    }
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={OldSchoolGrotesk.className}
      >
        {children}
      </body>
    </html>
  );
}
