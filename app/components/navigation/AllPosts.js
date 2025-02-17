"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import {
  Date,
  MetaInfo,
  GridContainer,
  TitleContainer,
  AuthorInfo,
  AuthorName,
  SideInfo,
  SectionType,
  ExcerptContainer,
  MdHead,
} from "../lugs.js";

const Section = styled.section`
  /* No hay estilos en esta sección en tu código original */
`;

// JSX Component
const AllPosts = ({
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
    <GridContainer>
      <Link href={`/${doctype}/${slug}`}>
        <TitleContainer>{title}</TitleContainer>
        {/* <div> */}
        <ExcerptContainer>{excerpt}</ExcerptContainer>
        {/* </div> */}
        <MetaInfo>
          <SideInfo>
            <Date>{date}</Date>
            <SectionType>{doctype}</SectionType>
          </SideInfo>
          {/* <SideInfo>
              <AuthorInfo>
                <Image
                  src={authorAvatar} // Ruta de la imagen del autor
                  alt={author} // Texto alternativo
                  width={40} // Ancho de la imagen
                  height={40} // Alto de la imagen
                  // objectFit="cover" // Asegura que la imagen se adapte bien al contenedor
                />
                <AuthorName>{author}</AuthorName>
              </AuthorInfo>
            </SideInfo> */}
        </MetaInfo>
      </Link>
    </GridContainer>
  </>
);

export default AllPosts;
// ex-LatexPost;
