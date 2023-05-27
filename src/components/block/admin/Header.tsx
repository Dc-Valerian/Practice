import { Link } from "react-router-dom"
import styled from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
import DarkMode from "../../../Global/DarkMode"

const Header = () => {
    return (
        <Container>
            <Main>
                <Nav>
                    <Name to="/">
                        Home
                    </Name>
                    <Name to="/about">
                        About
                    </Name>
                    <Name to="/contact">
                        Contact
                    </Name></Nav>
                <SearchHold>
                    <SearchIcon />
                    <Search placeholder='Search' />
                </SearchHold>
                <Holder>
                    <Not />
                    <Profile></Profile>
                    <div>
                        <Big>Valerian Pedro</Big>
                        <Small>Admin</Small>
                    </div>
                    <DarkMode/>
                </Holder>
            </Main>
        </Container>
    )
}

export default Header

const Name = styled(Link)`
margin: 0 10px;
text-decoration: none;
color: white 
`

const Nav = styled.div`
display: flex;
font-weight: 900;
`
const Main = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Profile = styled.div`
height: 45px;
width: 45px;
border-radius: 50%;
margin:0 15px;
background-color: white;
`;

const Not = styled(IoIosNotifications)`
font-size: 30px;
`;

const Big = styled.div`
font-size: 18px;
`;

const Small = styled.div`
font-size: 12px;
`;

const Holder = styled.div`
display: flex;
align-items: center;
`;


const Search = styled.input`
color: white;
border-radius: 10px;
padding: 10px 15px;
outline: none;
border: none;
margin-left: 10px;

`;

const SearchIcon = styled(AiOutlineSearch)`
font-size: 30px;
color: white;
`;

const SearchHold = styled.div`
align-items: center;

height: 40px;
background-color: transparent;
display: flex;

`;

const Container = styled.div`
height: 80px;
width: 100%;
background-color: #0a4887;
display: flex;
justify-content: center;
align-items: center;
/* color: black */
color: white
`



