import Container  from "react-bootstrap/Container";
import {Row,Col} from "react-bootstrap";
import { fetchDefault } from "../../data/fetchDefault.js";
import MyCard from "../card/MyCard";
import { generateKey } from "../myUtilities/MyUtilities";
import { useState,useEffect } from "react";
import LoadingSpinner from '../loadingSpinner/LoadingSpinner.jsx'
import InputSearch from "../inputSearch/InputSearch.jsx";
const Main = () =>{

    const urlBooks = 'https://striveschool-api.herokuapp.com/books'
    const key = 'WBCin4nNXSKsreaoccxmci9ZP7PG2l71tn6V4TvZPuIKMfogJHBossuc'

    const [books, setBooks] = useState([])
    const [productError,setProductError] = useState(null)
    const [loading, setLoading] = useState(false)



    const getData = async () => {
        setLoading(true);
        const data = await fetchDefault(key,urlBooks,"GET");
        setBooks(data)
        setLoading(false);

    }
    useEffect(()=>{
        //tutto quello che c'è qui verrà eseguito solo quando il componente viene montato e ogni volta che 
        // vi è un cambio di stato inserito nell'array delle dipendenze
        getData();
        return ()=> {
            //quello che scrivo qui sarà eseguito all'unmount del componente
        }
      }, [])
      
    return(
        <>
        <Container>
            <Row className="justify-content-center">
                
                    {productError && <div>Ops, qualcosa è andato storto..</div>}
                    {loading && !productError &&(
                        <LoadingSpinner/>
                    )}
                    {!loading && !productError && (
                    <>
                        <InputSearch
                            Products = {books}
                        />

                        {books.map((book)=>{
                            return(
                                <>
                                    <Col 
                                        xs={12} md={6} lg={4}
                                        key={generateKey()}    
                                    >
                                        <MyCard
                                            key={generateKey()}
                                            img={book.img}
                                            title={book.title}
                                            category={book.category}
                                            price={book.price}
                                            book = {book}
                                        />
                                    </Col>
                                </>
                            )
                        })}
                   
                    </>
                    )                    }
            </Row>
        </Container>
        </>
    )
}
export default Main;