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
  <>
    <GridContainer>
      <Link href={`/${doctype}/${slug}`}>
        <TitleContainer>{title}</TitleContainer>
        {/* <div> */}
        <ExcerptContainer>{excerpt.substring(0, 150)}...</ExcerptContainer>
        {/* </div> */}
        <MetaInfo>
          <SideInfo>
            <Date>{date}</Date>
            <SectionType>{doctype}</SectionType>
          </SideInfo>
        </MetaInfo>
      </Link>
    </GridContainer>
  </>
);

export default AllPosts;
// ex-LatexPost;
