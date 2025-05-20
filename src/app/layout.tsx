'use client'

import type { Metadata } from "next";
import { Roboto_Flex } from 'next/font/google'
import "./globals.css";
import Link from "next/link";
import { use, useEffect, useState } from 'react';

// const inter = Inter({x
//   subsets: ['latin'],
//   display: 'swap',
// })

const roboto = Roboto_Flex({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  // design space
  axes: ['opsz','wdth','slnt','GRAD','XOPQ','YOPQ','XTRA','YTAS','YTDE','YTLC','YTUC','YTFI'],
})

const metadata: Metadata = {
  title: "Micaela Trombini",
  description: "Personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth <= 768);
    
    // Optional: Update on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en" className={roboto.className}>
      <body>
        <header>
          <div className="logo">
            <div className="title">
              <h1>
                <Link href={isMobile ? '/bio' : '/'}>Micaela Trombini</Link>
              </h1>
            </div>
            <div className="header-bio">
              <h2>
                <Link href={"bio"}> Micaela Trombini is a biosound artist and educator who explores the intersection between science, art, technology and biology through experimental practices in botany, programming and bioinformatics.</Link>
              </h2>
            </div>
          </div>
          <div className="instagram">
                <Link href="https://www.instagram.com/mica_trombini?igsh=ZXVhZ3poanRwZm1x" target="_blank"><p>INSTAGRAM</p></Link>
          </div>
        </header>
          {children}
        <footer>
          <a href="mailto:micaelatrombini555@gmail.com">Get in touch</a>
        </footer>
      </body>
    </html>
  );
}
