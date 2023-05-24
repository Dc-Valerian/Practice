import styled from 'styled-components'
import { iProps } from '../../utils/interfaces'
import { useContext } from 'react'
import { GlobalContext } from '../../Global/GlobalProvider'

const InputProps: React.FC<iProps> = ({
    namePlace,
    name1,
    name,

    email,
    email1,
    emailPlace,

    password,
    password1,
    passwordPlace,

    confirm,
    confirm1,
    confirmPlace,

}) => {
    const {
        actualName,
        setActualName,

        actualEmail,
        setActualEmail,

        actualPassword,
        setActualPassword,

        actualConfirm,
        setActualConfirm,

    } = useContext(GlobalContext)
    return (
        <div>
            <Container>
                <Main>
                    {
                        name ? (<InputHolder>
                            <Text>{name1}</Text>
                            <InputData>
                                <Input
                                    placeholder={`${namePlace}`}
                                    value={actualName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setActualName(e.target.value)
                                    }}
                                />
                            </InputData>
                        </InputHolder>) : null
                    }
                    {
                        email ? (<InputHolder>
                            <Text>{email1}</Text>
                            <InputData>
                                <Input
                                    placeholder={`${emailPlace}`}
                                    value={actualEmail}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setActualEmail(e.target.value)
                                    }}
                                />
                            </InputData>
                        </InputHolder>) : null
                    }
                    {
                        password ? (
                            <InputHolder>
                                <Text>{password1}</Text>
                                <InputData>
                                    <Input
                                        placeholder={`${passwordPlace}`}
                                        value={actualPassword}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setActualPassword(e.target.value)
                                        }}
                                    />
                                </InputData>
                            </InputHolder>
                        ) : null
                    }
                    {
                        confirm ? (
                            <InputHolder>
                                <Text>{confirm1}</Text>
                                <InputData>
                                    <Input
                                        placeholder={`${confirmPlace}`}
                                        value={actualConfirm}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setActualConfirm(e.target.value)
                                        }}
                                    />
                                </InputData>
                            </InputHolder>) : null
                    }




                </Main>
            </Container>
        </div>
    )
}

export default InputProps

const Input = styled.input`
outline: none;
border: 0;
width: 95%;
height: 35px;
margin-left:1px;
padding-left: 10px;

::placeholder{
    color: silver;
    font-size: 12px;
}
`

const InputData = styled.div``

const Text = styled.div`
position: absolute;
top: -7px;
font-size: 12px;
font-weight: 700;
left: 10px;
background-color: white;
padding: 0 3px;
color:  #0a4887;
line-height: 1;
`

const InputHolder = styled.div`
width: 300px;
height: 40px;
border: 1px solid #0a4887;
border-radius:3px;
position: relative;
margin: 8px 0;
`

const Main = styled.div``

const Container = styled.div``