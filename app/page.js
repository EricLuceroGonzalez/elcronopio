import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./navigation/footer";
import { Main, PageContainer } from "./ComponentsStyled";

export default function Home() {
  return (
    <PageContainer>
      <Main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

      </Main>
    </PageContainer>
  );
}
