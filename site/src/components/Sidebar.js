import React from 'react';

import styled from 'styled-components';
import { useToggle } from '../hooks';

import { SidebarBottom, SidebarTop, SidebarSocial, Panel } from '.';
import { IconContext } from 'react-icons';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacingXs};
  background: ${({ theme }) => theme.clrBase17};
  inline-size: 50px;
  block-size: 100%;
  grid-row: 2;
  grid-column: 1;
  position: relative;
`;

export default function SideBar() {
  const [showPanel, setShowPanel] = useToggle(false);

  const handleClick = () => {
    setShowPanel();
  };
  return (
    <SidebarContainer>
      <IconContext.Provider
        value={{
          size: 24,
        }}>
        <SidebarTop onClick={handleClick} />
        {showPanel && <Panel />}
        <SidebarSocial />
        <SidebarBottom />
      </IconContext.Provider>
    </SidebarContainer>
  );
}
