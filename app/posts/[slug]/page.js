import ReactMarkdown from "react-markdown";
import Image from 'next/image';
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
  Date,
  MdParagraph,
  MetaInfo,
  StyledMarkdown,
  Title,
  AuthorInfo,AuthorName,SideInfo, SectionType,
  MdListItem,
  MdBlockQuote
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
    const P = ({ children }) => <MdParagraph>{children}</MdParagraph>
    const Li = ({ children }) => <MdListItem>{children}</MdListItem>
    const Bq = ({children}) => <MdBlockQuote>{children}</MdBlockQuote>
    // const H4 = ({ children }) => <h4 className="md-post-h4">{children}</h4>
    // const Hr = () => <hr className="md-post-hr" />
  return (
    <MainBg>
      <Article>
        <Title>{post.title}</Title>
        <MetaInfo>
          <Date>{post.date}</Date>
          <AuthorInfo>
              {/* <Avatar src={authorAvatar} alt={author} /> */}
              <Image
                src={post.authorAvatar} // Ruta de la imagen del autor
                alt={post.author} // Texto alternativo
                width={40} // Ancho de la imagen
                height={40} // Alto de la imagen
                // objectFit="cover" // Asegura que la imagen se adapte bien al contenedor
              />
              <AuthorName>{post.author}</AuthorName>
            </AuthorInfo>
            <SideInfo>
              {/* <div>{new Date(post.date).toLocaleDateString()}</div> */}
              <SectionType doctype={post.doctype}>{post.doctype}</SectionType>
            </SideInfo>
        </MetaInfo>
        <ReactMarkdown
          components={{
            p:P,
            li: Li,
            blockquote:Bq,
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
