import React from 'react';
import ProfileImg from '../assets/profile.jpg';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.clrBase01};
  height: 100%;
  padding: 3rem;
`;
const Profile = styled.img`
  height: 200px;
  width: 200px;
  border: 8px solid white;
  box-shadow: ${({ theme }) =>
    ` 0 0 0 8px ${theme.clrBase21},0 0 0 16px ${theme.clrAccentBlue06}`};
  max-width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.brCircle};
`;

export default function About() {
  return (
    <Section>
      <Profile src={ProfileImg} alt='profile' />
      <h1>A little About Me</h1>
    </Section>
  );
}
