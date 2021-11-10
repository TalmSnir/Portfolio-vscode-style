import React, { useContext } from 'react';
import { Context } from '../context/DataContext';
import styled from 'styled-components';
import {
  VscNewFile,
  VscNewFolder,
  VscFolderOpened,
  VscFolder,
  VscEllipsis,
  VscRefresh,
  VscSymbolEnumMember,
  VscChevronDown,
  VscChevronRight,
} from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import { useToggle } from '../hooks';
import { ProjectLabel } from '.';

const PanelContainer = styled.aside`
  block-size: 100%;
  inline-size: 240px;
  background-color: ${({ theme }) => theme.clrBase21};
  color: ${({ theme }) => theme.clrBase06};
  font-size: ${({ theme }) => theme.fsHeadingH5};
  position: absolute;
  top: 0;
  left: 100%;
  z-index: ${({ theme }) => theme.zIndexPanel};
  display: ${props => (props.showPanel ? 'block' : 'none')};
`;
const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacingXxs};
`;
const PanelTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `0.2rem ${theme.spacingXxs}`};

  background-color: ${({ theme }) => theme.clrBase17};
  color: ${({ theme }) => theme.clrBase06};
`;
const PanelTopIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingXxs};
`;

const PanelButton = styled.button`
  appearance: none;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  display: flex;
  align-items: center;
  font-size: inherit;
  inline-size: 100%;
  padding: ${({ theme }) =>
    `${theme.spacingXxs} 0 ${theme.spacingXxs} ${theme.spacingXs} `};

  gap: ${({ theme }) => theme.spacingXxs};
`;

const Label = styled.span`
  color: ${({ theme }) => theme.clrAccentYellow03};
`;
const PanelProjects = styled.div`
  height: 60vh;
  overflow: hidden;
`;

export default function Panel({ showPanel }) {
  const { data } = useContext(Context);
  const [show, setShow] = useToggle(false);
  const handleShowProjects = () => {
    setShow();
  };

  return (
    <PanelContainer showPanel={showPanel}>
      <IconContext.Provider value={{ size: 14 }}>
        <PanelHeader>
          Explorer <VscEllipsis />
        </PanelHeader>
        <PanelTop>
          <span
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <VscChevronDown />
            Projects
          </span>
          <PanelTopIcons>
            <VscNewFile />
            <VscNewFolder />
            <VscRefresh />
            <VscSymbolEnumMember />
          </PanelTopIcons>
        </PanelTop>
        <div>
          <PanelButton onClick={handleShowProjects}>
            {show ? (
              <>
                <VscChevronDown />
                <VscFolderOpened style={{ color: 'rgba(238, 157, 40, 1)' }} />
              </>
            ) : (
              <>
                <VscChevronRight />
                <VscFolder style={{ color: 'rgba(238, 157, 40, 1)' }} />
              </>
            )}
            <Label>Top projects</Label>
          </PanelButton>
          {show && data && (
            <PanelProjects>
              {data.map((project, id) => (
                <ProjectLabel key={project.name} id={id} name={project.name} />
              ))}
              <ProjectLabel key='Readme' id={4} name='README.md' type='md' />
            </PanelProjects>
          )}
        </div>
      </IconContext.Provider>
    </PanelContainer>
  );
}
