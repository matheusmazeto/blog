import React from 'react';

import { Container } from './styled';

import { theme } from '../../utils/theme';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function SocialMediaIcons({ size = 30, darkMode }) {
  return (
    <Container>
      <li>
        <a target="_blank" href="https://github.com/matheusmazeto">
          <FaGithub
            size={size}
            color={darkMode ? theme.dark.text : theme.light.text}
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/matheus-mazeto-94076680/"
        >
          <FaLinkedinIn
            size={size}
            color={darkMode ? theme.dark.text : theme.light.text}
          />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/mazeto">
          <FaTwitter
            size={size}
            color={darkMode ? theme.dark.text : theme.light.text}
          />
        </a>
      </li>
    </Container>
  );
}

export default SocialMediaIcons;
