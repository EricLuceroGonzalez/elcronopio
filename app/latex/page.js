import React from "react";
import { MainBg, TitlePage } from "../ComponentsStyled";
import { headers } from "next/headers";
import { getLatexPosts } from "../lib/api";
import PostSection from "../components/navigation/PostSection";
import { BoxGrid, MdListItem, MdParagraph } from "../components/lugs";
import HomeBoxes from "../components/HomeBoxes";
import Image from "next/image";

const Latex = ({ params }) => {
  const latexPosts = getLatexPosts();

  if (!latexPosts) {
    return notFound();
  }
  console.log("All latex:");
  console.log(latexPosts.length);

  return (
    <MainBg>
      <TitlePage>Todo sobre LaTeX</TitlePage>
      {/* <Image
        src={
          "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1732908752/elCronopio/LaTeX_logo_ou5hme.svg"
        } // Ruta de la imagen del autor
        alt={"aksdjhaksjdh"} // Texto alternativo
        width={90} // Ancho de la imagen
        height={37.5} // Alto de la imagen
      /> */}
      {/* TODO: Create the feeling here...(and in suscribe, but later) */}

      <MdParagraph>
        Aquí comparto tutoriales, ejemplos y consejos para trabajar con LaTeX,
        la herramienta indispensable para crear documentos científicos y
        técnicos de alta calidad. Algunos temas que encontrarás:
      </MdParagraph>
      <ul>
        <MdListItem>Instalación y configuración de LaTeX.</MdListItem>
        <MdListItem>
          Ejemplos prácticos para iniciarte en este mundo.
        </MdListItem>
        <MdListItem>
          Recursos para personalizar y optimizar tus documentos.
        </MdListItem>
      </ul>
      <MdParagraph>
        Si eres principiante o buscas mejorar tus habilidades, esta sección es
        para ti. ¡Vamos construyéndola juntos!
      </MdParagraph>
      <HomeBoxes props={latexPosts} />
    </MainBg>
  );
};

export default Latex;

export const metadata = {
  title: "Tutoriales LaTeX | ElCronopio",
  description:
    "Descubre guías y tutoriales detallados sobre LaTeX, desde lo básico hasta técnicas avanzadas para crear documentos impecables.",
  openGraph: {
    title: "Tutoriales de LaTeX",
    description:
      "Guías prácticas para dominar LaTeX, incluyendo tips avanzados y ejemplos paso a paso para documentos académicos y más.",
    images: [
      {
        url: "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1732970163/elCronopio/elcronopio_eewxj0.png", // Imagen temática de LaTeX
        width: 1200,
        height: 630,
        alt: "Tutoriales y tips de LaTeX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutoriales de LaTeX",
    description:
      "Aprende LaTeX desde lo básico hasta lo avanzado con tutoriales claros y ejemplos prácticos.",
    image:
      "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1732970163/elCronopio/elcronopio_eewxj0.png",
  },
};
