"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import {
  Article,
  Author,
  CodeBlock,
  Content,
  Date,
  MdParagraph,
  MetaInfo,
  StyledMarkdown,
  Title,
  GridContainer,
  TitleContainer,
  AuthorInfo,
  AuthorName,
  SideInfo,
  SectionType,
  ExcerptContainer,
} from "../../components/lugs.js";

const Section = styled.section`
  /* No hay estilos en esta sección en tu código original */
`;

// JSX Component
const PostSection = ({
  title,
  slug,
  date,
  excerpt,
  author,
  authorAvatar,
  doctype,
}) => (
  <>
    {/* <CoverImageContainer> */}
    {/* <CoverImage title={title} src={coverImage} slug={slug} /> */}
    {/* </CoverImageContainer> */}
    <Link href={`/posts/${slug}`}>
      <GridContainer>
        <TitleContainer>
          <h2>{title}</h2>
          <MetaInfo>
            <SideInfo>
              <Date>{date}</Date>
              {/* <div>{new Date(date).toLocaleDateString()}</div> */}
              <SectionType doctype={doctype}>{doctype}</SectionType>
            </SideInfo>
            <SideInfo>
              <AuthorInfo>
                {/* <Avatar src={authorAvatar} alt={author} /> */}
                <Image
                  src={authorAvatar} // Ruta de la imagen del autor
                  alt={author} // Texto alternativo
                  width={40} // Ancho de la imagen
                  height={40} // Alto de la imagen
                  // objectFit="cover" // Asegura que la imagen se adapte bien al contenedor
                />
                <AuthorName>{author}</AuthorName>
              </AuthorInfo>
            </SideInfo>
          </MetaInfo>
        </TitleContainer>
        {/* <div> */}
        <ExcerptContainer>{excerpt}</ExcerptContainer>
        {/* </div> */}
      </GridContainer>
    </Link>
  </>
);

export default PostSection;
