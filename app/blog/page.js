import React from "react";
import { MainBg, TitlePage } from "../ComponentsStyled";
import { getBlogPosts } from "../lib/api";
import { notFound } from "next/navigation";
import PostSection from "../components/navigation/PostSection";
import HomeBoxes from "../components/HomeBoxes";
import { MdListItem, MdParagraph } from "../components/lugs";

const BlogPage = () => {
  const blogPosts = getBlogPosts();
  if (!blogPosts) {
    return notFound();
  }
  return (
    <MainBg>
      <TitlePage>¡Bienvenido al Blog!</TitlePage>
      {/* TODO: Create the contact functionality (Mail, Form, database, chat gpt) */}
      <MdParagraph>
        En esta sección encontrarás artículos y reflexiones sobre temas que me
        apasionan:
        <ul>
          <MdListItem>
            Inteligencia Artificial: avances, algoritmos y mi experiencia en el
            doctorado.
          </MdListItem>
          <MdListItem>
            Matemáticas aplicadas: soluciones a problemas reales y enfoques
            innovadores.
          </MdListItem>
          <MdListItem>
            Programación: guías, proyectos y recursos para aprender y mejorar.
          </MdListItem>
        </ul>
        Estoy construyendo este blog poco a poco, así que vuelve pronto para
        explorar nuevas publicaciones.
      </MdParagraph>
      <MdParagraph>
        ¡Espero que encuentres algo útil e interesante aquí!
      </MdParagraph>
      <HomeBoxes props={blogPosts} />
    </MainBg>
  );
};

export default BlogPage;
export const metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog",
    description: "Contact is a...",
  },
};
