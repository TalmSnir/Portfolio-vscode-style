import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header1, Paragraph, ProjectTab } from '.';
import { Context } from '../context/DataContext';
import { ReactComponent as ProjectFilesImg } from '../assets/projectFiles.svg';
import { Readme } from '.';
const Container = styled.div``;
const InnerContainer = styled.div`
  padding: ${({ theme }) => `${theme.spacingMd} ${theme.spacingXs}  `};
  @media screen and (min-width: ${({ theme }) => theme.bpSm}) {
    padding: ${({ theme }) => `${theme.spacingMd} ${theme.spacingSm}  `};
  }
  @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    padding: ${({ theme }) => `${theme.spacingMd} ${theme.spacingMd}  `};
  }
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacingSm};
`;
const NoProjectContainer = styled(InnerContainer)`
  gap: ${({ theme }) => theme.spacingMd};
  padding-block-start: ${({ theme }) => theme.spacingSm};
  text-transform: capitalize;
  align-items: center;
`;
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacingSm};
  a {
    --color: ${({ theme }) => theme.clrAccentBlue};

    display: block;
    position: relative;
    color: var(--color);
    font-size: ${({ theme }) => theme.fsBodyB1};
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 0.05em;
    text-decoration: none;
    transition: color 0.1s ease;

    &:hover,
    &:focus-visible {
      --color: ${({ theme }) => theme.clrText01};
      outline: 0;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background: var(--color);
      transition: background-color 0.1s ease;
    }
  }
  a:first-child {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: ${({ theme }) => `calc(${theme.spacingSm}/-2)`};
      width: 0.5px;
      height: 100%;
      background-color: ${({ theme }) => theme.clrText01};
    }
  }
`;

export default function Project() {
  const { data, project } = useContext(Context);
  const [projectData, setProjectData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (project != null) {
      if (project.name !== 'README.md') {
        const { homepage, html_url, description } = data[project.id];
        setProjectData({
          name: project['name'].replaceAll('-', ' '),
          repo: html_url,
          site: homepage,
          description: description,
        });
      } else {
        setProjectData({
          name: project['name'],
        });
      }
      setShow(true);
    } else setProjectData(null);
  }, [data, project]);

  return (
    <>
      {!show && (
        <NoProjectContainer>
          <Header1>
            click the files icon on the left and select a project from the list
          </Header1>
          <div
            style={{
              height: '60vh',
              width: '80%',
            }}>
            <ProjectFilesImg style={{ maxHeight: '100%', maxWidth: '100%' }} />
          </div>
        </NoProjectContainer>
      )}

      {project != null && show && (
        <Container>
          <ProjectTab setShow={setShow} text={projectData.name} />
          <InnerContainer>
            {projectData.name === 'README.md' ? (
              <Readme />
            ) : (
              <>
                <Header1>{projectData.name}</Header1>
                <Paragraph>{projectData.description}</Paragraph>
                <LinksContainer>
                  <a href={projectData.site} target='_blank' rel='noreferrer'>
                    live site
                  </a>
                  <a href={projectData.repo} target='_blank' rel='noreferrer'>
                    github repo
                  </a>
                </LinksContainer>
              </>
            )}
          </InnerContainer>
        </Container>
      )}
    </>
  );
}
