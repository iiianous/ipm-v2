import React from 'react'
import styled from 'styled-components'

import SubHead from './SubHead'
import Text from './Text'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 6%;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--primary-color);

  p {
    color: var(--font-color);
  }

  h1 {
    color: var(--font-color);
  }

  @media screen and ( min-width: 600px ) {
    padding: 0 15%;
  }

  @media screen and ( min-width: 768px ) {
    padding: 0 20%;
  }
`

const SectionAbout = () => {
  return (
    <Container>
      <SubHead>about</SubHead>
      <Text>
        I'm Ian Mostar, based in Cebu, Philippines. I have been working in web development for 5 years. The first 2 years, I mostly work as a web & mobile UI designer. I've transitioned more into a front-end developer creating small business websites using custom Wordpress CMS.
        <br />
        <br />
        I work with a team developing various types of web applications such as HR management, credential certificates and betting platforms.{/*<a href={pdf_src} target="_blank">[resume]</a>*/}
        <br />
        <br />
        I create frontend experiences using Vue.js/Vuex, React.js/Redux, Javascript, TailwindCSS, CSS3/SCSS/HTML5.
        <br />
        <br />
        You'll find me on <a href="//twitter.com/iiianous" target="_blank" rel="noopener noreferrer">Twitter</a>, hot-picking design and web development posts around.
      </Text>
    </Container>
  );
}

export default SectionAbout;