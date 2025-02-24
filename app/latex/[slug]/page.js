import { FaClock, FaPencilAlt } from "react-icons/fa";
import { getLatexPosts, getPostByOrder, getPostBySlug } from "@/app/lib/api";
import {
  Article,
  Date,
  MetaInfo,
  SideInfo,
  SectionType,
  Layout,
} from "../../ui/lugs.js";
import { MainBg } from "@/app/ui/ComponentsStyled.js";
import Link from "next/link.js";
import ResponsiveSidebar from "@/app/components/SideBar.js";
import RenderCodeBlock from "@/app/components/CodeRender.js";
import { MdHead } from "@/app/ui/MarkDownComponents.js";
import PostNavigationCard from "@/app/components/PostNavigation.js";
import ShowPath from "@/app/components/showPath.js";

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug);
  const latexPosts = getLatexPosts(post.order);
  const nextPost = latexPosts.nextPost[0];
  const prevPost = latexPosts.previousPost[0];
  // const readTime = readTime(post.content);
  const sidebarItems = latexPosts.posts.map((post) => ({
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
          <ShowPath title={post.title} />
          <MdHead>{post.title}</MdHead>
          <MetaInfo>
            <Date>
              <FaPencilAlt style={{ marginRight: "5px" }} />
              {post.date}
            </Date>
            <Date style={{ marginLeft: "10px" }}>
              <FaClock style={{ marginRight: "5px" }} />
              {readT.readingTime < 2
                ? `${readT.readingTime} minuto`
                : `${readT.readingTime} minutos`}{" "}
            </Date>
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
export async function generateMetadata({ params }, parent) {
  // fetch data
  const post = getPostBySlug(await params.slug);

  return {
    title: `${post.title} | LaTeX`,
    description: post.excerpt,
    slug: post.slug,
    shortTitle: post.shortTitle,
    openGraph: {
      title: `${post.title} | LaTeX`,
      description: post.excerpt,
      url: `https://elcronopio.com/latex/${post.slug}`,
      images: [
        {
          url: post.postImage, // Ruta de la imagen para el home
          width: 1200,
          height: 630,
          alt: "Vista previa del sitio web de Eric",
        },
      ],
    },
  };
}
