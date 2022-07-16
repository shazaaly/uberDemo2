import Head from 'next/head'
import { Profiler, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged , signOut} from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {

  const [user, setUser] =useState(null)
  const router = useRouter()
  useEffect( ()=>{
    onAuthStateChanged(auth, user=>{
      if (user) {
        console.log(user);
        setUser({

          name: user.displayName,
          photoUrl: user.photoURL
        })
        
      }else{
        setUser(null)
        router.push('/login')
        
      }
    })


  },[])

  return (
    <Wrapper>
      <Map />

      <ActionItems>
        { /* Header start*/}

        <Header>
          <UberLogo src="https://i.ibb.co/r2tpG0F/uber-PNG24.png" alt="uber-PNG24" />

          <Profile>

            <Name>{user && user.name}</Name>


            <UserImage src={user && user.photoUrl} onClick={ ()=>signOut(auth) }
              

            />

          </Profile>

        </Header>



        { /* ActionButtons start , contains 3 ActionButton */}

        <ActionButtons>
        
          <Link href="/search">

            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride

            </ActionButton>
          </Link>







          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />

            Wheels

          </ActionButton>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />

            Reserve

          </ActionButton>




        </ActionButtons>

        { /* InputButton : where-to */}

        <InputButton>
          Where to?
        </InputButton>



      </ActionItems>

    </Wrapper >
  )
}

const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`

const UberLogo = tw.img`
 h-28

`

const Profile = tw.div`
  flex items-center

`

const Name = tw.div`
mr-4 w-25 text-sm

`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px 


`
const ActionButtons = tw.div`
flex 

`

const ActionButton = tw.div`
flex flex-col items-center justify-center	 bg-gray-200
 flex-1 m-2 h-32 rounded-lg transform hover:scale-105 transition text-xl



`

const ActionButtonImage = tw.img`
h-3/5

`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8

`