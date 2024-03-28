import React from 'react'
import { Container } from 'react-bootstrap'

const ErrorAlert = (message) => {
  return (
    <>
        <Container
            className='text-danger'
        >
            {message}
        </Container>
    </>
  )
}

export default ErrorAlert