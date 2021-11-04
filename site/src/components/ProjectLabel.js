import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { VscGist, VscCircleFilled } from 'react-icons/vsc';
import { Context } from '../context/DataContext';
const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: ${({ theme }) =>
    `${theme.spacingXxs}  ${theme.spacingXxs}  ${theme.spacingXxs} calc(${theme.spacingSm} + 0.5rem)`};

  &:hover {
    background-color: ${({ theme }) => theme.clrBase17};
  }
`;

export default function ProjectLabel({ name, id }) {
  const [isActive, setIsActive] = useState(false);
  const { setProject, project } = useContext(Context);
  const handleClick = () => {
    setProject(id);
  };
  useEffect(() => {
    if (project) {
      project !== id ? setIsActive(false) : setIsActive(true);
    }
  }, [project, id, setIsActive]);
  return (
    <Label id={id} onClick={handleClick}>
      <div
        style={{
          display: 'flex',
          gap: '0.2rem',
          alignItems: 'center',
          width: '90%',
        }}>
        <VscGist />
        <span
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
          {name.replaceAll('-', ' ')}
        </span>
      </div>
      {isActive && (
        <VscCircleFilled
          style={{
            flexShrink: 0,
            width: '12px',
            height: '12px',
            color: 'rgba(115, 201, 145, 1)',
          }}
        />
      )}
    </Label>
  );
}
