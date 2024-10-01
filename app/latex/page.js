import React from "react";
import { MainBg, TitlePage } from "../ComponentsStyled";
import { headers } from "next/headers";


const Latex = () => {
    return <MainBg>
        <TitlePage>LaTeX</TitlePage>
        {/* TODO: Create the feeling here...(and in suscribe, but later) */}
    </MainBg>
};

export default Latex;

export const metadata = {
    title: 'LaTeX',
    openGraph: {
      title: 'LaTeX',
      description: 'Acme is a...',
    },
  }