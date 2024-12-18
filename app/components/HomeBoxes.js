"use client";
import styled from "styled-components";
import AllPosts from "./navigation/AllPosts";
import { BoxGrid } from "./lugs";

// const BoxGrid = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   max-width: 100%;
//   flex-wrap: wrap;
// `;
const HomeBoxes = (posts) => {
  return (
    <>
      <BoxGrid>
        {posts.props.map(
          ({
            slug,
            id,
            date,
            title,
            author,
            excerpt,
            authorAvatar,
            doctype,
          }) => (
            <AllPosts
              key={id}
              title={title}
              slug={slug}
              date={date}
              excerpt={excerpt}
              author={author}
              authorAvatar={authorAvatar}
              doctype={doctype}
            />
          )
        )}
      </BoxGrid>
    </>
  );
};

export default HomeBoxes;
