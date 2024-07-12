"use client"

const { default: styled } = require("styled-components");

const FooterContainer = styled.div`
  background-color: #000;
  color: #fff;
  width: 100vw;
  height: 10vh;
  bottom: 0;
  display: flex;
  flex-direction: row;
  /* padding: 2% 3%; */
  /* @media (min-width: 500px){
flex-direction: row;
justify-content: flex-start;
} */
`;


const Footer = () => {
    return (
      <FooterContainer>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </FooterContainer>
      )
      }

export default Footer;