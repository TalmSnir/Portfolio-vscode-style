import React, { useContext } from 'react';
import styled from 'styled-components';

import { VscClose, VscFileCode, VscInfo } from 'react-icons/vsc';
import { Context } from '../context/DataContext';
const ProjectTop = styled.div`
  position: absolute;
  inline-size: 100%;
  z-index: ${({ theme }) => theme.zIndexTab};
  background: ${({ theme }) => theme.clrBgHeader};
`;
const Label = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.fsHeadingH5};
  padding: ${({ theme }) => theme.spacingXxs};
  inline-size: 160px;

  background: ${({ theme }) => theme.clrBgProjectTab};
  &:hover button,
  &:focus button {
    opacity: 1;
  }
`;
const LabelInner = styled.span`
  display: flex;
  align-items: center;

  justify-content: space-between;
  gap: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .icon {
    &--info {
      flex-shrink: 0;
      color: ${({ theme }) => theme.clrAccentBlue};
    }
    &--file {
      flex-shrink: 0;
      color: ${({ theme }) => theme.clrAccentYellow};
    }
  }
`;
const CloseButton = styled.button`
  appearance: none;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;
export default function ProjectTab({ text, setShow }) {
  let { setProject } = useContext(Context);
  const handleClick = () => {
    setProject(null);
    setShow(false);
  };
  return (
    <ProjectTop>
      <Label>
        <LabelInner>
          {text === 'README.md' ? (
            <VscInfo className='icon--info' />
          ) : (
            <VscFileCode className='icon--file' />
          )}
          <span
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
            {text}
          </span>
        </LabelInner>
        <CloseButton onClick={handleClick}>
          <VscClose style={{ flexShrink: 0, height: '16px', width: '16px' }} />
        </CloseButton>
      </Label>
    </ProjectTop>
  );
}
