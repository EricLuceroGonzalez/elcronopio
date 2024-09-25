"use client";

import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Define los estilos para cada parte del artículo
export const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Date = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 2rem;
`;

export const Author = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
  margin-bottom: 1.5rem;
`;

export const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #777;
`;

export const CodeBlock = styled(SyntaxHighlighter)`
  margin: 20px 0;
  border-radius: 8px;
`;
