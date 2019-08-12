import styled from 'styled-components'

const Text = styled('p')`
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    line-height: 1.4;
    margin: 0;

    @media screen and ( min-width: 600px ) {
        font-size: 19px;
    }

    @media screen and ( min-width: 768px ) {
        font-size: 21px;
    }
`

export default Text