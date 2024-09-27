import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/navigation/footer";
import {
  MainBg,
  PageContainer,
  Section,
  TitlePage,
} from "./ComponentsStyled";
// import { getAllPosts } from "./lib/post-api";
import PostSection from "./components/navigation/PostSection";
import { getAllPosts } from "@/app/lib/api";

function Home() {
  const allPostsData = getAllPosts();
  return (
    <PageContainer>
      <MainBg>
        <TitlePage>Blog</TitlePage>
        {/* Add this <section> tag below the existing <section> tag */}
        {allPostsData.map(({ slug,id, date, title,author,excerpt,authorAvatar, doctype }) => (
          <PostSection
          key={id}
            title={title}
            slug={slug}
            date={date}
            excerpt={excerpt}
            author={author}
            authorAvatar={authorAvatar}
            doctype={doctype}
          />
        ))}
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
