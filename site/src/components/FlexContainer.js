import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.dir || 'row'};
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
  gap: ${props => props.gap || ''};
  padding: ${props => props.padding || ''};
  margin: ${props => props.margin || ''};
`;
