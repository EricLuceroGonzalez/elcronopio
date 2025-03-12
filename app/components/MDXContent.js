"use client";
// components/MDXContent.js
import { MDXRemote } from "next-mdx-remote";
// import { serialize } from "next-mdx-remote/serialize";
import { components } from "./MDXComponents";

// export async function getMDXContent(source) {
//   console.log("getMDXContent source");

//   const mdxSource = await serialize(source, {
//     mdxOptions: {
//       remarkPlugins: [],
//       rehypePlugins: [],
//     },
//   });
//   return mdxSource;
// }

export function MDXContent({ source }) {
  console.log("MDX Content");

  console.log(source);

  return <MDXRemote {...source} components={components} />;
}
