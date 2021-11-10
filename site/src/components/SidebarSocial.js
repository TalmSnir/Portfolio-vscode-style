import React from 'react';
import { FaDribbble, FaCodepen, FaFigma, FaLinkedinIn } from 'react-icons/fa';
import { VscGithubAlt } from 'react-icons/vsc';

import { Tooltip, LinkWithTooltip } from '.';
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
          <LinkWithTooltip
            as='a'
            key={platform.name}
            href={platform.url}
            target='_blank'
            rel='noreferrer'>
            <Icon />
            <Tooltip className='tooltip'>{platform.name}</Tooltip>
          </LinkWithTooltip>
        );
      })}
    </div>
  );
}
