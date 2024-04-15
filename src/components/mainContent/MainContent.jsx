import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LoadingSpinner from '../loading/LoadingSpinner'
import ErrorAlert from '../loading/ErrorAlert'
import SideBar from '../sideBar/SideBar'
import useSession from '../../hooks/useSession'

const MainContent = () => {


    const session = JSON.parse(localStorage.getItem("auth"))

    const sessionActive = useSession()
    const [error, setError] = useState('')
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(3)
    console.log(pageSize);
    const handlePageSize = (ev) => {
        setPageSize(Number(ev.target.value))
    }
    const next = () => {
        setPage(prev => prev+1)
    }
    const prev = () => {
        setPage(prev => prev-1)
    }

    const formatUniqueDate = (date) => {
        const milliseconds = date*1000
        const dateObject = new Date(milliseconds)
        const humanDate = dateObject.toDateString()
        return humanDate
    }

    console.log(formatUniqueDate(sessionActive.exp));

    const getItems = async () => {
        setIsLoading(true)
        try{
            const response = await fetch(`http://localhost:3030/books?page=${page}&pagSize=${pageSize}`,{
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
    },[session,page,pageSize])

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
        <Row>
            <Col>       
                <button onClick={prev}>
                    Precedente
                </button>
                <select onChange={handlePageSize}>
                    <option value={1}>Uno</option>
                    <option value={2}>Due</option>
                    <option value={3}>Tre</option>
                    <option value={4}>Quattro</option>
                </select>
                <button onClick={next}>
                    Successivo
                </button>
            </Col>
            <Col>    
                <SideBar/>
            </Col>
        </Row>
    </>
  )
}

export default MainContent