import React from "react";
import { MainBg, TitlePage } from "../ComponentsStyled";

const About = () => {
  return <MainBg>
    <TitlePage>About</TitlePage>
  </MainBg>;
};

export default About;

export const metadata = {
  title: 'Acerca de',
  openGraph: {
    title: 'About',
    description: 'About is a...',
  },
}