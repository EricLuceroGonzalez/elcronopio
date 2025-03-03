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
} from "../../ui/lugs.js";

const Section = styled.section`
  /* No hay estilos en esta sección en tu código original */
`;

// JSX Component
const AllPosts = ({ title, slug, date, excerpt, doctype }) => (
  // console.log(slug)
  <GridContainer>
    <Link href={`/${doctype[0]}/${slug}`}>
      <TitleContainer>{title}</TitleContainer>
      {/* <div> */}
      <ExcerptContainer>{excerpt.substring(0, 150)}...</ExcerptContainer>
      {/* </div> */}
      <MetaInfo>
        <SideInfo>
          <Date>{date}</Date>
          {/* <SectionType>{doctype.length > 1 ? doctype[1] : doctype}</SectionType> */}
          {doctype.map((type, index) => (
            <SectionType key={index} tag={type}>
              {type}
              {/* Agrega una coma si no es el último elemento */}
              {index < doctype.length - 1}
            </SectionType>
          ))}
        </SideInfo>
      </MetaInfo>
    </Link>
  </GridContainer>
);

export default AllPosts;
// ex-LatexPost;
