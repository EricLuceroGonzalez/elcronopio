"use client";
import Link from "next/link";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import styled from "styled-components";

const NavCard = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  margin: 12px 0;
  border-radius: 10px;
  background: var(--bg);
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--fg);
    transform: translateY(-2px);
    color: var(--bg);
  }
  border: 1px solid var(--fg);
  width: 35%;
  @media (max-width: 620px) {
    /* border: 1px solid red; */
    width: 49%;
  }
`;

const PostInfo = styled.div`
  flex: 1;
  margin: 0 2px;
`;

const Title = styled.h4`
  margin: 0;
  font-size: x-small;
  padding: 0.3rem 0;
  @media (max-width: 620px) {
    font-size: small;
    text-align: left;
  }
`;

const Excerpt = styled.p`
  margin: 5px 0 0;
  font-size: x-small;
  color: var(--gray-medium);
`;

const PostNavigationCard = ({ post, type }) => {
  if (!post) return null;

  return (
    <NavCard href={`/${post.doctype}/${post.slug}`}>
      {type === "prev" && (
        <FaArrowAltCircleLeft color="var(--fg)" size={"1rem"} />
      )}
      <PostInfo>
        <Excerpt>{type == "prev" ? "Anterior" : "Siguiente"}</Excerpt>
        <Title>{post.title}</Title>
        {/* <Excerpt>{post.excerpt}</Excerpt> */}
      </PostInfo>
      {type === "next" && (
        <FaArrowAltCircleRight color="var(--fg)" size={"1rem"} />
      )}
    </NavCard>
  );
};

export default PostNavigationCard;
