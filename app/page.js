import styles from "./page.module.css";
import RootLayout from "./layout";
import Footer from "./components/Footer";
import { MainBody } from "./components/MainBody";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <RootLayout>
      <NavBar/>
    <main className={styles.main}>
      <MainBody/>
    </main>
      <Footer/>
    </RootLayout>
  );
}
