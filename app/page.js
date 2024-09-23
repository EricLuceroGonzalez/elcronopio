import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/navigation/footer";
import { Main, MainBg, PageContainer, TitlePage } from "./ComponentsStyled";

export default function Home() {
  return (
    <PageContainer>
      <MainBg>
        <TitlePage>Home</TitlePage>
        <TitlePage>Home</TitlePage>
      </MainBg>
    </PageContainer>
  );
}
