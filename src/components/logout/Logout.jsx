import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navigate = useNavigate();
    const handleOnclick = (ev) => {
        ev.preventDefault();
        localStorage.removeItem("auth")
        navigate('/',{
            replace: true   //cancello la history
        })
    }

  return (
    <>
        <Button
            onClick={handleOnclick}
            variant='Secondary'
        >
            Logout
        </Button>
    </>
  )
}

export default Logout