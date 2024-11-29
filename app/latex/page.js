import React from "react";
import { MainBg, TitlePage } from "../ComponentsStyled";
import { headers } from "next/headers";
import { getLatexPosts } from "../lib/api";
import PostSection from "../components/navigation/PostSection";
import { BoxGrid } from "../components/lugs";
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
      <TitlePage>LaTeX</TitlePage>
      {/* TODO: Create the feeling here...(and in suscribe, but later) */}
      <Image
        src={
          "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1732908752/elCronopio/LaTeX_logo_ou5hme.svg"
        } // Ruta de la imagen del autor
        alt={"aksdjhaksjdh"} // Texto alternativo
        width={90} // Ancho de la imagen
        height={37.5} // Alto de la imagen
      />
      <HomeBoxes props={latexPosts} />
    </MainBg>
  );
};

export default Latex;

export const metadata = {
  title: "LaTeX",
  openGraph: {
    title: "LaTeX",
    description: "Acme is a...",
  },
};
