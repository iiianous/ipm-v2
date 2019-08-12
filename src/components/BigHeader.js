import styled from 'styled-components'

const BigHeader = styled('h1')`
  font-family: 'Lato', sans-serif;
  font-size: 4rem;
  text-align: right;
  font-weight: 800;
  z-index: 1;
  line-height: .75;
  align-self: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  top: -1px;
  position: relative;

  @media only screen and ( min-width: 600px) {
    font-size: 5.2rem;
  }

  @media only screen and ( min-width: 768px) {
    font-size: 6.8rem;
  }

  span {
    position: relative;
    display: inline-block;
    width: 100%
  }
`;

export default BigHeader
