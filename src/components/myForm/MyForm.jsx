import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const MyForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        surname:'',
        email:'',
        age:''
    })

    const onChangeInput = (ev) =>{
        const {name, value} = ev.target
        setFormData({
            ...formData,
            [name]: value    
        })
    }

    const onSubmit = async (ev)=>{
        ev.preventDefault();
        alert('form inviato')
    }

    return(
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <form
                            onSubmit={onSubmit} 
                        >
                            <input 
                                value={formData.name} // COLLEGHIAMO IL VALORE DELL'INPUT, LO SINCRONIZZIAMO CON LO STATO
                                onChange={onChangeInput}
                                type="text" 
                                name="name"
                                placeholder="Insert your name" 
                            />
                            <input 
                                value={formData.surname}
                                onChange={onChangeInput}
                                type="text" 
                                name="surname"
                                placeholder="Insert your surname" 
                            />
                            <input 
                                value={formData.email}
                                onChange={onChangeInput}
                                type="email" 
                                name="email"
                                placeholder="Insert your email" 
                            />
                            <input 
                                value={formData.age}
                                onChange={onChangeInput}
                                type="number" 
                                name="age"
                                placeholder="Insert your age" 
                            />
                            <div className="d-flex justify-content-center">
                                <Button 
                                    type="submit"
                                    className="w-25"
                                >
                                Invia Form
                                </Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyForm;