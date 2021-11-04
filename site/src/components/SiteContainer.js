import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template: auto 1fr auto/ auto 1fr;
  height: 100vh;
`;

export default function SiteContainer({ children }) {
  return <Container>{children}</Container>;
}
