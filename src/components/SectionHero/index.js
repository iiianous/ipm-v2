import React from 'react'
import styled, { css } from 'styled-components'

import { ReactComponent as IconTwitter } from 'assets/images/twitter.svg'
import { ReactComponent as IconLinkedIn } from 'assets/images/linkedin.svg'
import { ReactComponent as IconEmail } from 'assets/images/email.svg'
import { ReactComponent as IconArrowDown } from 'assets/images/arrow_down.svg'
import { ReactComponent as IconDark } from 'assets/images/dark.svg'
import BigHeader from '../BigHeader'

const Container = styled('div')`
  display: flex;
  height: 100vh;
  text-align: right;
  justify-content: center;
  flex-direction: column;
`

const UpperDiv = styled('div')`
  width: 100%;
  position: absolute;
  height: 50%;
  background-color: var(--highlight-color);
  bottom: 0;

  ${ props => props.primary && css`
    background: #f3dc1d;
    color: black;
  `}
`;

const GoDown = styled('div')`
  width: 30px;
  height: 30px;
  border: 5px solid var(--font-color);
  padding: 8px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  border-radius: 100%;
  cursor: pointer;
  fill: var(--font-color);

  svg {
    position: relative;
    top: 2px;

  }
`

const ThemeSwitchWrapper = styled('div')`
  position: absolute;
  top: 32px;
  right: 18px;
  cursor: pointer;
`

const IconWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  flex-direction: row;
  z-index: 3;
  margin-bottom: 4rem;

  position: absolute;
  width: 100%;
  top: 30px;

  @media (min-width: 768px) {
    position: absolute;
    flex-direction: column;
    margin-bottom: 0;
    top: auto;
    left: 20px;
    width: auto;
  }
`

const IconBox = styled('div')`
  width: 25px;
  height: 25px;
  padding: 12px;
  background: transparent;
  border-radius: 100%;
  border: 4px solid var(--font-color);
  margin: 0 15px;
  cursor: pointer;
  position: relative;
  fill: var(--font-color);

  @media (min-width: 768px) {
    margin: 9px 0;
    left: 20px;
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    &:hover {
      background: orange;
    }
  }
`

const SectionHero = props => {
  let { calculate } = props

  function onScrollTo() {
    const about = document.querySelector('.section-about')

    window.scroll({
      top: about.offsetHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  function toggleDarkTheme() {
    const html = document.documentElement.getAttribute('data-theme');
    html ? document.documentElement.removeAttribute('data-theme') : document.documentElement.setAttribute('data-theme', 'dark');
  }

  return (
    <Container className="section-about">
      <IconWrapper>
        <a href="//twitter.com/iiianous" target="_blank" alt="Twitter" rel="noopener noreferrer">
          <IconBox>
            <IconTwitter />
          </IconBox>
        </a>
        <a href="mailto:ianmostar@gmail.com?subject = Hello" alt="Email" rel="noopener noreferrer">
          <IconBox>
            <IconEmail />
          </IconBox>
        </a>
        <a href="//www.linkedin.com/in/ianmostar" target="_blank" alt="LinkedIn" rel="noopener noreferrer">
          <IconBox>
              <IconLinkedIn />
          </IconBox>
        </a>
      </IconWrapper>
      <UpperDiv/>
      <BigHeader>
        <span style={{'transform': `translate3d( -${calculate},0,0)` }}>Ian</span><br />
        <span style={{'transform': `translate3d( ${calculate},0,0)` }}>Mostar</span><br />
        <span style={{'transform': `translate3d( -${calculate},0,0)` }}>Front-end</span><br />
        <span style={{'transform': `translate3d( ${calculate},0,0)` }}>Developer</span>
        </BigHeader>
        <GoDown onClick={onScrollTo}>
          <IconArrowDown/>
        </GoDown>
        <ThemeSwitchWrapper onClick={toggleDarkTheme}>
          <IconDark width="50"/>
        </ThemeSwitchWrapper>
    </Container>
  )
}

export default SectionHero