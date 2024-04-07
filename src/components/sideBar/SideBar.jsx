import React from 'react'
import useSession from '../../hooks/useSession'
import AddBookModal from '../addBookModal/AddBookModal';
import { useState } from 'react';
import { Row } from 'react-bootstrap';

const SideBar = () => {
    const [isAddBookModal,setIsAddBookModal ] = useState(false)
    const session = useSession();
  
    const toggleAddBookModal = () => setIsAddBookModal(!isAddBookModal)
  return (
    <>
        <button 
            onClick={toggleAddBookModal}
            className='btn btn-primary'>
                    Aggiungi libro
        </button>
        <Row>
            {isAddBookModal && (<AddBookModal/>)}
        </Row>
    </>
  )
}

export default SideBar;