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
  width: 30%;
  border: 1px dashed var(--fg);
  margin: 1rem auto;
  @media (max-width: 1080px) {
    width: 40%;
  }
  @media (max-width: 880px) {
    width: 80%;
  }
`;

const AboutThisPage = () => {
  return (
    <MainBg>
      <ShowPath />
      <h1>About this</h1>
      <LogosBox>
        <div>
          <RiNextjsFill style={{ fontSize: "10rem", color: "var(--accent)" }} />

          <IoLogoJavascript
            style={{ fontSize: "10rem", color: "var(--accent)" }}
          />
        </div>
        <div>
          <RiReactjsLine
            style={{ fontSize: "10rem", color: "var(--accent)" }}
          />

          <SiMdx style={{ fontSize: "10rem", color: "var(--accent)" }} />
        </div>
      </LogosBox>
    </MainBg>
  );
};

export default AboutThisPage;
