// "use client"; // Agrega esta línea para convertir el componente en un componente de cliente
import markdownToHtml from "@/app/lib/markdownToHtml";
import { getPostBySlug } from "@/app/lib/api";
import { Article, Author, Content, Date, Title } from "../lugs";
import { MainBg } from "@/app/ComponentsStyled";
// import { useEffect, useState } from "react"; // Importa hooks si es necesario
// import { getPostBySlug, getAllPosts } from "@/lib/api";


export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <MainBg>
    <Article>
      <Title>{post.title}</Title>
      <Date>{post.date}</Date>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <Author>{post.author}</Author>
    </Article>
    </MainBg>
  );
}