"use client"
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

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
    background-color: rgba(216,216,216,0.5);
    padding: 16px 8px;
    border-radius: 8px;
    /* TODO: Style of blog posts and inner post */
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

const DateContainer = styled.div`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  color: gray;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ExcerptContainer = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 1rem;
`;
// Contenedor para el avatar y el nombre del autor
const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-size: 0.875rem;
  color: #555;
`;
const SectionType = styled.div`
font-weight: bold;
background-color: ${(props) =>
    props.doctype === "blog" ? "#4CAF50" : "#FF9800"}; /* Verde para blog, Naranja para latex */
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-left: 10px;
`
// JSX Component
const PostSection = ({ title, slug, date, excerpt, author, authorAvatar, doctype }) => (
<>
    {/* <CoverImageContainer> */}
      {/* <CoverImage title={title} src={coverImage} slug={slug} /> */}
    {/* </CoverImageContainer> */}
          <Link href={`/posts/${slug}`}>
    <GridContainer>
      <TitleContainer>
        <h2>
            {title}
        </h2>
        <DateContainer>
        {new Date(date).toLocaleDateString()}
        <SectionType  doctype={doctype}>{doctype}</SectionType>
        <AuthorInfo>
              {/* <Avatar src={authorAvatar} alt={author} /> */}
              <Image
                  src={authorAvatar}  // Ruta de la imagen del autor
                  alt={author}         // Texto alternativo
                  width={40}                // Ancho de la imagen
                  height={40}               // Alto de la imagen
                  objectFit="cover"         // Asegura que la imagen se adapte bien al contenedor
                />
              <AuthorName>{author}</AuthorName>
            </AuthorInfo>
        </DateContainer>
      </TitleContainer>
      <div>
        <ExcerptContainer>{excerpt}</ExcerptContainer>
      </div>
    </GridContainer>
    </Link>
    </>
);

export default PostSection;
