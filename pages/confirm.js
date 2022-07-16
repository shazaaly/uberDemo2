import React, { useState } from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'
import { useRouter } from 'next/router'
import Link from 'next/link'


const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query
    // console.log("pick up : " + pickup + " drop off: " + dropoff);

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0])

    const getPickupCoordinates = (pickup) => {
        // const userpickup = pickup
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hhemFhbHkiLCJhIjoiY2w1aGZoOGRwMDhoaTNkdGVrbTd1NHc0OCJ9.96UDG49EaqVkC5a1Vo_Syg",
                limit: 1
            }))

            .then(response => response.json())
            .then(data => {
                // console.log(data.features[0].center);
                setPickupCoordinates(data.features[0].center)

            })

    }
    // console.log(pickupCoordinates);

    const getDropoffCoordinates = (dropoff) => {
        // const userdropoff = dropoff
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hhemFhbHkiLCJhIjoiY2w1aGZoOGRwMDhoaTNkdGVrbTd1NHc0OCJ9.96UDG49EaqVkC5a1Vo_Syg",
                limit: 1
            }))

            .then(response => response.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center)

            })

    }

    useEffect(() => {
        getPickupCoordinates(pickup)
        getDropoffCoordinates(dropoff)
    }, [pickup, dropoff])


    return (
        <Wrapper>
            <BackButtonContainer>
                <Link href='/search'>
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                    </Link>
            </BackButtonContainer>


            <Map

                pickupCoordinate={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}

            />

            <RideContainer>
                <RideSelector

                    pickupCoordinate={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />


                <ConfirmButtonContainer>

                    <ConfirmButton>
                        Confirm Uber X


                    </ConfirmButton>

                </ConfirmButtonContainer>

            </RideContainer>


        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
h-screen  flex flex-col 
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`


const ConfirmButtonContainer = tw.div`
border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white text-center  mx-4 my-4  py-4 text-xl cursor-pointer


`

const BackButtonContainer = tw.div`
bg-white bg-white inline-block h-12 w-12   rounded-full absolute top-4 left-4 z-10 cursor-pointer shadow-md
`
const BackButton = tw.img`
h-12 w-12 p-1 object-contain
`