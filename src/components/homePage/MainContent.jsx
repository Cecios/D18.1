import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import LoadingSpinner from '../loading/LoadingSpinner'
import ErrorAlert from '../loading/ErrorAlert'



const MainContent = () => {

    const session = JSON.parse(localStorage.getItem("auth"))
    console.log(session);

    const [error, setError] = useState('')
    const [items, setItems] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    console.log(items);

    const getItems = async () => {
        setIsLoading(true)
        try{
            const response = await fetch('http://localhost:3030/users',{
                method:"GET",
                headers: {
                    "Content-type": 'application/json',
                    "authorization": session
                }
            })
            const data = await response.json()
            setItems(data)
        }catch(e){
            setError(e.message)
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        getItems()
    },[])

    return (
    <>
        <Container>
            <Row>
                {isLoading && <LoadingSpinner/>}
                {!isLoading && error && (
                    <ErrorAlert
                        message = "Ops! Qualcosa è andato storto durante il caricamento dei dati"
                    />
                )}
            </Row>
        </Container>
    </>
  )
}

export default MainContent