"use client"

import styled from "styled-components"

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  margin-top: 0;
  background-color: #145d87;
overflow-y: auto;
`;

export const MainBody = () => {
  return (
    <BodyContainer>
        <div>MainBody</div>
        <div>MainBody</div>
        <div>MainBody</div>
    </BodyContainer>
  )
}
