import type { Metadata } from "next";
import { Inter,Radio_Canada,Roboto } from 'next/font/google'
import "./globals.css";

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// })

// const roboto = Roboto({
//   weight:'400',
//   subsets: ['latin'],
//   display: 'swap',
// })

const radio = Radio_Canada({
  weight:'300',
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={radio.className}>
      <body>
        <header>
          <div className="logo">
            <div className="title">
              <h1>Micaela Trombini</h1>
            </div>
            <div className="header-bio">
              <h2>
                Artista y docente Artista y docente Artista y docente Artista y docente
              </h2>
            </div>
          </div>
          <div className="instagram">
            <p>INSTAGRAM</p>
          </div>
        </header>
          {children}
        <footer>
          <p>micaelatrombini@gmail.com</p>
        </footer>
      </body>
    </html>
  );
}
