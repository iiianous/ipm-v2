import React from 'react'
import styled from 'styled-components'

import { ReactComponent as IconGithub } from 'assets/images/github.svg'
import { ReactComponent as IconCodepen } from 'assets/images/codepen.svg'

const Container = styled('div')`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: #f3dc1d;
    line-height: 1.4;
    font-family: 'Lato', sans-serif;
    padding: 7em 0;
    background: var(--highlight-color);

    * {
        margin: 0;
        padding: 0;
    }

    p {
        text-align: center;
        color: var(--font-color);
    }

    h1 {
        color: var(--font-color);
    }

    .lining {
        height: 12px;
        background: var(--highlight-color);
        width: 100%;
        position: absolute;
        bottom: 0;
    }
`
const IconWrapper = styled('div')`
    display: flex;
    flex-flow: row nowrap;
    margin: 0 0 20px;

    .icon-github {
        position: relative;
        top: -3px;
        left: -5px;
    }
`

const IconBox = styled('div')`
  width: 35px;
  height: 35px;
  padding: 8px;
  position: relative;
  margin: 0 10px;
  border: 4px solid var(--font-color);
  border-radius: 100%;
  cursor: pointer;
  fill: var(--font-color);
`

const SectionFooter = () => {
    return (
        <Container>
            <IconWrapper>
                <a href="//github.com/iiianous" target="_blank" rel="noopener noreferrer">
                    <IconBox>
                        <IconGithub className="icon-github"/>
                    </IconBox>
                </a>
                <a href="//codepen.io/iiianous" target="_blank" rel="noopener noreferrer">
                    <IconBox>
                        <IconCodepen />
                    </IconBox>
                </a>
            </IconWrapper>
            <p>Las Islas Filipinas. <br />© 2020</p>
            <div className="lining"></div>
        </Container>
    );
}

export default SectionFooter;