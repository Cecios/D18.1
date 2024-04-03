import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Login from './Login'
import RegisterForm from './RegisterForm'
const MainLogin = () => {

    const [showSignupForm, setShowSignupForm] = useState(false)
    const toggleForm = () => {
        setShowSignupForm(!showSignupForm)
    }

  return (
    <>
        <Container>
            <Row>
                <Col>
                <h2
                    className='text-bold text-center mt-5'>
                    Epibooks login
                </h2>
                    <Card>
                        {showSignupForm ? <RegisterForm toggleForm={toggleForm}/> : <Login toggleForm={toggleForm}/> }
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default MainLogin;