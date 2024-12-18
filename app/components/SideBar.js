"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Sidebar estilo fijo al costado
const Sidebar = styled.aside`
  width: 150px;
  background-color: var(--fg);
  color: red; //var(--bg);;
  padding: 1rem;
  border-right: 1px solid var(--primary-border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  font-size: smaller;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: ${(props) =>
      props.open ? "0" : "-100%"}; /* Desliza dentro y fuera */
    width: 70%; /* Ajusta el ancho del sidebar en móviles */
    height: 100vh;
    transition: left 0.3s ease;
  }
`;

// Botón de menú hamburguesa
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--heading);
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Visible solo en pantallas pequeñas */
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`;

// Contenedor principal del contenido
const Content = styled.main`
  flex: 1;
  padding: 1rem;
  background: var(--bg);

  @media (max-width: 768px) {
    margin-top: 3rem; /* Espacio para el botón hamburguesa */
  }
`;

export default function ResponsiveSidebar({ sidebarItems }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <HamburgerButton onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </HamburgerButton>
      <Sidebar open={sidebarOpen}>
        <Image
          src={
            "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1732908752/elCronopio/LaTeX_logo_ou5hme.svg"
          } // Ruta de la imagen del autor
          alt={"Logo de LaTeX"} // Texto alternativo
          width={90} // Ancho de la imagen
          height={37.5} // Alto de la imagen
        />
        {sidebarItems.map(({ slug, shortTitle }) => (
          <Link
            key={slug}
            href={slug}
            style={{ textDecoration: "none", color: "var(--bg)" }}
          >
            {shortTitle}
          </Link>
        ))}
      </Sidebar>
    </>
  );
}
