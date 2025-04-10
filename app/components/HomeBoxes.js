"use client";
import AllPosts from "./navigation/AllPosts";
import { BoxGrid } from "../ui/lugs";
// const BoxGrid = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   max-width: 100%;
//   flex-wrap: wrap;
// `;
const HomeBoxes = (posts) => {
  // const theProps = posts.props.map((post) => {
  //   return post.metadata;
  // });
  // console.log(theProps);

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
            doctype,
            coverImage = "",
            coverImageAlt = "alt text image no found",
          }) => (
            <AllPosts
              key={id}
              title={title}
              slug={slug}
              date={date}
              excerpt={excerpt}
              author={author}
              doctype={doctype}
              coverImage={coverImage}
              coverImageAlt={coverImageAlt}
            />
          )
        )}
      </BoxGrid>
    </>
  );
};

export default HomeBoxes;
