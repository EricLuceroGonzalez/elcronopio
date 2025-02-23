"use client";
import React, { useEffect } from "react";
import { Bar, MainNav, MainNavLogo, NavLogo } from "./navCompos";
import StyledLink from "./StyledLink";
import ThemeSwitcher from "../../../themes/ThemeSwitcher.js";
import { usePathname } from "next/navigation";
/*
 * This is a ready to use component, just import it and plop it into your project as:
 * <Navbar/>
 * You might want to move all the style components into separate files for readability
 * if you plan to do more with it.
 */
// class NaviBar extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = { displayNav: props.displayNav ? "flex" : "flex" };
//   }
//   toggleNavBar() {
//     this.setState((prevState, props) => {
//       switch (prevState.displayNav) {
//         case "none":
//           return { displayNav: "flex" };
//         case "flex":
//         default:
//           return { displayNav: "flex" };
//       }
//     });
//   }
//   render() {
const NaviBar = () => {
  const path = usePathname();
  const primaryPath = "/" + path.split("/")[1];

  return (
    <Bar>
      {/* <NavBarToggle onClick={() => this.toggleNavBar()}>
          <Hamburger />
        </NavBarToggle> */}
      <MainNavLogo>
        <StyledLink actualPath={primaryPath} pathName={"/"} href={"/"}>
          Eric Lucero
        </StyledLink>
        {/* <NavLogo>Eric Lucero</NavLogo> */}
      </MainNavLogo>
      <MainNav
        display={"flex"}
        // onClick={() => this.toggleNavBar()}
      >
        {/* <StyledLink actualPath={primaryPath} pathName={"/"} href={"/"}>
          Home
        </StyledLink> */}
        <StyledLink actualPath={primaryPath} pathName={"/blog"} href={"/blog"}>
          Blog
        </StyledLink>
        <StyledLink
          actualPath={primaryPath}
          pathName={"/latex"}
          href={"/latex"}
        >
          LaTeX
        </StyledLink>
        <StyledLink
          actualPath={primaryPath}
          pathName={"/about"}
          href={"/about"}
        >
          About
        </StyledLink>
      </MainNav>
      <ThemeSwitcher />
      {/* <StyledLink href={"/"}>Suscribe</StyledLink> */}
      {/* </NavigationBar> */}
    </Bar>
  );
};
// }

// NaviBar.propTypes = {
//   // decides if we initially display the navbar open or not
//   displayNav: PropTypes.bool,
// };

export default NaviBar;
