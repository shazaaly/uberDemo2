import React from 'react'
import { useState, useEffect } from 'react'
import tw from "tailwind-styled-components"
// import { carList } from '../data/carList'
 const carList = [
    {
      imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
      service: 'UberX',
      multiplier: 1,
    },
    {
  
      imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
      service: 'UberXL',
      multiplier: 1.5,
    },
    {
  
      imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
      service: 'Black',
      multiplier: 2,
    },
    {
  
      imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
      service: 'Comfort',
      multiplier: 1.2,
    },
    {
  
      imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
      service: 'Black SUV',
      multiplier: 2.8,
    }
  ]
  

const RideSelector = ({ pickupCoordinate, dropoffCoordinates }) => {
    const [rideDuration, setRideDuration] = useState(0)
    useEffect(() => {

        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinate[0]},${pickupCoordinate[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}
       ?access_token=pk.eyJ1Ijoic2hhemFhbHkiLCJhIjoiY2w1aGZoOGRwMDhoaTNkdGVrbTd1NHc0OCJ9.96UDG49EaqVkC5a1Vo_Syg`

        )
            .then(responese => responese.json())
            .then(data => {
                if (data.routes && data.routes[0]) {
                setRideDuration(data.routes[0].duration /100)
                }
            })


    }, [pickupCoordinate, dropoffCoordinates])

    // console.log(rideDuration);

    return (
        <Wrapper>
            <Title>
                Choose a ride, or Swipe up for more

            </Title>

            <CarList>

                {carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time> 5 min away</Time>

                        </CarDetails>

                        <Price>  ${(rideDuration * car.multiplier).toFixed(2)}</Price>


                    </Car>


                ))}


            </CarList>


        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col

`

const Title = tw.div`
text-gray-500 text-center text-xs  py-2 border-b


`
const CarList = tw.div`



`

const Car = tw.div`
p-4 flex items-center 
`
const CarImage = tw.img`
 h-14 mr-2
`
const CarDetails = tw.div`
text-xs flex-1
`

const Price = tw.div`
text-sm font-medium	

`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`