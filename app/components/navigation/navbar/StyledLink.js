// StyledLink.js
import Link from 'next/link';
import styled from 'styled-components';

// Define the styled component for the anchor tag
const StyledAnchor = styled.div`
color: var(--fg); 
 text-decoration: none;
 border-radius: 8px;
 transition: background-color 0.3s ease;
 padding: 8px 6px;
  margin: 2px 2px;
  font-size: normal;
  font-weight: 700;
  &:hover {
    background-color: #e0e0e0;
    color: darkblue;
  }
`;

const StyledLink = ({ href, children }) => {
  return (  
    <Link href={href} passHref>
      <StyledAnchor>{children}</StyledAnchor>
    </Link>
  );
};

export default StyledLink;
