import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import markdownFile from './markdownReadme.md';

const Container = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-wrap;
  gap: 1rem;
  > * {
    width: 50%;

    padding: 1rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.bpMd}) {
    flex-direction: column;
  }
`;
const MarkdownContainer = styled.div`
  background-color: ${({ theme }) => theme.clrBase01};
  color: ${({ theme }) => theme.clrBase20};
  ul {
    margin-block-end: 1em;
    padding-inline-start: 40px;
  }
  overflow-wrap: break-word;
  > * {
    max-width: 100%;
  }
`;
const MarkdownRawContainer = styled.textarea`
  appearance: none;
  border: 0.5px solid ${({ theme }) => theme.clrBase01};
  outline: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.clrBase01};
  resize: none;
`;
export default function Readme() {
  const [markdownText, setMarkdownText] = useState(null);
  useEffect(() => {
    fetch(markdownFile)
      .then(res => res.text())
      .then(text => setMarkdownText(text));
  }, []);
  const handleChange = e => {
    setMarkdownText(e.target.value);
  };

  return (
    <>
      {markdownText && (
        <Container>
          <MarkdownRawContainer onChange={handleChange} value={markdownText} />
          <MarkdownContainer>
            <ReactMarkdown children={markdownText} />
          </MarkdownContainer>
        </Container>
      )}
    </>
  );
}
// VscOpenPreview
// VscPreview
