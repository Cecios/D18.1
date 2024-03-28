import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Login= () => {

    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        email:'',
        password:'',
    })

    const handleOnChange = (ev)=>{        
        const {name,value} = ev.target
        setLoginForm({
            ...loginForm,
            [name]:value
        });
    };
    const onSubmit = async (ev) => {
        ev.preventDefault();

        // let  options = {
        //     method: 'POST',
        //     headers: {
        //        'Content-Type': 'application/json',
        //        Authorization: ``
        //            },
        //    body:JSON.stringify(loginForm),
        //    }
           try{
               let resp = await fetch(`http://localhost:3030/login`,{
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(loginForm)
               } )
               if (resp.status >= 200 && resp.status < 300){
   
                   console.log('Request successfully done');
                   let data = await resp.json()
                   localStorage.setItem("auth",JSON.stringify(data.token))
                   navigate('/home')
                   return data
               } else {
                   throw new Error('Something wrong');
               }
           }
           catch(error) {console.log(error)};
   }
  return (
    <>
        <Container>
            <Row>
                <Col>
                <div className='card my-5'>
                <form
                    onSubmit={onSubmit}
                    className='card-body cardbody-color p-lg-5'>
                    <div className='text-center'>
                        <img 
                            src="https://picsum.photos/340/340"
                            className='img-fluid profile-image-pic rounded-circle img-thumbanail my-3'
                            width="200px" 
                            alt="profile" />
                    </div>
                    <input
                        name='email'
                        type="email"
                        placeholder='Inserisci la tua email'
                        value={loginForm.username}
                        onChange={handleOnChange} 
                    />
                    <input 
                        name='password'
                        type="password" 
                        placeholder='Inserisci la tua password'
                        value={loginForm.password}
                        onChange={handleOnChange}
                    />
                    <Button
                        type='submit' 
                        variant="primary">
                        Login
                    </Button>
                </form>
                </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Login;


