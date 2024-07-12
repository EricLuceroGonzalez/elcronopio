"use client"
import React from 'react'
import styled from 'styled-components'

const NavDiv = styled.div`
height: 10vh;
display: flex;
flex-direction: row;
background-color: #000;
color: #fff;
`
const NavItem = styled.div`
margin: 6px 12px;
font-weight:100;
cursor: pointer;
`

const NavBar = () => {
  return (
    <NavDiv>
        <NavItem>LOGO</NavItem>
        <NavItem>NavBar</NavItem>
        <NavItem>NavBar</NavItem>
    </NavDiv>
  )
}

export default NavBar