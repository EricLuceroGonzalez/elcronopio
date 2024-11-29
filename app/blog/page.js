import React from "react";
import { MainBg, TitlePage } from "../ComponentsStyled";
import { getBlogPosts } from "../lib/api";
import { notFound } from "next/navigation";
import PostSection from "../components/navigation/PostSection";
import HomeBoxes from "../components/HomeBoxes";

const BlogPage = () => {
  const blogPosts = getBlogPosts();
  if (!blogPosts) {
    return notFound();
  }
  return (
    <MainBg>
      <TitlePage>Blog</TitlePage>
      {/* TODO: Create the contact functionality (Mail, Form, database, chat gpt) */}
      <HomeBoxes props={blogPosts} />
      {/* {blogPosts.map(
          ({
            slug,
            id,
            date,
            title,
            author,
            excerpt,
            authorAvatar,
            doctype,
          }) => (
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
          )
        )} */}
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
