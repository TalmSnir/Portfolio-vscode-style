import React, { useState } from 'react';

import styled from 'styled-components';

import { SidebarBottom, SidebarTop, SidebarSocial, Panel } from '.';
import { IconContext } from 'react-icons';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacingXs};
  background: ${({ theme }) => theme.clrBgSidebar};
  inline-size: 50px;
  block-size: 100%;
  grid-row: 2;
  grid-column: 1;
  position: relative;
  z-index: ${({ theme }) => theme.zIndexTop};
`;

export default function SideBar() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <SidebarContainer>
      <IconContext.Provider
        value={{
          size: 24,
        }}>
        <SidebarTop setShowPanel={setShowPanel} showPanel={showPanel} />
        <Panel showPanel={showPanel} />
        <SidebarSocial />
        <SidebarBottom />
      </IconContext.Provider>
    </SidebarContainer>
  );
}
