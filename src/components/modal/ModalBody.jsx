import { useState, useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import ModalForm from './ModalForm';
import ModalComment from './ModalComment';
import { fetchDefault } from '../../data/fetchDefault';

function ModalBody(book) {

    const [getBook, setGetBook] = useState(book.book)
    const [comment, setComment] = useState([])

    const urlComment = `https://striveschool-api.herokuapp.com/api/books/${getBook.asin}/comments/`
    const key = 'WBCin4nNXSKsreaoccxmci9ZP7PG2l71tn6V4TvZPuIKMfogJHBossuc'
    console.log(comment);


    const getComment = async () =>{
        const data = await fetchDefault(key,urlComment,'GET')
        setComment(data);
    }
    useEffect(()=>{
        //tutto quello che c'è qui verrà eseguito solo quando il componente viene montato e ogni volta che 
        // vi è un cambio di stato inserito nell'array delle dipendenze
        getComment();
        return ()=> {
            //quello che scrivo qui sarà eseguito all'unmount del componente
        }
      }, [])
    return (
        <>
            <Container
                className='m-0' 
            >
                <Row >
                    <Col className='w-25 flex-column'>
                        <ul>
                            <ModalComment
                                comments = {comment}
                            />
                        </ul>
                    </Col>
                    <Col className='w-75 gap-3'>
                        <ModalForm
                            book = {getBook}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ModalBody;