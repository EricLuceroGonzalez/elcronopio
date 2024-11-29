import React from "react";
import { MainBg, TitlePage } from "../ComponentsStyled";
import {
  AboutWrapper,
  IconLink,
  LinkList,
  MdParagraph,
} from "../components/lugs";

const About = () => {
  return (
    <MainBg>
      <AboutWrapper>
        <TitlePage>About</TitlePage>
        <MdParagraph>
          Actualmente estoy realizando un doctorado en Inteligencia Artificial
          en la Universidad Politécnica de Madrid. Mis intereses incluyen
          algoritmos de optimización, meta-heurísticas y LaTeX. Disfruto
          compartiendo conocimiento y aprendiendo a través de la escritura.
        </MdParagraph>

        <LinkList>
          <IconLink
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </IconLink>
          <IconLink
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </IconLink>
          <IconLink href="mailto:your-email@example.com">
            <i className="fas fa-envelope"></i> Email
          </IconLink>
        </LinkList>
      </AboutWrapper>
    </MainBg>
  );
};

export default About;

export const metadata = {
  title: "Acerca de",
  openGraph: {
    title: "About",
    description: "About is a...",
  },
};
