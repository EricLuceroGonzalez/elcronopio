// StyledLink.js
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Define the styled component for the anchor tag
const StyledAnchor = styled.div`
  color: var(--fg);
  text-decoration: none;
  /* border-radius: 8px; */
  transition: background-color 0.3s ease;
  padding: 8px 6px;
  margin: 2px 2px;
  font-size: normal;
  font-weight: 700;
  &:hover {
    background-color: var(--fg);
    color: var(--bg);
  }
  border-bottom: ${(props) =>
    props.thisPath === "Not" ? "none" : "2px solid var(--border-stroke)"};
`;

const StyledLink = ({ pathName, href, children }) => {
  const currentPath = usePathname();
  const [actualPath, setPathName] = useState("");

  useEffect(() => {
    currentPath == pathName ? setPathName("Yes") : setPathName("Not");
    return () => {};
  }, [currentPath]);
  return (
    <Link href={href} passHref>
      <StyledAnchor thisPath={actualPath}>{children}</StyledAnchor>
    </Link>
  );
};

export default StyledLink;
