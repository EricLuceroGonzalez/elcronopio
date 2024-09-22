"use client"
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import StyledLink from "./StyledLink";

export const NavigationBar = styled.div`
display: flex;
background-color: darkblue;
padding: 15px 5px;
min-height: 40px;
`

const NavBar = ()=>{
return(
    <NavigationBar>
        <StyledLink href={"/"}>Home</StyledLink>
        <StyledLink href={"/contact"}>Contacto</StyledLink>
        <StyledLink href={"/about"}>About</StyledLink>
        <StyledLink href={"/latex"}>LaTeX</StyledLink>
        <StyledLink href={"/"}>Suscribe</StyledLink>
    </NavigationBar>
)
}

export default NavBar;