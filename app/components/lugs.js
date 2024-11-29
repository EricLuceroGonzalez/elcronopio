"use client";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Define los estilos para cada parte del artículo
export const Article = styled.article`
  max-width: 70%;
  margin: 0 auto;
  padding: 20px;
  background-color: --var(--bg);
  color: --var(--fg);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1080px) {
    max-width: 90%;
  }
  @media (max-width: 728px) {
    min-width: 92%;
    padding: 5px;
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Date = styled.p`
  font-size: 0.65rem;
  color: var(--theme-font);
  /* margin-bottom: 2rem; */
`;

export const Author = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: var(--fg);
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
  margin: 0.55rem 0.55rem;
  background-color: var(--bg);
  padding: 16px 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: var(--fg);
  border: 2px solid var(--fg);

  @media (min-width: 768px) {
    /* TODO: Style of blog posts and inner post */
    /* display: flex; */
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    max-width: 25%;
    gap: 2rem;
  }
  &:hover {
    border: 2px solid var(--border-stroke);
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 1rem;
  color: var(--fg);

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
  margin-bottom: 1rem;
  font-size: small;
  color: gray;
  display: flex;
  flex-direction: column;
  /* align-items:  */
  justify-content: start;

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
  color: var(--fg);
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
  color: var(--fg);
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
  font-size: small;
  margin: 2em 0;
  @media (min-width: 1080px) {
    font-size: medium;
  }
`;

export const MdListItem = styled.li`
  color: var(--item-fg);
  margin: 3px 22px;
`;
export const MdBlockQuote = styled.blockquote`
  border-left: 12px solid var(--primary-border);
  background-color: var(--quote-bg);
  color: var(--quote-fg);
  padding: 1px 2px;
  margin: 3px 12px;
`;

export const MdHead = styled.h1`
  color: var(--fg);
  font-size: larger;
  text-align: left;
`;
export const MdSubHeadA = styled.h2`
  font-size: large;
  color: var(--fg);
`;
export const MdSubHeadB = styled.h3`
  color: var(--fg);
`;
export const MdSubHeadC = styled.h4`
  color: var(--fg);
`;
export const MdLink = styled.a`
  background-color: var(--link-bg);
  color: var(--link-fg);
  padding: 2px 5px;
`;

export const MdStrong = styled.strong`
  background-color: var(--strong-bg);
  color: white;
`;
export const MdEmph = styled.em`
  background-color: var(--emphasis-bg);
  color: var(--emphasis-fg);
  padding: 0 5px;
  font-style: normal;
`;

export const BoxGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
  flex-wrap: wrap;
`;

export const LinkList = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconLink = styled.a`
  color: var(--link-fg);
  text-decoration: none;

  &:hover {
    color: var(--primary-btn-bg);
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;
