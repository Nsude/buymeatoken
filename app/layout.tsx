import type { Metadata } from "next";
import "./globals.css";
import "../components/buttons/buttons.css";
import localFont from 'next/font/local'
import WalletContextProvider from "../components/contexts/WalletContext";

export const metadata: Metadata = {
  title: "BuyMeAToken",
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
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
