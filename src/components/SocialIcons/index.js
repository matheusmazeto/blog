import React from "react"
import styled from "styled-components"
import {
  GitHubIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../Icons/Icons"

const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const SocialIconWrapper = styled.div`
  padding: 3px;
`

const SocialIcons = () => {
  return (
    <SocialIconsWrapper>
      <SocialIconWrapper>
        <a href="https://github.com/matheusmazeto">
          <GitHubIcon />
        </a>
      </SocialIconWrapper>
      <SocialIconWrapper>
        <a href="https://www.linkedin.com/in/matheusmazeto/">
          <LinkedInIcon />
        </a>
      </SocialIconWrapper>
    </SocialIconsWrapper>
  )
}

export default SocialIcons
