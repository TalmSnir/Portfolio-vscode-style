import styled from 'styled-components';
import { StyledLink } from '.';

export const Tooltip = styled.span`
  --background-color: ${({ theme }) => theme.clrBase18};
  --border-color: ${({ theme }) => theme.clrBase06};
  position: absolute;
  inline-size: max-content;
  z-index: ${({ theme }) => theme.zIndexTooltip};
  top: 50%;
  left: calc(100% + 6px);
  transform: translateY(-50%);
  font-size: ${({ theme }) => theme.fsBodyB2};
  background-color: var(--background-color);
  padding: ${({ theme }) => theme.spacingXxs};
  border: 0.5px solid var(--border-color);
  color: ${({ theme }) => theme.clrBase06};
  text-transform: capitalize;
  opacity: 0;
  visibility: hidden;
  &::before {
    --size: 8px;
    content: '';
    position: absolute;
    z-index: -1;
    height: var(--size);
    width: var(--size);

    background-color: var(--background-color);
    top: 50%;
    left: -5px;
    transform: translateY(-50%) rotate(-45deg);
    border-width: 0.5px;
    border-style: solid;
    border-color: var(--border-color) transparent transparent
      var(--border-color);
  }
`;
export const LinkWithTooltip = styled(StyledLink)`
  &.quickTour {
    color: ${({ theme }) => theme.clrAccentBlue06};
    opacity: 1;
    .tooltip {
      opacity: 1;
      visibility: visible;
      font-weight: 700;
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.clrBase01};
      --background-color: ${({ theme }) => theme.clrAccentBlue06};
      --border-color: ${({ theme }) => theme.clrBase01};
    }
  }
  &:not(.active):hover > .tooltip {
    opacity: 1;
    visibility: visible;
  }
`;
