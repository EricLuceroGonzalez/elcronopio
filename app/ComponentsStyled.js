// ComponentsStyled.js
"use client"

import styled from "styled-components"

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
background-color: var(--bg);
min-height: 99vh;
`

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 83vh;
`;

export const MainBg = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: var(--bg);
  min-height: 83vh;
  @media (max-width: 728px) {
    text-align: justify;
    padding: 1rem 7px;
  }
`;

export const TitlePage = styled.h1`
font-size: x-large;
color: var(--fg);
`

export const Section = styled.section`
color: blue;
`