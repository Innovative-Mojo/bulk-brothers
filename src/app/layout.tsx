import type { Metadata } from "next";
import {
  Inter,

  Plus_Jakarta_Sans,
  Montserrat,
  Rajdhani,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monts = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-rajdhani",
});

const jakrata = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakrata",
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body
        className={` ${inter.variable}    ${monts.variable} ${rajdhani.variable} `}
      >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
