import { getAllPosts } from "@/app/lib/api";
import { MainBg, PageContainer, TitlePage } from "./ui/ComponentsStyled";
import HomeBoxes from "./components/HomeBoxes";
import { MdListItem, MdParagraph, MdUnorderedList } from "./components/lugs";

// const NaviBar = dynamic(() => import("./components/navigation/navbar/NaviBar"));

function Home() {
  const allPostsData = getAllPosts();
  return (
    <>
      <PageContainer>
        <MainBg>
          <TitlePage>Hola! </TitlePage>
          <MdParagraph>
            Este sitio web está en construcción, pero pronto será un lugar donde
            compartiré mi trabajo y aprendizaje en áreas como inteligencia
            artificial, LaTeX, y algoritmos de optimización. Aquí encontrarás:
          </MdParagraph>
          <MdUnorderedList>
            <MdListItem>
              Un blog con reflexiones, tutoriales, y temas técnicos relacionados
              con la IA.
            </MdListItem>
            <MdListItem>
              Recursos sobre LaTeX para quienes deseen perfeccionar sus
              habilidades en la escritura científica.
            </MdListItem>
            <MdListItem>
              Un portafolio donde documentaré proyectos e ideas relacionadas con
              programación y matemáticas aplicadas.
            </MdListItem>
          </MdUnorderedList>
          <MdParagraph>
            Gracias por visitar. Te invito a explorar las secciones disponibles
            y volver pronto para más contenido. ¡Esto es solo el comienzo!
          </MdParagraph>
          <HomeBoxes props={allPostsData} />
        </MainBg>
      </PageContainer>
    </>
  );
}
export default Home;

// export const metadata = {
//   title: "Inicio | Eric Lucero González",
//   description:
//     "Explora el espacio personal de Eric, donde combina su experiencia en Inteligencia Artificial, LaTeX y programación. Descubre su trayectoria, tutoriales y blog.",
//   openGraph: {
//     title: "Bienvenido a mi página personal",
//     description:
//       "Una mezcla de blog, tutoriales y un vistazo a mi trayectoria en Inteligencia Artificial, LaTeX y programación. Construyendo y compartiendo conocimientos.",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1732970163/elCronopio/elcronopio_eewxj0.png", // Ruta de la imagen para el home
//         width: 1200,
//         height: 630,
//         alt: "Vista previa del sitio web de Eric",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Bienvenido a mi página personal",
//     description:
//       "Una mezcla de blog, tutoriales y un vistazo a mi trayectoria en Inteligencia Artificial, LaTeX y programación.",
//     image:
//       "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1732970163/elCronopio/elcronopio_eewxj0.png",
//   },
// };

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
