import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const Home = () => {
    const data = useContext(UserContext);
    console.log(data.user);
  return (
    <div>
      Home
    </div>
  )
}

export default Home
