import React, { Suspense } from "react";

import Footer from "./components/navigation/footer";
import Providers from "./Providers.js";
// import { Alexandria, Parkinsans } from "next/font/google";
import dynamic from "next/dynamic";
import { alexandria, lora, parkisans } from "./ui/fonts.js";
// import NaviBar from "./components/navigation/navbar/NaviBar";

export const metadata = {
  title: "Inicio | Eric Lucero González",
  description:
    "Explora el espacio personal de Eric, donde combina su experiencia en Inteligencia Artificial, LaTeX y programación. Descubre su trayectoria, tutoriales y blog.",
  openGraph: {
    title: "Bienvenido a mi página personal",
    description:
      "Una mezcla de blog, tutoriales y un vistazo a mi trayectoria en Inteligencia Artificial, LaTeX y programación. Construyendo y compartiendo conocimientos.",
    images: [
      {
        url: "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1732970163/elCronopio/elcronopio_eewxj0.png", // Ruta de la imagen para el home
        width: 1200,
        height: 630,
        alt: "Vista previa del sitio web de Eric",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bienvenido a mi página personal",
    description:
      "Una mezcla de blog, tutoriales y un vistazo a mi trayectoria en Inteligencia Artificial, LaTeX y programación.",
    image:
      "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1732970163/elCronopio/elcronopio_eewxj0.png",
  },
};

const NaviBar = dynamic(() => import("./components/navigation/navbar/NaviBar"));

// export default function RootLayout({ children }) {
export default async function RootLayout({ children }) {
  return (
    // <html lang="es" suppressHydrationWarning className={`${inter.className}`}>
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      // className={`${alexandria.className}`}
      className={`${parkisans.className}`}
      // className={`${lora.className}`}
      // className={`${parkisans.className}``${alexandria.className}`}
    >
      <head />
      <body
        style={{ width: "100%" }}
        antialiased="true"
        // className={(parkisans.className, alexandria.className)}
      >
        <Providers>
          <NaviBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

// export default dynamic(() => Promise.resolve(RootLayout), { ssr: false })
