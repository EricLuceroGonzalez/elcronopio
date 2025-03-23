import { FaClock, FaPencilAlt } from "react-icons/fa";
import { getPostBySlug, getPostsByType } from "@/app/lib/api";
// MDX
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import MdxComponents from "@/app/components/MdCompos/MDXComponents";
import { dynamicMdxComponents } from "@/app/components/MdCompos/dynamicMdxComponents";

import { HeroImage, MdHead } from "@/app/ui/MarkDownComponents";
import { MainBg } from "@/app/ui/ComponentsStyled";
import {
  Article,
  Date,
  Layout,
  MetaInfo,
  SectionType,
  SideInfo,
} from "@/app/ui/lugs";
import Image from "next/image";
import ScrollDiv from "@/app/components/navigation/ScrollDiv";
import ShowPath from "@/app/components/showPath";
import DateDisplay from "@/app/components/DateDisplay";
import Link from "next/link";
import PostNavigationCard from "@/app/components/PostNavigation";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import rehypeHighlight from "rehype-highlight";
import supersub from "remark-supersub";
import remarkGfm from "remark-gfm";
// import ShowPath from "@/app/components/showPath";
const LatexPost = async ({ params }) => {
  // const latexPosts = getLatexPosts(post.order);
  const post = getPostBySlug(params.slug);
  const coursePosts = getPostsByType(["latex"], post.order);

  const nextPost = coursePosts.nextPost;
  const prevPost = coursePosts.previousPost;
  const readingTime = (post) => {
    const WORDS_PER_MINUTE = 200;
    let result = {};
    const regex = /\w+/g;
    result.wordCount = (post || "").match(regex).length;

    result.readingTime = Math.ceil(result.wordCount / WORDS_PER_MINUTE);

    return result;
  };
  const readT = readingTime(post.content);
  const compos = {
    ...MdxComponents,
    ...dynamicMdxComponents,
  };

  return (
    <Layout>
      <MainBg>
        <ScrollDiv />
        <Article>
          <ShowPath title={post.title} />
          <MdHead>{post.title}</MdHead>
          <MetaInfo>
            <Date>
              <FaPencilAlt style={{ marginRight: "5px" }} />
              <DateDisplay
                isoDate={post.date.iso}
                defaultFormatted={post.date.formatted}
              />
            </Date>
            <Date style={{ marginLeft: "10px" }}>
              <FaClock style={{ marginRight: "5px" }} />
              {readT.readingTime < 2
                ? `${readT.readingTime} minuto`
                : `${readT.readingTime} minutos`}{" "}
            </Date>
            <SideInfo>
              <Link href={`/${post.doctype[0]}`}>
                {post.doctype.map((type, index) => (
                  <SectionType key={index} tag={type}>
                    {type}
                    {index < post.doctype.length - 1}
                  </SectionType>
                ))}
              </Link>
            </SideInfo>
          </MetaInfo>
          {post.coverImage && (
            <HeroImage>
              {" "}
              <Image
                src={post.coverImage}
                // width={width}
                // height={height}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
                alt={
                  post.coverImageAlt
                    ? post.coverImageAlt
                    : "Cover images with a illustration of the title"
                }
                objectFit="cover"
              />
            </HeroImage>
          )}

          {/* <MDXContent posts={post.content} /> */}
          <MDXRemote
            source={post.content}
            components={compos}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkMath, supersub],
                rehypePlugins: [rehypeMathjax, rehypeHighlight],
              },
            }}
          />
          <h1 style={{ marginTop: "6rem" }}>Otros posts:</h1>
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
        </Article>
      </MainBg>
    </Layout>
  );
};
export default LatexPost;

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "/app/_posts");
  const filenames = fs.readdirSync(postsDirectory);

  const allSlugs = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    return { slug };
  });

  const latexSlugs = allSlugs
    .map((slug) => getPostBySlug(slug.slug))
    .filter((post) => post.doctype.includes("latex"))
    .map((post) => post.slug)
    .map((slug) => ({ slug }));

  return latexSlugs;
}

export async function generateMetadata({ params }, parent) {
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
          url: post.imageThumbnail, // Ruta de la imagen para el home
          width: 1200,
          height: 630,
          alt: "Vista previa del sitio web de Eric",
        },
      ],
    },
  };
}
