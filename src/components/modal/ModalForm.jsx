import { useState } from "react";
import {Button} from "react-bootstrap";
import  {fetchDefault}  from "../../data/fetchDefault.js";
import styles from '../modal/modalForm.module.css'

const ModalForm = (book)=> {
    const [getBook, setGetBook] = useState(book.book)
    const [formData, setFormData] = useState({
        comment:'',
        rate:null,
        elementId:`${getBook.asin}`,
    })

    const onChangeInput = (ev) => {
        const {name,value} = ev.target
        setFormData({...formData,
                    [name]:value}
            )
    }
    const onClickForm = ()=>{
        console.log(formData);
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYjQzNjMxYTczZjAwMTlkNWM5MDEiLCJpYXQiOjE3MDgzNTM1ODQsImV4cCI6MTcwOTU2MzE4NH0.9ODIRTgjMtWZaqq7ID5IZxg8fGfrJuZeFDHBgYHnykA'
        const urlPost = 'https://striveschool-api.herokuapp.com/api/comments/'
        fetchDefault(key,urlPost,"POST",formData)
    }
    return(
        <>
            <img
                className= {styles.modalImg}
                src={getBook.img} 
                alt={getBook.img} 
            />
            <div className="d-flex flex-column gap-3">
                <input
                    readOnly
                    value={getBook.asin}
                    type="text"
                    name="elementId" 
                    placeholder="elementId"
                />
                <input
                    onChange={onChangeInput}
                    name="rate" 
                    type="number"
                    placeholder="rate"
                    min="1"
                    max="5"
                    />
                <input
                    onChange={onChangeInput}
                    name="comment" 
                    type="text"
                    placeholder="comment"
                    />
                <Button
                    onClick={onClickForm}
                >
                    Add Comment
                </Button>    
            </div>    
        </>
    )

}
export default ModalForm;