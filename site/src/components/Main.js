import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Project } from '.';
import { Context } from '../context/DataContext';

const MainContainer = styled.main`
  block-size: 100%;
  inline-size: 100%;
  background: ${({ theme }) => theme.clrBase19};
  grid-row: 2;
  grid-column: 2;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;

  scrollbar-color: ${({ theme }) => ` ${theme.clrBase17} transparent `};
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-left: ${({ theme }) => `0.5px solid ${theme.clrBase17}`};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.clrBase17};
  }
  color: ${({ theme }) => theme.clrBase01}; ;
`;

export default function Main({ children }) {
  const { data, project } = useContext(Context);
  const [projectData, setProjectData] = useState(null);
  const [showProject, setShowProject] = useState(true);

  useEffect(() => {
    if (project) {
      const { name, homepage, html_url, description } = data[project];
      setProjectData({
        name: name.replaceAll('-', ' '),
        repo: html_url,
        site: homepage,
        description: description,
      });
      setShowProject(true);
    }
  }, [project, data]);

  return (
    <MainContainer>
      {projectData && showProject && (
        <Project projectData={projectData} setShow={setShowProject} />
      )}
      {children}
    </MainContainer>
  );
}
// `https://raw.githubusercontent.com/TalmSnir/${name}/main/README.md`
// {showSection && showSection==='designs'}
