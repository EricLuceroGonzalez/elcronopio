"use client";
import { FaBackward } from "react-icons/fa";
import styled from "styled-components";
import { MdSubHeadA } from "../ui/MarkDownComponents";

const RefNum = styled.li`
  color: var(--fg);
`;

const RefTex = styled.a`
  :hover {
    color: var(--fg);
  }

  svg {
    color: var(--accent);
  }
`;

export const ReferenceList = ({ references }) => {
  if (!references || references.length === 0) return null;
  return (
    <div
      style={{
        marginTop: "2rem",
        borderTop: "1px solid #ddd",
        paddingTop: "1rem",
      }}
    >
      <MdSubHeadA>Referencias</MdSubHeadA>
      <ol>
        {references.map(({ id, text }) => (
          <RefNum key={id} id={`ref-${id}`}>
            {text}{" "}
            <RefTex href={`#cite-${id}`}>
              <FaBackward />
            </RefTex>
          </RefNum>
        ))}
      </ol>
    </div>
  );
};
