import React from 'react'
import useSession from '../hooks/useSession'
import MainLayout from '../components/layouts/MainLayout'
import MainContent from '../components/homePage/MainContent'
const HomePage = () => {
  
    const loggedUser = useSession()
    console.log(loggedUser); 

    return (
    <> 
      <MainLayout>
        <div>Sono la HomePage</div>
        <MainContent/>
      </MainLayout>
    </>
  )
}

export default HomePage;