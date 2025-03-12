import {
  MdBlockQuote,
  MdCite,
  MdEmph,
  MdImage,
  MdImageCaption,
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
