import React from 'react'
import styled from 'styled-components'
import SocialButton from '../../components/static/SocialButton'
import { FcGoogle } from "react-icons/fc"
import { AiOutlineTwitter } from "react-icons/ai"
const SignUp = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Card>
                        Sign up
                        <CardTop>
                            <SocialButton
                                title="Google"
                                icon={<FcGoogle />}
                            />
                            <SocialButton
                                title="Twitter"
                                c="#52A6E7"
                                icon={<AiOutlineTwitter />}
                            />
                        </CardTop>

                        <br />
                        <CardTop>
                            <Line />
                            <Text>Or continue with email</Text>
                            <Line />
                        </CardTop>
                    </Card>
                </Main>
            </Container>
        </div>
    )
}

export default SignUp

const Text = styled.div``
const Line = styled.div``
const CardTop = styled.div`
display:flex;
`
const Card = styled.div``
const Main = styled.div``
const Container = styled.div`
background-color: white;
width: 350px;
min-height: 100px;
padding: 20px 0;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
display: flex;
justify-content: center;
align-items: center;
`