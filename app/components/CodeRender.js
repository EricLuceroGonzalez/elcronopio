"use client";
import ReactMarkdown from "react-markdown";
import { MathJaxContext, MathJax } from "better-react-mathjax";

import {
  MdParagraph,
  MdListItem,
  MdBlockQuote,
  MdSubHeadA,
  MdSubHeadB,
  MdSubHeadC,
  MdEmph,
  MdLink,
  MdStrong,
  MdHead,
  MdUnorderedList,
  MdImage,
  MdImageCaption,
} from "../ui/MarkDownComponents";

import CodeBlock from "./CodeWrapper";
import Image from "next/image";

const RenderCodeBlock = ({ props }) => {
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
  const UList = ({ children }) => <MdUnorderedList>{children}</MdUnorderedList>;
  return (
    <MathJaxContext>
      <MathJax dynamic hideUntilTypeset="every">
        <ReactMarkdown
          components={{
            // p: P,
            p: (paragraph) => {
              const { node } = paragraph;

              if (node.children[0].tagName === "img") {
                const image = node.children[0];
                console.log(image.properties.alt);
                const metastring = image.properties.alt || "";
                const alt = metastring.replace(/ *\{[^)]*\} */g, "");
                const match = metastring.match(/{(\d+)x(\d+)}/);
                const width = parseInt(match[1], 10);
                const height = parseInt(match[2], 10);
                const isPriority = metastring.toLowerCase().match("{priority}");
                const hasCaption = metastring
                  .toLowerCase()
                  .includes("{caption:");
                const caption = metastring.match(/{caption: (.*?)}/)?.pop();

                console.log(alt, width, height);
                console.log(isPriority);
                console.log(caption);

                return (
                  <MdImage>
                    <Image
                      src={image.properties.src}
                      width={width}
                      height={height}
                      alt={alt}
                      priority={isPriority}
                    />
                    {hasCaption ? (
                      <MdImageCaption>{caption}</MdImageCaption>
                    ) : null}
                  </MdImage>
                );
              }
              return <MdParagraph>{paragraph.children}</MdParagraph>;
            },
            li: Li,
            ul: UList,
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
                <CodeBlock
                  language={match[1]}
                  value={String(children).replace(/\n$/, "")}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {props}
        </ReactMarkdown>
      </MathJax>
    </MathJaxContext>
  );
};

export default RenderCodeBlock;
