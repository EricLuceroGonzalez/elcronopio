// StyledLink.js
import Link from 'next/link';
import styled from 'styled-components';

// Define the styled component for the anchor tag
const StyledAnchor = styled.div`
  color: blue;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
  margin: 2px 5px;

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
