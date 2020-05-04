import styled from 'styled-components'

const Text = styled('p')`
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    line-height: 1.5;
    margin: 0;

    @media screen and ( min-width: 600px ) {
        font-size: 21px;
    }

    @media screen and ( min-width: 768px ) {
        font-size: 24px;
    }
`

export default Text;