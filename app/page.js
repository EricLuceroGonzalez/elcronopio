import Image from "next/image";
// import styles from "./page.module.css";
import Footer from "./components/navigation/footer";
import { MainBg, PageContainer, Section, TitlePage } from "./ComponentsStyled";
// import { getAllPosts } from "./lib/post-api";
import PostSection from "./components/navigation/PostSection";
import { getAllPosts } from "@/app/lib/api";
import HomeBoxes from "./components/HomeBoxes";
import { MdParagraph } from "./components/lugs";

function Home() {
  const allPostsData = getAllPosts();
  return (
    <PageContainer>
      <MainBg>
        <div style={{ width: "80%" }}>
          <TitlePage>¡Bienvenido a mi espacio personal! </TitlePage>

          <MdParagraph>
            Este sitio web está en construcción, pero pronto será un lugar donde
            compartiré mi trabajo y aprendizaje en áreas como inteligencia
            artificial, LaTeX, y algoritmos de optimización. Aquí encontrarás:
            <ul>
              <li>
                Un blog con reflexiones, tutoriales, y temas técnicos
                relacionados con la IA.
              </li>
              <li>
                Recursos sobre LaTeX para quienes deseen perfeccionar sus
                habilidades en la escritura científica.
              </li>
              <li>
                Un portafolio donde documentaré proyectos e ideas relacionadas
                con programación y matemáticas aplicadas.
              </li>
            </ul>
            Gracias por visitar. Te invito a explorar las secciones disponibles
            y volver pronto para más contenido. ¡Esto es solo el comienzo!
          </MdParagraph>
        </div>
        <HomeBoxes props={allPostsData} />
      </MainBg>
    </PageContainer>
  );
}
export default Home;

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
