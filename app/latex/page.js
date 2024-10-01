import React from "react";
import { MainBg, TitlePage } from "../ComponentsStyled";
import { headers } from "next/headers";
import { getSomePosts } from "../lib/api";
import PostSection from "../components/navigation/PostSection";

  const Latex = ({params}) => {
    
  const latexPosts = getSomePosts(); 

  if (!latexPosts) {
    return notFound();
  }
  console.log('All latex:');
  console.log(latexPosts.length);
  

    return <MainBg>
        <TitlePage>LaTeX</TitlePage>
        {/* TODO: Create the feeling here...(and in suscribe, but later) */}
        {latexPosts.map(({ slug,id, date, title,author,excerpt,authorAvatar, doctype }) => (
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
};

export default Latex;

export const metadata = {
    title: 'LaTeX',
    openGraph: {
      title: 'LaTeX',
      description: 'Acme is a...',
    },
  }
