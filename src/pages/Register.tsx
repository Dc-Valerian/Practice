import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Register: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Container>
                <Main>
                    {children}
                </Main>
            </Container>
        </div>
    )
}

export default Register
const Main = styled.div``
const Container = styled.div`
background-image:url("/asset/wave.svg");
height: 85vh;
width:100%;
background-repeat: no-repeat;
background-position: top;
background-size: contain;
margin-top: -1px;
display: flex;
justify-content: center;
align-items: center;
background-color: #F8F9FA;
`