import React, { useContext } from 'react'
import Feed from '../components/Feed/Feed'
import { UserLogedIn } from '../App'
import LogedInFeed from '../components/Feed/LogedInFeed'

const Home = () => {
  const {logedIn} = useContext(UserLogedIn);
  return (
    <>
    {logedIn? <LogedInFeed/>:
    <div className='home-container'>
    <Feed/>
  </div>
    }
    </>
    
  )
}

export default Home
