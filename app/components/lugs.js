"use client";

import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Define los estilos para cada parte del artículo
export const Article = styled.article`
  max-width: 70%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 1080px) {
    max-width: 90%
  }
  @media (max-width: 728px) {
    max-width: 97%
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Date = styled.p`
  font-size: 1rem;
  color: #777;
  /* margin-bottom: 2rem; */
`;

export const Author = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
  margin-bottom: 1.5rem;
`;

// export const MetaInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1.5rem;
//   font-size: 0.9rem;
//   color: #777;
//   border: 1px solid red;
// `;

export const CodeBlock = styled(SyntaxHighlighter)`
  margin: 20px 0;
  border-radius: 8px;
  font-size: smaller;
`;

export const CoverImageContainer = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const GridContainer = styled.div`
  margin-bottom: 2rem;
  background-color: rgba(216, 216, 216, 0.5);
  padding: 16px 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    /* TODO: Style of blog posts and inner post */
    display: flex;
    flex-direction: column;
    max-width: 75%;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 1rem;
  color: black;

  h2 {
    margin-bottom: 1rem;
    font-size: larger;
    line-height: 1.2;

    @media (min-width: 1024px) {
      font-size: x-large;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const MetaInfo = styled.div`
/* border: 1px solid red; */
  margin-bottom: 1rem;
  font-size: small;
  color: gray;
  display: flex;
  flex-direction: column;
  /* align-items:  */
  justify-content: space-around;

  @media (min-width: 668px) {
    width: 40%;
    margin-bottom: 0;
    flex-direction: row;
  }
`;

export const ExcerptContainer = styled.p`
  font-size: small;
  line-height: 1.75;
  margin-bottom: 1rem;
`;
// Contenedor para el avatar y el nombre del autor
export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const AuthorName = styled.span`
  font-size: x-small;
  color: #555;
`;
export const SectionType = styled.div`
  font-weight: bold;
  background-color: ${(props) =>
    props.doctype === "blog"
      ? "#4CAF50"
      : "#FF9800"}; /* Verde para blog, Naranja para latex */
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-left: 10px;
`;
export const SideInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MdParagraph = styled.p`
  font-size: medium;
  margin: 2em 0;
  color: rgb(100,100,100);
`;

export const MdSpan = styled.span`
  background-color: rgb(100,100,100);
`;
export const MdListItem = styled.li`
  color: rgb(100,100,200);
  margin: 3px 22px;
`;
export const MdBlockQuote = styled.blockquote`
  background-color: rgba(100,100,200,0.4);
  border-left: 10px solid rgb(100,100,200);
  color: rgb(100,100,200);
  padding: 1px 4px;
  margin: 3px 22px;
`;
