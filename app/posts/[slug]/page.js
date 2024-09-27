// "use client"; // Agrega esta línea para convertir el componente en un componente de cliente
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  materialDark,
  materialLight,
  oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'


import markdownToHtml from "@/app/lib/markdownToHtml";
import { getPostBySlug } from "@/app/lib/api";
import {
  Article,
  Author,
  CodeBlock,
  Content,
  Date,
  MetaInfo,
  Title,
} from "../lugs";
import { MainBg } from "@/app/ComponentsStyled";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  // const content = await markdownToHtml(post.content || "");

  return (
    <MainBg>
      <Article>
        <Title>{post.title}</Title>
        <MetaInfo>
          <Date>{post.date}</Date>
          <Author>{post.author}</Author>
        </MetaInfo>
        {/* <Content dangerouslySetInnerHTML={{ __html: post.scontent }} /> */}
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  // children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  wrapLines={true}
                  wrapLongLines={false}
                  showLineNumbers={true}
                  style={dracula}
                  {...props}
                >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >{post.content}</ReactMarkdown>
        {/* // TODO Check the paragraph separation in content from .md */}
        {/* Ejemplo de cómo incluir un bloque de código con SyntaxHighlighter */}
        {/* <CodeBlock language="javascript" showLineNumbers style={dracula}>
          {`console.log("Hello, world!");`}
        </CodeBlock>

        <CodeBlock language="python" showLineNumbers style={dracula}>
          {`# some code in python`}
        </CodeBlock> */}
      </Article>
    </MainBg>
  );
}
