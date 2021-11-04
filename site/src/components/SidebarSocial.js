import React from 'react';
import { FaDribbble, FaCodepen, FaFigma, FaLinkedinIn } from 'react-icons/fa';
import { VscGithubAlt } from 'react-icons/vsc';

import { StyleButton, StyledLink } from '.';
import { socials } from '../socialsData';

export default function SidebarSocial() {
  return (
    <div>
      {socials.map(platform => {
        const iconName = {
          Figma: FaFigma,
          Linkedin: FaLinkedinIn,
          Dribbble: FaDribbble,
          Codepen: FaCodepen,
          Github: VscGithubAlt,
        };
        const Icon = iconName[platform.name];
        return (
          <StyleButton
            key={platform.name}
            as={StyledLink}
            href={platform.url}
            title={platform.name}>
            <Icon />
          </StyleButton>
        );
      })}
    </div>
  );
}
