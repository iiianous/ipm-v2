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
      <SubHead>
        about
      </SubHead>
      <Text>
        I'm Ian Mostar, from Cebu, Philippines. I have been working in web development for 5 years. The first 2 years, I mostly work as a web & mobile UI designer until I've transitioned more into a front-end developer role creating websites for small businesses using custom Wordpress CMS.
        <br />
        <br />
        I mainly work with a team, developing admin, dashboard type pages and various type of applications. Most of the time developing user interfaces, integrating RESTful APIs and new features making sure it is adaptive to modern devices, browsers and in-line with current web stardards.
        <br />
        <br />
        At the moment, I'm developing frontend experiences using Vue.js, Vuex, React.js, Redux, Javascript, TailwindCSS, CSS3/SCSS/HTML5.
        <br />
        <br />
        You'll find me on <a href="//twitter.com/iiianous" target="_blank">Twitter</a>, dabbling latest and hot-picking design and web development posts around.
      </Text>
    </Container>
  )}

export default SectionAbout