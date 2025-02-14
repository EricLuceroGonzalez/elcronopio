import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { getLatexPosts, getPostBySlug } from "@/app/lib/api";
import {
  Article,
  Author,
  CodeBlock,
  Content,
  StyledMarkdown,
  AuthorInfo,
  AuthorName,
  Date,
  MdParagraph,
  MetaInfo,
  Title,
  SideInfo,
  SectionType,
  MdListItem,
  MdBlockQuote,
  MdSubHeadA,
  MdSubHeadB,
  MdSubHeadC,
  MdEmph,
  MdLink,
  MdStrong,
  SocialLink,
  MdHead,
  Layout,
} from "../../components/lugs.js";
import { MainBg } from "@/app/ComponentsStyled";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link.js";
import ResponsiveSidebar from "@/app/components/SideBar.js";
import RenderCodeBlock from "@/app/components/CodeRender.js";

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);
  const latexPosts = getLatexPosts();
  // const readTime = readTime(post.content);
  // console.log(readTime);
  const sidebarItems = latexPosts.map((post) => ({
    slug: `/${post.doctype}/${post.slug}`, // Generar la ruta con el doctype
    shortTitle: post.shortTitle, // Título del post
  }));
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
  // Override react-markdown elements to add class names
  return (
    <Layout>
      <ResponsiveSidebar sidebarItems={sidebarItems} />
      <MainBg>
        <Article>
          <MdHead>{post.title}</MdHead>
          <MetaInfo>
            <Date>{post.date}</Date>
            <SideInfo>
              {/* <div>{new Date(post.date).toLocaleDateString()}</div> */}
              <Link href={`/${post.doctype}`}>
                <SectionType
                // doctype={post.doctype}
                >
                  {post.doctype}
                </SectionType>
              </Link>
            </SideInfo>
            <Date style={{ marginLeft: "10px" }}>
              Tiempo de lectura:{" "}
              {readT.readingTime < 2
                ? `${readT.readingTime} minuto`
                : `${readT.readingTime} minutos`}{" "}
            </Date>
          </MetaInfo>
          <RenderCodeBlock props={post.content} />
        </Article>
      </MainBg>
    </Layout>
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
  // fetch data
  const post = getPostBySlug(params.slug);

  return {
    title: `${post.title} | LaTeX`,
    description: post.excerpt,
    slug: post.slug,
    shortTitle: post.shortTitle,
  };
}
