"use client";
import { MainBg } from "@/app/ui/ComponentsStyled";
import { RiNextjsFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMdx } from "react-icons/si";
import styled from "styled-components";
import ShowPath from "@/app/components/showPath";

const LogosBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 30%;
  border: 1px dashed var(--fg);
  margin: 1rem auto;
  @media (max-width: 1080px) {
    max-width: 40%;
  }
  @media (max-width: 880px) {
    max-width: 80%;
  }
`;

const AboutThisPage = () => {
  return (
    <MainBg>
      <ShowPath />
      <h1>Acerca de esta pagina</h1>
      <p>Esta pagina esta en proceso de construcción y diseño.</p>
      <LogosBox>
        <div>
          <RiNextjsFill style={{ fontSize: "4rem", color: "var(--accent)" }} />

          <IoLogoJavascript
            style={{ fontSize: "4rem", color: "var(--accent)" }}
          />
        </div>
        <div>
          <RiReactjsLine style={{ fontSize: "4rem", color: "var(--accent)" }} />

          <SiMdx style={{ fontSize: "4rem", color: "var(--accent)" }} />
        </div>
      </LogosBox>
    </MainBg>
  );
};

export default AboutThisPage;
