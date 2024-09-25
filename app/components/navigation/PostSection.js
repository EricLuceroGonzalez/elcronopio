"use client"
import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  /* No hay estilos en esta sección en tu código original */
`;

const CoverImageContainer = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const GridContainer = styled.div`
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    margin-bottom: 7rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;
  color: black;

  h3 {
    margin-bottom: 1rem;
    font-size: 2.25rem;
    line-height: 1.2;

    @media (min-width: 1024px) {
      font-size: 3rem;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const DateContainer = styled.div`
  margin-bottom: 1rem;
  font-size: 1.125rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ExcerptContainer = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 1rem;
`;

// JSX Component
const PostSection = ({ title, slug, date, excerpt, author }) => (
<>
    {/* <CoverImageContainer> */}
      {/* <CoverImage title={title} src={coverImage} slug={slug} /> */}
    {/* </CoverImageContainer> */}
    <GridContainer>
      <TitleContainer>
        <h3>
          <Link href={`/posts/${slug}`}>
            {title}
          </Link>
        </h3>
        <DateContainer>
          {/* <DateFormatter dateString={date} /> */}
        </DateContainer>
      </TitleContainer>
      <div>
        <ExcerptContainer>{excerpt}</ExcerptContainer>
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
    </GridContainer>
    </>
);

export default PostSection;
