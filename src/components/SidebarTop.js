import React, { useState } from 'react';
import { VscFiles, VscPaintcan, VscPreview } from 'react-icons/vsc';
import { Tooltip, LinkWithTooltip } from '.';
import { useNavigate, useLocation } from 'react-router';

export default function SidebarTop({ setShowPanel, showPanel }) {
  const [isActive, setIsActive] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  const handleClick = e => {
    setIsActive(e.currentTarget.name);
    if (e.currentTarget.name === 'projects') {
      if (!location.pathname.includes('/projects')) navigate('/projects');
      setShowPanel(prev => !prev);
    } else {
      setShowPanel(false);
    }
  };
  return (
    <nav>
      <ul>
        <li>
          <LinkWithTooltip
            as='button'
            name='projects'
            onClick={handleClick}
            className={isActive === 'projects' ? ' active' : ''}>
            <VscFiles />
            <Tooltip className='tooltip'>projects</Tooltip>
          </LinkWithTooltip>
        </li>
        <li>
          <LinkWithTooltip
            to='/designs'
            name='designs'
            onClick={handleClick}
            className={({ isActive }) => (isActive ? ' active' : '')}>
            <VscPaintcan />
            <Tooltip className='tooltip'>designs</Tooltip>
          </LinkWithTooltip>
        </li>
        <li>
          <LinkWithTooltip
            name='home'
            to='/'
            onClick={handleClick}
            className={({ isActive }) => (isActive ? ' active' : '')}>
            <VscPreview />
            <Tooltip className='tooltip'>home</Tooltip>
          </LinkWithTooltip>
        </li>
      </ul>
    </nav>
  );
}
