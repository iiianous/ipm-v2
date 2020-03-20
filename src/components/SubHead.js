import styled from 'styled-components'

const SubHead = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 2.7rem;
  text-align: right;
  font-weight: 900;
  z-index: 1;
  line-height: .95;
  align-self: center;
  letter-spacing: -0.01em;
  border-bottom: 10px solid #f3dc1d;
  padding-bottom: 6px;

  @media screen and ( min-width: 600px ) {
    border-bottom: 12px solid #f3dc1d;
    padding-bottom: 8px;
  }

  @media screen and ( min-width: 768px ) {
    font-size: 5rem;
  }
`;

export default SubHead
