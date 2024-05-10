import React from 'react'
import useSession from '../hooks/useSession'
import MainLayout from '../components/layouts/MainLayout'


const HomePage = () => {
  
    const loggedUser = useSession()
 

    return (
    <> 
      <MainLayout>
        <div>Sono la HomePage</div>
      </MainLayout>
    </>
  )
}

export default HomePage;