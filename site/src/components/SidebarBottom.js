import React, { useState, useContext, useRef } from 'react';
import {
  VscAccount,
  VscGear,
  VscCheck,
  VscCloudDownload,
} from 'react-icons/vsc';
import { Button } from '.';
import { Context } from '../context/DataContext';
import { useClickOutside } from '../hooks';
import styled from 'styled-components';

const ColorThemeModal = styled.div`
  position: absolute;
  left: 100%;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndexModal};
  block-size: 200px;
  inline-size: 240px;
  background-color: ${({ theme }) => theme.clrBase21};
  color: ${({ theme }) => theme.clrBase06};
  font-size: ${({ theme }) => theme.fsBodyB2};
`;
const ProfileModal = styled.div`
  position: absolute;
  left: 100%;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndexModal};
  block-size: 160px;
  inline-size: 240px;
  background-color: ${({ theme }) => theme.clrBase21};
  color: ${({ theme }) => theme.clrBase06};
  font-size: ${({ theme }) => theme.fsBodyB2};
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacingXxs};
  &:not(:first-child) {
    cursor: pointer;
  }
  &:not(:first-child):hover {
    background-color: ${({ theme }) => theme.clrBase17};
  }
`;
const Separator = styled.div`
  background-color: ${({ theme }) => theme.clrBase06};
  block-size: 0.5px;
  opacity: 0.5;
`;
export default function SidebarBottom() {
  const colorRef = useRef(null);
  const profileRef = useRef(null);
  const colorThemes = ['sublimeMonkai', 'vscodeLight', 'tomorrowNightBlue'];
  const { colorTheme, setColorTheme } = useContext(Context);
  const [showColorModal, setShowColorModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const changeTheme = theme => {
    setColorTheme(theme);
  };

  const handleClickColor = () => {
    if (showColorModal) {
      setShowColorModal(false);
    } else setShowColorModal(true);
  };
  const handleClickProfile = () => {
    if (showProfileModal) {
      setShowProfileModal(false);
    } else setShowProfileModal(true);
  };

  useClickOutside(colorRef, handleClickColor);
  useClickOutside(profileRef, handleClickProfile);
  return (
    <div style={{ position: 'relative' }}>
      <Button
        title='About me'
        onClick={handleClickProfile}
        active={showProfileModal}>
        <VscAccount />
      </Button>
      <Button
        title='change Theme'
        onClick={handleClickColor}
        active={showColorModal}>
        <VscGear />
      </Button>
      {showProfileModal && (
        <ProfileModal ref={profileRef}>
          <Text>Download CV</Text>
          <Separator />
          <Text
            as='a'
            href='CV.pdf'
            download
            style={{ textDecoration: 'none', color: 'inherit' }}>
            Click to Download <VscCloudDownload size={16} />
          </Text>
        </ProfileModal>
      )}
      {showColorModal && (
        <ColorThemeModal ref={colorRef}>
          <Text>Select color theme</Text>
          <Separator />
          {colorThemes.map(theme => {
            const themeName = theme.split(/(?=[A-Z])/);
            themeName[0] =
              themeName[0][0].toUpperCase() + themeName[0].slice(1);
            return (
              <Text key={theme} onClick={() => changeTheme(theme)}>
                {themeName.join(' ')}
                {colorTheme && colorTheme === theme && <VscCheck size={16} />}
              </Text>
            );
          })}
        </ColorThemeModal>
      )}
    </div>
  );
}
