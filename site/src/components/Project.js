import React from 'react';
import styled from 'styled-components';
import { Header1, Paragraph, StyledLink } from '.';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacingSm};
`;
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingSm};
  a {
    display: block;
    color: inherit;
  }
  a:first-child {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: ${({ theme }) => `calc(${theme.spacingSm}/-2)`};
      width: 0.5px;
      height: 100%;
      background-color: ${({ theme }) => theme.clrBase01};
    }
  }
`;

export default function Project({ projectData }) {
  return (
    <Container>
      <Header1>{projectData.name}</Header1>
      <Paragraph>{projectData.description}</Paragraph>
      <LinksContainer>
        <StyledLink href={projectData.site}>live site</StyledLink>
        <StyledLink href={projectData.repo}>repo link</StyledLink>
      </LinksContainer>

      <iframe
        src={projectData.site}
        frameBorder='0'
        title='project live site'
        allowFullScreen
        referrerPolicy='no-referrer'
        style={{ height: '100vh', width: '100%' }}></iframe>
    </Container>
  );
}
