import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/navigation/footer";
import dynamic from 'next/dynamic'
import NaviBar from "./components/navigation/navbar/NaviBar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "El Cronopio",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NaviBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

// export default dynamic(() => Promise.resolve(RootLayout), { ssr: false })