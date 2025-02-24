"use client";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
  min-height: 99vh;
  font-size: xx-small;
  @media (min-width: 1080px) {
    font-size: large;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: var(--bg);
  min-height: 83vh;
`;

export const MainBg = styled.div`
  flex: 1;
  padding: 0 1.5rem;
  background-color: var(--bg);
  min-height: 100vh;
  @media (max-width: 728px) {
    text-align: justify;
    padding: 1rem 5px;
  }
  border: 1px solid var(--bg);
`;
export const MainPageBg = styled.div`
  flex: 1;
  padding: 0 1.5rem;
  background-color: var(--bg);
  min-height: 100vh;
  max-width: 100%;
  text-align: justify;
  padding: 1rem 1rem;
  @media (min-width: 660px) {
    font-size: large;
    max-width: 70%;
    margin: 0 auto;
  }
`;

export const TitlePage = styled.h1`
  color: var(--fg);
  @media (max-width: 728px) {
    text-align: justify;
    /* padding: 1rem 1rem; */
  }
  font-size: x-large;
  @media (min-width: 660px) {
    font-size: xx-large;
  }
`;

export const Section = styled.section`
  color: blue;
`;

export const NotFoundTitle = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  /* font-family: var(--font-alexandria); */
  /* font-family: var(--font-parkisans); */
`;
export const NotFoundText = styled.p`
  padding: 0.5rem 0;
  text-align: justify;
`;
