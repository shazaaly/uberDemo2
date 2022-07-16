import React from 'react'
import { useState } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Link from 'next/link'

const Search = () => {

    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")



    return (
        <Wrapper>

            {/* Button Container : Back arrow */}

            <ButtonContainer>
                <Link href="/">

                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" >

                    </BackButton>
                </Link>

            </ButtonContainer>

            {/* Inputs Container  */}

            <InputContainer>

                <FromToIcons>
                    <Circle src="https://img.icons8.com/material/24/e8e8e8/100-percents.png" />
                    <Line src="https://img.icons8.com/ios-glyphs/30/e8e8e8/vertical-line.png" />
                    <Square src="https://img.icons8.com/material-sharp/24/1A1A1A/unchecked-checkbox.png" />

                </FromToIcons>

                <InputBoxes>

                    <Input placeholder="Enter Pickup Location"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}

                    />

                    <Input placeholder="Where to?"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}

                    />

                </InputBoxes>

                <PlusIcon src="https://img.icons8.com/ios-filled/50/1A1A1A/plus-math.png" />



            </InputContainer>

            <SavedPlaces>

                <StarIcon src="https://img.icons8.com/material/24/FFFFFF/star--v1.png" />
                Saved Places


            </SavedPlaces>



            {/* Confirm Location */}

            <Link href={{
                pathname: '/confirm', query: {

                    pickup: pickup,
                    dropoff: dropoff
                }
            }}>

                <ConfirmButtonContainer >Confirm Location</ConfirmButtonContainer>
            </Link>




        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200  h-screen 

`
const ButtonContainer = tw.div`
bg-white px-4

`
const BackButton = tw.img`
h-12 cursor-pointer

`

const InputContainer = tw.div`
bg-white flex items-center px-4 py-4
`

const FromToIcons = tw.div`
w-10 flex flex-col items-center mr-2


`

const Circle = tw.img`
h-2.5

`


const Line = tw.img`
h-10

`

const Square = tw.img`
h-3

`
const InputBoxes = tw.div`

 flex flex-col flex-1

`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none

`
const PlusIcon = tw.img`
h-10 w-10 bg-gray-200 rounded-full ml-3

`

const SavedPlaces = tw.div`
bg-white flex items-center mt-2 px-4  py-2

`

const StarIcon = tw.img`
p-2 rounded-full bg-gray-400 w-10 h-10 mr-2
`

const ConfirmLocation = tw.div`
h-50 mt-5 bg-gray-200 text-center

`

const ConfirmButtonContainer = tw.div`
 bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer


`