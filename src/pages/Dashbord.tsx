import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const data: any = [
    { name: "Jan", value1: 60, value2: 80 },
    { name: "Feb", value1: 30, value2: 10 },
    { name: "Mar", value1: 50, value2: 30 },
    { name: "Apr", value1: 90, value2: 70 },
    { name: "Jan", value1: 60, value2: 80 },
    { name: "Feb", value1: 30, value2: 10 },
    { name: "Mar", value1: 50, value2: 30 },
    { name: "Apr", value1: 90, value2: 70 },
]



const Dashbord = () => {

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(res => {
                const { latitude, longitude } = res.coords
                setLat(latitude)
                setLong(longitude)
            }, (error) => { throw error })
        }

    }, [])


    console.log("viewing lat: ", lat)
    console.log("viewing long: ", long)
    const position: number[] = [lat, long]
    return (
        <div>
            <Container>
                <NumbHold>
                    <Numb>1</Numb>
                    <Line />

                </NumbHold>
                {
                    data.map((props: any) => (
                        <BarHolder><Div >
                            <Chart>
                                <Bar bg='darkorange' w={`${(props.value2 / 100) * 100}%`} />
                            </Chart>

                            <Chart>
                                <Bar bg="purple" w={`${(props.value1 / 100) * 100}%`} />
                            </Chart>
                        </Div>

                            <Title>{props?.name}</Title>
                        </BarHolder>

                    ))
                }

            </Container>

            <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, long]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Dashbord

const Line = styled.div`
width: 600px;
height: 1px;
background-color: gray;
position: absolute;
left:8px;
`

const Numb = styled.div`
font-size: 10px;
font-weight: 900;
`

const NumbHold = styled.div`
display: flex;
position: absolute;
bottom: 70px;
left:65px;
align-items: center;
background-color: red;
width: 100%;
`


const Div = styled.div`
display:flex;
height: 100%;

`
const Bar = styled.div<{
    bg: string;
    w: string;
}>`
background-color: ${({ bg }) => bg};
height: ${({ w }) => w};
width: 5px;
border-radius: 5px 5px 0px 0px;
position: absolute;
bottom: -25px;
right:0;
`;

const Chart = styled.div`
background-color: #aeaeae;
height: 90%;
width: 5px;
border-radius: 10px 10px 0px 0px;
position: relative;
margin: 0 2px
`

const ChartHold = styled.div`
display:flex; 
 background: red;
position: relative;
z-index: 10; 
`

const Title = styled.div`
font-size: 10px;
font-weight: bold;
`

const BarHolder = styled.div`
display: flex;
flex-direction: column;
justify-content:flex-end;
height: 100%;
margin: 0 5px;
`

const Container = styled.div`
width: 600px;
height: 300px;
background-color: silver;
border-radius: 5px;
margin: 50px 30px;
padding: 10px;
display: flex;
overflow: hidden;
`