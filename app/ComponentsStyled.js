// ComponentsStyled.js
"use client";

import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
  min-height: 99vh;
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 83vh;
`;

export const MainBg = styled.div`
  flex: 1;
  padding: 0 1.5rem;
  background-color: var(--bg);
  /* min-height: 83vh; */
  min-height: 100vh;
  /* max-width: 80%; */
  @media (max-width: 728px) {
    text-align: justify;
    padding: 1rem 2rem;
  }
  /* border: 1px solid red; */
`;

export const TitlePage = styled.h1`
  font-size: x-large;
  color: var(--fg);
`;

export const Section = styled.section`
  color: blue;
`;
