import type { Metadata } from "next";
import { Roboto_Flex } from 'next/font/google'
import "../../../src/app/globals.css";
import style from "./layout.module.css";
import Link from "next/link";

const roboto = Roboto_Flex({
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap',
  // design space
  axes: ['opsz','wdth','slnt','GRAD','XOPQ','YOPQ','XTRA','YTAS','YTDE','YTLC','YTUC','YTFI'],
})

export const metadata: Metadata = {
  title: "Micaela Trombini",
  description: "Personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className= {`${roboto.className} ${style.layout}`}>
        <header>
          <div className="logo">
            <div className={style.headerTitle}>
              <h3>projects</h3>
            </div>
          </div>
        </header>
          {children}
        <footer>
          <a href="mailto:micaelatrombini555@gmail.com">Get in touch</a>
        </footer>
      </div>
  );
}
