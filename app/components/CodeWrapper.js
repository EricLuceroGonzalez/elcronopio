import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";

const CodeBlockWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Toolbar = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  z-index: 1;
`;

const LanguageBadge = styled.span`
  background: var(--primary-btn-bg);
  color: var(--primary-btn-fg);
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const CopyButton = styled.button`
  background: var(--secondary-btn-bg);
  color: var(--secondary-btn-fg);
  border: none;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background: var(--secondary-btn-hover);
    color: var(--fg);
  }
`;

const CodeBlock = ({ language, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copy status after 2 seconds
  };

  return (
    <CodeBlockWrapper>
      <Toolbar>
        <LanguageBadge>{language}</LanguageBadge>
        <CopyToClipboard text={value} onCopy={handleCopy}>
          <CopyButton>{copied ? "¡Copiado!" : "Copiar"}</CopyButton>
        </CopyToClipboard>
      </Toolbar>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        wrapLines={true}
        showLineNumbers={true}
        customStyle={{ lineHeight: "0.75", fontSize: "small" }}
      >
        {value}
      </SyntaxHighlighter>
    </CodeBlockWrapper>
  );
};

export default CodeBlock;
