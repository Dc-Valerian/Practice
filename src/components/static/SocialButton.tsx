
import styled from 'styled-components'
import { iSocial } from '../../utils/interfaces'

const SocialButton: React.FC<iSocial> = ({ title, icon, c }) => {
    return (
        <div>
            <Container>
                <Main>
                    <Icon c={`${c}`}>
                        {icon}
                    </Icon>
                    <span>{title}</span>
                </Main>
            </Container>
        </div>
    )
}

export default SocialButton

const Icon = styled.div<{ c: string }>`
margin-top: 4px;
margin-right: 7px;
color: ${({ c }) => c};
`

const Main = styled.div`
opacity: 0.8;
display:flex;
align-items: center;
`

const Container = styled.div`
border: 1px solid silver;
border-radius: 30px;
padding: 5px 23px;
font-size: 13px;
transition: all 350ms;
font-weight: bold;
margin: 0 5px;
:hover{
    cursor: pointer;
    background-color:#F8F9FA ;
}

`