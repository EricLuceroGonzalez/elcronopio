import {
  MdBlockQuote,
  MdCite,
  MdEmph,
  MdHead,
  MdImage,
  MdImageCaption,
  MdLink,
  MdListItem,
  MdOrderedList,
  MdParagraph,
  MdStrong,
  MdSubHeadA,
  MdSubHeadB,
  MdSubHeadC,
  MdUnorderedList,
} from "@/app/ui/MarkDownComponents";
import CodeBlock from "@/app/components/CodeWrapper";
import Image from "next/image";
import { MathJax } from "better-react-mathjax";
const MdxComponents = {
  h1: (props) => <MdSubHeadA {...props}>{props.children}</MdSubHeadA>,
  h2: (props) => <MdSubHeadB {...props}> {props.children}</MdSubHeadB>,
  h3: (props) => <MdSubHeadC {...props}>{props.children}</MdSubHeadC>,
  h4: (props) => <MdSubHeadC {...props}>{props.children}</MdSubHeadC>,
  ul: (props) => <MdUnorderedList {...props}>{props.children}</MdUnorderedList>,
  ol: (props) => <MdOrderedList {...props}>{props.children}</MdOrderedList>,
  li: (props) => <MdListItem {...props}>{props.children}</MdListItem>,
  strong: (props) => <MdStrong {...props}>{props.children}</MdStrong>,
  em: (props) => <MdEmph {...props}>{props.children}</MdEmph>,
  super: (props) => <MdCite {...props}>{props.children}</MdCite>,
  blockquote: (props) => (
    <MdBlockQuote {...props}>{props.children}</MdBlockQuote>
  ),
  p: (props) => <MdParagraph {...props}>{props.children}</MdParagraph>,
  code: ({ node, inline, className, children, ...props }) => {
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
  img: ({ src, alt }) => {
    const metastring = alt || "";
    const captionSeparation = metastring.match(/caption=(.*)/);
    const caption = captionSeparation ? captionSeparation[1].trim() : null;
    const hasCaption = metastring.toLowerCase().includes("caption=");

    return (
      <MdImage>
        <Image
          src={src}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt={alt.replace(/ *\{[^)]*\} */g, "")}
          // objectFit="cover"
        />
        {hasCaption && <MdImageCaption>{caption}</MdImageCaption>}
      </MdImage>
    );
  },
};
export default MdxComponents;
