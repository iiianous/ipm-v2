import React from 'react'
import styled from 'styled-components'

import SubHead from '../SubHead'
import Text from '../Text'
import work_1 from 'assets/images/work_1.png'
import work_2 from 'assets/images/work_2.png'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
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
const Figure = styled('figure')`
  text-align: center;
  margin-bottom: 80px;

  img {
    width: 100%;
    margin-bottom: 10px;

    @media screen and ( min-width: 768px ) {
      width: 84%;
    }
  }

  h3 {
    margin: 0 0 6px;
    font-family: 'Lato', sans-serif;
    font-size: 21px;
  }

  @media screen and ( min-width: 768px ) {
    h3 {
      font-size: 24px;
    }
  }

  @media screen and ( min-width: 768px ) {
    h3 {
      font-size: 29px;
    }
  }
`

function SectionWork () {
  return (
    <Container>
      <SubHead>
        works
      </SubHead>
      <Figure>
        <img src={work_1} alt=""/>
        <h3>Psalm23 Basketball Academy</h3>
        <Text>Brochure type website for Basketball enthusiast. </Text>
      </Figure>
      <Figure>
        <img src={work_2} alt=""/>
        <h3>Balance Spa and Wellness</h3>
        <Text>Hypothetical website for a wellness spa.</Text>
      </Figure>
    </Container>
  )
}

export default SectionWork