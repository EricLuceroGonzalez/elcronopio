"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  text-align: center;
  position: relative;
  bottom: 0;
  flex-shrink: 0;
  font-size: small;
`;
const FooterLinks = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-size: small;
`;
const FoooterLink = styled.div`
padding: 2px 5px;
margin: 0 5px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FoooterLink href="/contact" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Contact
        </FoooterLink>
        <FoooterLink href="/about" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          About
        </FoooterLink>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </FooterLinks>
      <FooterText>
        &copy; {new Date().getFullYear()} Eric Lucero González. All Rights Reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
