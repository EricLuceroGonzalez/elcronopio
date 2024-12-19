"use client";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Image from "next/image";

// Define los estilos para cada parte del artículo
export const Article = styled.article`
  max-width: 60%;
  margin: 0 auto;
  padding: 20px;
  background-color: --var(--bg);
  color: --var(--fg);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: small;

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

export const BoxGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 99%;
  flex-wrap: wrap;
  /* border: 3px solid greenyellow; */
`;
export const GridContainer = styled.div`
  margin: 0.55rem 0.55rem;
  background-color: var(--bg);
  padding: 16px 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: var(--fg);
  border: 2px solid var(--fg);
  /* min-width: 99%; */

  @media (min-width: 768px) {
    /* border: 2px solid red; */
    /* TODO: Style of blog posts and inner post */
    /* display: flex; */
    flex-direction: row;
    width: 80%;
  }

  @media (min-width: 1024px) {
    max-width: 45%;
    gap: 2rem;
  }
  &:hover {
    border: 2px solid var(--border-stroke);
    transition: border 0.5s;
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
  justify-content: start;

  @media (min-width: 668px) {
    width: 50%;
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
  background-color: var(--fg); /* Verde para blog, Naranja para latex */
  color: var(--bg);
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-left: 10px;
  font-size: x-small;
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
  margin: 3px 0px;
  font-size: inherit;
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
  text-align: left;
  font-size: large;
`;
export const MdSubHeadA = styled.h2`
  color: var(--fg);
  font-size: larger;
`;
export const MdSubHeadB = styled.h3`
  /* border: 1px solid red; */
  color: var(--emphasis-fg);
  margin: 25px 0;
  font-size: larger;
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

export const LinkList = styled.div`
  display: flex;
  gap: 1rem;
  font-family: monospace;
`;

export const IconLink = styled.a`
  color: var(--fg);
  text-decoration: none;
  svg {
    width: 14px;
    height: 14px;
    fill: var(--fg); // Color inicial del SVG
    transition: fill 0.3s ease;
  }
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

export const PhotoAvatar = styled.div`
  width: 200px; /* Tamaño del círculo */
  height: 200px;
  border-radius: 50%; /* Hace que la imagen sea circular */
  overflow: hidden; /* Asegura que el contenido no se salga del contenedor */
  border: 2px solid var(--border-stroke); /* Opcional: borde */
  @media (max-width: 600px) {
    width: 100px; /* Tamaño del círculo */
    height: 100px;
  }
`;

// For the sidebar
export const Sidebar = styled.aside`
  width: 250px;
  background-color: var(--bg);
  padding: 1rem;
  border-right: 1px solid var(--primary-border);
`;

export const SidebarHeading = styled.h2`
  font-size: 1.5rem;
  color: var(--heading);
  margin-bottom: 1rem;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--link-fg);
    text-decoration: none;

    &:hover {
      color: var(--primary-btn-bg);
    }
  }
`;

// Contenedor principal para manejar diseño responsivo
export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column; /* Cambia a diseño vertical en pantallas pequeñas */
  }
  /* border: 1px solid red; */
  background-color: var(--bg);
`;

export const CodeBlockWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  pre {
    margin: 0;
    padding: 1rem;
    border-radius: 8px;
  }
`;

export const Toolbar = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  z-index: 1;
`;

export const LanguageBadge = styled.span`
  background: var(--primary-btn-bg);
  color: var(--primary-btn-fg);
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CopyButton = styled.button`
  background: var(--secondary-btn-bg);
  color: var(--secondary-btn-fg);
  border: none;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background: var(--secondary-btn-hover);
    color: var(--fg);
  }
`;
