import "./globals.css";


import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat, Cormorant_Garamond } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  
    
  return (
    <html lang="ru" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body>
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  );
}
