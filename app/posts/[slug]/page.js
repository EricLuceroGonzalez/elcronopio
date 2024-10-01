import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { getPostBySlug } from "@/app/lib/api";
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
} from "../../components/lugs.js";
import { MainBg } from "@/app/ComponentsStyled";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  // const content = await markdownToHtml(post.content || "");

  // Override react-markdown elements to add class names
  const P = ({ children }) => <MdParagraph>{children}</MdParagraph>;
  const Li = ({ children }) => <MdListItem>{children}</MdListItem>;
  const Bq = ({ children }) => <MdBlockQuote>{children}</MdBlockQuote>;
  const Head = ({ children }) => <MdHead>{children}</MdHead>;
  const HeadTwo = ({ children }) => <MdSubHeadA>{children}</MdSubHeadA>;
  const HeadThree = ({ children }) => <MdSubHeadB>{children}</MdSubHeadB>;
  const HeadFour = ({ children }) => <MdSubHeadC>{children}</MdSubHeadC>;
  // const MdLinks = ({ children }) => <MdLink>{children}</MdLink>;
  const Strong = ({ children }) => <MdStrong>{children}</MdStrong>;
  const Empha = ({ children }) => <MdEmph>{children}</MdEmph>;
  // const H4 = ({ children }) => <h4 className="md-post-h4">{children}</h4>
  // const Hr = () => <hr className="md-post-hr" />

  return (
    <MainBg>
      <Article>
        <Title>{post.title}</Title>
        <MetaInfo>
          <Date>{post.date}</Date>
          {/* <AuthorInfo>
              <Image
                src={post.authorAvatar} // Ruta de la imagen del autor
                alt={post.author} // Texto alternativo
                width={40} // Ancho de la imagen
                height={40} // Alto de la imagen
              />
              <AuthorName>{post.author}</AuthorName>
            </AuthorInfo> */}
          <SideInfo>
            {/* <div>{new Date(post.date).toLocaleDateString()}</div> */}
            <SectionType doctype={post.doctype}>{post.doctype}</SectionType>
          </SideInfo>
        </MetaInfo>
        <ReactMarkdown
          components={{
            p: P,
            li: Li,
            blockquote: Bq,
            h1:Head,
            h2: HeadTwo,
            h3: HeadThree,
            h4: HeadFour,
            strong: Strong,
            em: Empha,
            a: (props) => {
              return (
                <MdLink href={props.href}>{props.children}</MdLink> // All other links
              );
            },
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  // children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  wrapLines={true}
                  wrapLongLines={false}
                  showLineNumbers={true}
                  style={dracula}
                  customStyle={{ lineHeight: "0.75", fontSize: "small" }}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
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
  // fetch data
  const post = getPostBySlug(params.slug);
  console.log(`post.title: ${post.title}`);
  console.log(post.excerpt);

  return {
    title: post.title,
    description: post.excerpt,
  };
}
