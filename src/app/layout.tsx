import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "MIGNON 게임 전시회",
  description: "차세대 개발자들의 창의적인 게임을 만나보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gradient-to-b from-navy/80 via-black/20 to-navy/90 text-white min-h-screen">
        <Header/>
        <main className="bg-gradient-to-b from-navy/80 via-black/20 to-navy/90">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
