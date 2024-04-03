import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const RegisterForm = ({toggleForm}) => {

    const [signupFormData, setSignupFormData] = useState({
        userName:'',
        password:'',
        email:'',
        age: 0,
        role:"user"
        
    })
    //console.log(signupFormData);
    const onChangeInput = (e) => {
        const { name, value } = e.target
        const newValue = name === 'age' ? Number(value) : value
        setSignupFormData({
            ...signupFormData,
            [name]: newValue,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            return await fetch(
                'http://localhost:3030/register-user',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(signupFormData),
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <Container>
            <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <input 
                        onChange={onChangeInput} 
                        aria-describedby='userNameHelp'
                        type="text" 
                        name="userName"
                        placeholder='Inserisci un username' />
                </div>
                <div className='mb-3'>
                <input 
                    onChange={onChangeInput}
                    aria-describedby='passwordHelp' 
                    type="password" 
                    name="password"
                    placeholder='Inserisci una password' />
                </div>
                <div className='mb-3'>
                <input 
                    onChange={onChangeInput}
                    aria-describedby='emailHelp' 
                    type="email" 
                    name="email"
                    placeholder='Inserisci una email' />
                </div>
                <div className='mb-3'>
                <input 
                    onChange={onChangeInput} 
                    aria-describedby='ageHelp'
                    type="number" 
                    name="age"
                    placeholder="Inserisci un'età" />
                </div>
                <input 
                    onChange={onChangeInput}
                    aria-describedby='roledHelp'
                    type="text" 
                    name="role" 
                    value="user"
                    readOnly 
                    className='d-none' />

                <Button  
                    type="submit">
                    Registrati
                </Button>
            </form>
            <div onClick={() => {toggleForm()}}>
                Sei già registrato? <a href="#"> Accedi ora! </a>
            </div>
        </Container>
        </>
    )
}
export default RegisterForm