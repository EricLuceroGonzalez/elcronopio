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
  /* min-height: 83vh; */
  min-height: 100vh;
  /* max-width: 80%; */
  font-size: small;
  @media (max-width: 728px) {
    text-align: justify;
    padding: 1rem 1rem;
  }
`;

export const TitlePage = styled.h1`
  font-size: x-large;
  color: var(--fg);
`;

export const Section = styled.section`
  color: blue;
`;
