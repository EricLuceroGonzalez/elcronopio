"use client"
import React from 'react';
import PropTypes from 'prop-types';
import { Bar, Hamburger, MainNav, NavBarToggle, NavLi, Logo, NavLink, NavigationBar } from './navCompos';
import StyledLink from './StyledLink';
    
/*
 * This is a ready to use component, just import it and plop it into your project as:
 * <Navbar/>
 * You might want to move all the style components into separate files for readability
 * if you plan to do more with it.
 */
class NaviBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {displayNav: (props.displayNav ? 'flex' : 'none')};
  }
  toggleNavBar() {
    this.setState((prevState, props) => {
      switch(prevState.displayNav) {
        case 'none':
          return { displayNav: 'flex'};          
        case 'flex':
        default:
          return { displayNav: 'none'}          
      }
    })
  }
  render() {
    return (
    <Bar>
      <NavBarToggle onClick={() => this.toggleNavBar()}>
        <Hamburger />
      </NavBarToggle>
      <Logo href="/"></Logo>
      <MainNav display={this.state.displayNav}>
          {/* <NavLi>
              <NavLink href="#" >Main</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="#" >Search</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="#" >Avocados</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="/latex" >Login</NavLink>
          </NavLi> */}

    <NavigationBar>
        <StyledLink href={"/"}>Home</StyledLink>
        <StyledLink href={"/contact"}>Contacto</StyledLink>
        <StyledLink href={"/about"}>About</StyledLink>
        <StyledLink href={"/latex"}>LaTeX</StyledLink>
        <StyledLink href={"/"}>Suscribe</StyledLink>
    </NavigationBar>
      </MainNav>
    </Bar>
  )}
}

NaviBar.propTypes = {
  // decides if we initially display the navbar open or not
  displayNav: PropTypes.bool,
}

export default NaviBar;