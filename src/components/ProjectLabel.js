import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { VscGist, VscCircleFilled, VscInfo } from 'react-icons/vsc';
import { Context } from '../context/DataContext';
import { NavLink } from 'react-router-dom';
import { FlexContainer } from '.';

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.clrText02};
  text-decoration: none;
  cursor: pointer;
  padding: ${({ theme }) =>
    `${theme.spacingXxs}  ${theme.spacingXxs}  ${theme.spacingXxs} calc(${theme.spacingSm} + 0.5rem)`};

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.clrBgPanelHover};
  }

  .icon {
    &--info {
      fill: ${({ theme }) => theme.clrAccentBlue};
    }
    &--file {
      fill: ${({ theme }) => theme.clrAccentYellow};
    }
    &--circle {
      fill: ${({ theme }) => theme.clrAccentGreen};
    }
  }
`;

export default function ProjectLabel({ name, id, type = null }) {
  const [isActive, setIsActive] = useState(false);
  const { setProject, project } = useContext(Context);
  const handleClick = () => {
    setProject({ name, id });
  };
  useEffect(() => {
    if (project != null) {
      project.id !== id ? setIsActive(false) : setIsActive(true);
    }
  }, [project, id, setIsActive]);
  return (
    <Label
      as={NavLink}
      to={`/projects/${id}/${name}`}
      id={id}
      className={isActive ? 'active' : ''}
      onClick={handleClick}>
      <FlexContainer gap='0.2rem' inlineSize='80%'>
        {type === 'md' ? (
          <VscInfo className='icon--info' />
        ) : (
          <VscGist className='icon--file' />
        )}
        <span
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            inlineSize: '90%',
          }}>
          {name.replaceAll('-', ' ').replaceAll('_', ' ')}
        </span>
      </FlexContainer>
      {isActive && (
        <VscCircleFilled
          className='icon--circle'
          style={{
            flexShrink: 0,
            width: '12px',
            height: '12px',
          }}
        />
      )}
    </Label>
  );
}
