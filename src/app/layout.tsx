import type { Metadata } from "next";
import { Roboto_Flex } from 'next/font/google'
import "./globals.css";

// const inter = Inter({
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
    <html lang="en" className={roboto.className}>
      <body>
        <header>
          <div className="logo">
            <div className="title">
              <h1>Micaela Trombini</h1>
            </div>
            <div className="header-bio">
              <h2>
              Micaela Trombini is a biosound artist and educator who explores the intersection between science, art, technology and biology through experimental practices in botany, programming and bioinformatics.
              </h2>
            </div>
          </div>
          <div className="instagram">
            <p>INSTAGRAM</p>
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
