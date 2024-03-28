import React from 'react'
import useSession from '../hooks/useSession'
const HomePage = () => {
  
    const loggedUser = useSession()
    console.log(loggedUser); 

    return (
    <>
        <div>Sono la HomePage</div>
    </>
  )
}

export default HomePage;