import React from "react";
import { MainBg, TitlePage } from "../ComponentsStyled";

const Contact = () => {
  return (
    <MainBg>
      <TitlePage>Contact</TitlePage>
      {/* TODO: Create the contact functionality (Mail, Form, database, chat gpt) */}
    </MainBg>
  );
};

export default Contact;
export const metadata = {
  title: 'Contacto',
  openGraph: {
    title: 'Contact',
    description: 'Contact is a...',
  },
}