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
import Link from "next/link.js";

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);
  // const readTime = readTime(post.content);
  // console.log(readTime);
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
  const P = ({ children }) => <MdParagraph>{children}</MdParagraph>;
  const Li = ({ children }) => <MdListItem>{children}</MdListItem>;
  const Bq = ({ children }) => <MdBlockQuote>{children}</MdBlockQuote>;
  const Head = ({ children }) => <MdHead>{children}</MdHead>;
  const HeadTwo = ({ children }) => <MdSubHeadA>{children}</MdSubHeadA>;
  const HeadThree = ({ children }) => <MdSubHeadB>{children}</MdSubHeadB>;
  const HeadFour = ({ children }) => <MdSubHeadC>{children}</MdSubHeadC>;
  // const TheCode = ({ children }) => <MdCode>{children}</MdCode>;
  const Strong = ({ children }) => <MdStrong>{children}</MdStrong>;
  const Empha = ({ children }) => <MdEmph>{children}</MdEmph>;
  // const Hr = () => <hr className="md-post-hr" />

  return (
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
            Tiempo de lectura: {readT.readingTime} minutos
          </Date>
        </MetaInfo>
        <ReactMarkdown
          components={{
            p: P,
            li: Li,
            blockquote: Bq,
            h1: Head,
            h2: HeadTwo,
            h3: HeadThree,
            h4: HeadFour,
            strong: Strong,
            em: Empha,
            a: (props) => {
              return (
                <MdLink target="_blank" href={props.href}>
                  {props.children}{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    {...props}
                  >
                    <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
                    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
                  </svg>
                </MdLink> // All other links
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

  return {
    title: post.title,
    description: post.excerpt,
  };
}
