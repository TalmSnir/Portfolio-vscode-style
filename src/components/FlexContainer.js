import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.dir || 'row'};
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
  gap: ${props => props.gap || ''};
  padding: ${props => props.padding || ''};
  margin: ${props => props.margin || ''};
  inline-size: ${props => props.inlineSize || ''};
  ${({ bpSmCol }) => {
    if (bpSmCol)
      return css`
        @media screen and (max-width: ${({ theme }) => theme.bpSm}) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `;
  }}
  ${({ bpMdCol }) => {
    if (bpMdCol)
      return css`
        @media screen and (max-width: ${({ theme }) => theme.bpMd}) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `;
  }} /* ${({ bpMdCol }) => {
    if (bpMdCol)
      return css`
        @media screen and (min-width: 580px) {
          flex-direction: column;
        }
      `;
  }} */
`;
