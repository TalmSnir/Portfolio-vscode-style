import styled from 'styled-components';

export const Header1 = styled.h1`
  font-size: ${({ theme }) => theme.fsHeadingH1};
`;
export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fsBody1};
`;

export const StyledLink = styled.a.attrs(props => ({
  target: props.target || '_blank',
  referrerpolicy: props.referrerpolicy || 'no-referrer',
}))``;
