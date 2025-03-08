import { MainPageBg, PageContainer, TitlePage } from "../ui/ComponentsStyled";
import { getLatexPosts, getPostsByType } from "../lib/api";
import { ButtonContainer, CopyButton, Layout } from "../ui/lugs";
import HomeBoxes from "../components/HomeBoxes";
import ResponsiveSidebar from "../components/SideBar";
import {
  MdHead,
  MdListItem,
  MdParagraph,
  MdSubHeadA,
  MdUnorderedList,
} from "../ui/MarkDownComponents";
import Link from "next/link";
import ShowPath from "../components/showPath";
import ScrollDiv from "../components/navigation/ScrollDiv";

const Latex = ({ params }) => {
  // const AllLatexPosts = getLatexPosts();
  const AllLatexPosts = getPostsByType(["latex"]);
  // Filtra solo los posts que tienen "curso"
  const coursePosts = AllLatexPosts.posts.filter((post) =>
    post.doctype.includes("curso")
  );
  // Filtra solo los posts que tienen "curso"
  const latexPosts = AllLatexPosts.posts.filter(
    (post) => post.doctype.includes("latex") && !post.doctype.includes("curso")
  );
  // Mapear los posts para devolver solo los datos necesarios
  // const sidebarItems = latexPosts
  //   .map((post) => ({
  //     slug: `/${post.doctype}/${post.slug}`, // Generar la ruta con el doctype
  //     shortTitle: post.shortTitle, // Título del post
  //     order: post.order,
  //   }))
  //   .sort((post1, post2) => (post1.order > post2.order ? 1 : -1));

  if (!latexPosts) {
    return notFound();
  }
  return (
    <Layout>
      {/* <PageContainer> */}
      {/* <ResponsiveSidebar sidebarItems={sidebarItems} /> */}
      <MainPageBg>
        <ScrollDiv />
        <ShowPath title={latexPosts.title} />
        {/* <Sidebar>
        <SidebarHeading>Contenido</SidebarHeading>
        <SidebarList>
          {sidebarItems.map((item) => (
            <li key={item.slug}>
            <Link href={`/latex/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </SidebarList>
      </Sidebar> */}
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
        <MdUnorderedList>
          <MdListItem>Instalación y configuración de LaTeX.</MdListItem>
          <MdListItem>
            Ejemplos prácticos para iniciarte en este mundo.
          </MdListItem>
          <MdListItem>
            Recursos para personalizar y optimizar tus documentos.
          </MdListItem>
        </MdUnorderedList>
        <MdParagraph>
          Si eres principiante o buscas mejorar tus habilidades, esta sección es
          para ti. ¡Vamos construyéndola juntos!
        </MdParagraph>
        <ButtonContainer>
          <Link href={"/latex/curso"}>
            <CopyButton>Ir al curso</CopyButton>
          </Link>
        </ButtonContainer>
        <HomeBoxes props={latexPosts} />
        <MdHead>Aprende LaTeX</MdHead>
        <HomeBoxes props={coursePosts} />
      </MainPageBg>
      {/* </PageContainer> */}
    </Layout>
  );
};

export default Latex;

export const metadata = {
  title: "Tutoriales LaTeX | Eric Lucero González",
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
