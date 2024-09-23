import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./navigation/footer";
import { Main, PageContainer } from "./ComponentsStyled";

export default function Home() {
  return (
    <PageContainer>
      <Main>
        <h1>Home</h1>
      </Main>
    </PageContainer>
  );
}
