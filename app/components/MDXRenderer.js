// components/MDXContent.js
"use client"; // Marca este componente como Client Component

import { useMemo } from "react";
import { run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { components } from "./MDXComponents";

export default function MDXContent({ source }) {
  const Content = useMemo(() => {
    const { default: MDXContent } = run(source, runtime);

    return MDXContent;
  }, [source]);

  return <Content components={components} />;
}
