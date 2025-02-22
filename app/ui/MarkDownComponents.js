"use client";
import styled from "styled-components";

export const MdParagraph = styled.p`
  margin: 2em 0;
  font-size: medium;
  @media (min-width: 660px) {
    font-size: large;
  }
  /* border: 1px solid red; */
`;

export const MdListItem = styled.li`
  color: var(--fg);
  /* font-size: 0; */
  /* list-style-type: circle; */
  font-size: medium;
  text-align: justify;
`;
export const MdUnorderedList = styled.ul`
  list-style-position: inside;
  margin: auto;
  width: 95%;
`;

export const MdOrderedList = styled.ol`
  /* list-style-position: inside; */
  /* margin: auto; */
  margin-left: 1rem;
`;

export const MdBlockQuote = styled.blockquote`
  background-color: var(--quote-bg);
  color: var(--quote-fg);
  padding: 2px 8px;
  margin: 3px auto;
  border-radius: 12px;
  min-width: 85%;
`;

export const MdHead = styled.h1`
  /* color: var(--fg); */
  text-align: left;
  font-size: x-large;
  @media (min-width: 660px) {
    font-size: xx-large;
  }
`;
export const MdSubHeadA = styled.h2`
  color: var(--subheading);
  font-size: larger;
`;
export const MdSubHeadB = styled.h3`
  color: var(--subheading);
  margin: 25px 0;
  font-size: larger;
`;
export const MdSubHeadC = styled.h4`
  color: var(--heading);
  margin: 15px 0;
  font-size: medium;
`;

export const MdLink = styled.a`
  background-color: var(--link-bg);
  color: var(--link-fg);
  padding: 2px 5px;
`;

export const MdStrong = styled.strong`
  /* background- */
  color: var(--strong-fg);
  background-color: var(--strong-bg);
  /* color: var(--bg); */
  font-weight: bold;
  padding: 2px 2px;
  border-radius: 6px;
`;
export const MdEmph = styled.em`
  color: var(--emphasis-fg);
  background-color: var(--emphasis-bg);
  /* var(--emphasis-bg); */
  /* padding: 0 1px; */
  /* font-style: normal; */
  font-weight: 500;
`;

export const MdImage = styled.div`
  /* background-color: red; */
  /* border: 1px solid red; */
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
`;
export const MdImageCaption = styled.p`
  color: var(--gray-light);
  margin: 5px 0;
  text-align: justify;
  max-width: 60%;
  @media (max-width: 660px) {
    max-width: 80%;
  }
`;
