import React from "react"
import { useState } from "react"


const BookForm = () => {

    const [file, setFile] = useState(null)
    const [formData, setFormData] = useState({})
    const handleOnFile = (ev) => {
        setFile(ev.target.files[0])
    }

    const handleOnChange = (ev) => {
        const {name, value} = ev.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const uploadFile = async () => {
        const fileData = new FormData();
        fileData.append('cover',file)
        try{
            const response = await fetch('http://localhost:3030/file/uploadFile',{
                method:'POST',
                body: fileData
            })
            return await response.json()
        }catch (e){
            console.log(e.message);
        }
    }
    const handleOnSubmit = async (ev) => {
        ev.preventDefault();
        if (file) {
            
            try {
                const uploadedFile = await uploadFile(file)
                const bodyToSend = {
                    ...formData,
                    cover: uploadedFile.source
                }
             
                const response = await fetch('http://localhost:3030/books',{
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyToSend)
                })
                return (await response.json() , console.log('Libro aggiunto'))
            } catch (error) {
                console.log(error.message);
            }
        }
    }
  return (
    <>
    <form
        encType="multipart/form-data" 
        onSubmit={handleOnSubmit}
    >
        <input
            onChange={handleOnChange} 
            type="text"
            name='title'
            placeholder='Titolo'
        />
        <input 
            onChange={handleOnChange}
            type="text"
            name='category'
            placeholder='Categoria' 
        />
        <input
            onChange={handleOnChange} 
            type="text"
            name='author'
            placeholder="autore"
        />
        <input
            onChange={handleOnChange} 
            type="number"
            name='price'
            placeholder="prezzo"
        />
        <input
            onChange={handleOnChange} 
            type="text"
            name='description'
            placeholder="description" 
        />
        <input
            onChange={handleOnFile} 
            type="file"
            name='cover'
        />
        <button
            onSubmit={handleOnSubmit}
            className="btn btn-success"
            type="submit" 
        >
            Aggiungi 
        </button>
    </form>
    </>
  )
}

export default BookForm;