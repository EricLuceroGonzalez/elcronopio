// "use client";
// import { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import Image from "next/image";
import { FaClock, FaPencilAlt } from "react-icons/fa";

import { getBlogPosts, getPostBySlug } from "@/app/lib/api";
import {
  Article,
  Date,
  MetaInfo,
  SideInfo,
  SectionType,
} from "../../ui/lugs.js";
import { MainBg } from "@/app/ui/ComponentsStyled.js";
import Link from "next/link.js";
import RenderCodeBlock from "@/app/components/CodeRender.js";
import { MdHead } from "@/app/ui/MarkDownComponents.js";
import PostNavigationCard from "@/app/components/PostNavigation.js";
import ShowPath from "@/app/components/showPath.js";
import ScrollDiv from "@/app/components/navigation/ScrollDiv.js";
import DateDisplay from "@/app/components/DateDisplay.js";

export default function Post({ params }) {
  const post = getPostBySlug(params.slug);
  const latexPosts = getBlogPosts(post.order);
  // const latexPosts = getPostsByType(["blog"]);
  const nextPost = latexPosts.nextPost[0];
  const prevPost = latexPosts.previousPost[0];

  if (!post) {
    return notFound();
  }
  const readingTime = (post) => {
    const WORDS_PER_MINUTE = 200;
    let result = {};
    //Matches words
    //See
    //https://regex101.com/r/q2Kqjg/6
    const regex = /\w+/g;
    result.wordCount = (post || "").match(regex).length;

    result.readingTime = Math.ceil(result.wordCount / WORDS_PER_MINUTE);

    return result;
  };
  const readT = readingTime(post.content);

  return (
    <MainBg>
      <ScrollDiv />
      <Article>
        <ShowPath title={post.title} />
        <MdHead>{post.title}</MdHead>
        <MetaInfo>
          <Date>
            <FaPencilAlt style={{ marginRight: "5px" }} />
            <DateDisplay
              isoDate={post.date.iso}
              defaultFormatted={post.date.formatted}
            />
          </Date>
          <Date style={{ marginLeft: "10px" }}>
            <FaClock style={{ marginRight: "5px" }} />
            {readT.readingTime < 2
              ? `${readT.readingTime} minuto`
              : `${readT.readingTime} minutos`}{" "}
          </Date>
          <SideInfo>
            {/* TODO: Renderizar post del mismo tag al hacer click */}
            {/* El enlace usa el primer elemento del array */}
            <Link href={`/${post.doctype[0]}`}>
              {/* Renderiza todos los elementos del array como categorías */}
              {post.doctype.map((type, index) => (
                <SectionType key={index} tag={type}>
                  {type}
                  {/* Agrega una coma si no es el último elemento */}
                  {index < post.doctype.length - 1}
                </SectionType>
              ))}
            </Link>
          </SideInfo>
        </MetaInfo>
        <RenderCodeBlock props={post.content} />
        <div
          style={{
            marginTop: "10rem",
          }}
        >
          <h1>Otros posts:</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {prevPost === 0 ? (
              ""
            ) : (
              <PostNavigationCard type={"prev"} post={prevPost} />
            )}
            {nextPost === 0 ? (
              ""
            ) : (
              <PostNavigationCard type={"next"} post={nextPost} />
            )}
          </div>
        </div>
      </Article>
    </MainBg>
  );
}

// //! Form Markdown render override HTML elements
// const customRenderers = {
//   //! Check for paragraphs with images as children
//   p(paragraph) {
//     const { node } = paragraph;
//     if (node.children[0].tagName === "img") {
//       const image = node.children[0];
//       return (
//         <div className={classes.image}>
//           <Image
//             src={`/images/posts/${post.slug}/${image.properties.src}`}
//             alt={image.alt}
//             width={600}
//             height={300}
//           />
//         </div>
//       );
//     }
//     return <p>{paragraph.children}</p>;
//   },
//   code({node, inline, className, children, ...props}) {
//     console.log(node);
//     const match = /language-(\w+)/.exec(className || '')
//     return !inline && match ? (
//       <SyntaxHighlighter
//       style={atomDark}
//       language={match[1]}
//       PreTag="div"
//       {...props}
//       />
//     ): (
//       <code className={className} {...props}>
//         {children}
//       </code>
//     )
//   },
// };
// return ()....

export async function generateMetadata({ params, searchParams }, parent) {
  const post = getPostBySlug(await params.slug);

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    slug: post.slug,
    shortTitle: post.shortTitle,
    openGraph: {
      title: `${post.title} | Blog`,
      description: post.excerpt,
      url: `https://elcronopio.com/blog/${post.slug}`,
      images: [
        {
          url: post.postImage,
          width: 1200,
          height: 630,
          alt: "Vista previa del sitio web de Eric",
        },
      ],
    },
  };
}
