"use client";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
  CodeBlockWrapper,
  Toolbar,
  LanguageBadge,
  CopyButton,
} from "./lugs";
import { useState } from "react";

const RenderCodeBlock = ({ props }) => {
  console.log("propssss");
  console.log(props);

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
  return (
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
          const [copied, setCopied] = useState(false);

          const handleCopy = () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Mostrar el mensaje "Copiado" durante 2 segundos
          };
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <CodeBlockWrapper>
              <Toolbar>
                <LanguageBadge>{match[1]}</LanguageBadge>
                <CopyToClipboard
                  text={String(children).replace(/\n$/, "")}
                  onCopy={handleCopy}
                >
                  <CopyButton>{copied ? "¡Copiado!" : "Copiar"}</CopyButton>
                </CopyToClipboard>
              </Toolbar>
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
            </CodeBlockWrapper>
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
  );
};

export default RenderCodeBlock;
