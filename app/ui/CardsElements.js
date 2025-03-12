import styled from "styled-components";
// import { motion } from "framer-motion";

// CardsElements.js;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  padding: 0 3px;
  flex-grow: 1;
  /* border: 2px solid var(--heading); */
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3px;
  min-width: 60%;
  flex-grow: 2;
  /* border: 2px solid var(--box-border-hover); */
`;

export const GridHeroImage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
  max-width: 90%;
  height: auto;
  position: relative;
  @media (max-width: 660px) {
    width: 70%;
  }
`;

export const GridContainer = styled.div`
  margin: 0.55rem auto;
  background-color: var(--bg);
  padding: 2px 10px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--gray-light);
  width: 100%;
  @media (min-width: 660px) {
    /* TODO: Style of blog posts and inner post */
    /* display: flex; */
    /* flex-direction: row; */
    width: 100%;
  }

  /* @media (min-width: 1024px) {
    max-width: 47%;
    gap: 2rem;
  } */
  &:hover {
    border: 2px solid var(--box-border-hover);
    transition: border 0.5s;
  }
`;

export const ExcerptContainer = styled.p`
  font-family: monospace;
  margin-bottom: 1rem;
  color: var(--fg);
  font-size: medium;
  /* color: blue; */
  @media (min-width: 660px) {
    font-size: medium;
    /* color: red; */
  }
`;

// export const AnimatedDiv = styled(motion.div)`
//   background-color: rebeccapurple;
//   width: 200px;
//   height: 200px;
// `;
