import React from 'react'
import styled from 'styled-components'
import { iButton } from '../../utils/interfaces'

const Button: React.FC<iButton> = ({ onClick, c, bg, title }) => {
    return (
        <div>
            <Container
                onClick={onClick}
            >
                <Main
                    c={`${c}`}
                    bg={`${bg}`}
                >
                    {title}
                </Main>
            </Container>
        </div>
    )
}

export default Button

const Main = styled.div<{
    bg: string;
    c: string
}>`
color: ${({ c }) => c};
background-color: ${({ bg }) => bg};
padding: 9px 30px;
border-radius:3px;
transition: all 350ms;
text-transform: uppercase;
font-weight: 700;
font-size: 12px;

:hover{
    cursor: pointer;
    transform: translate(0, -3px);
}
`

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
`