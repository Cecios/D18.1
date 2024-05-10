import React, { useState } from 'react'

const LoginForm = () => {

    const [formData, SetFormData] = useState({
        username: '',
        password: ''
    })
    const handleInput = (ev) => {
        const { name, value } = ev.target
        SetFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleSubmit = (ev) => {
        ev.preventDefault()
    }
  return (
    <>
        <div >
        <form onSubmit={handleSubmit}>
            <div className='grid gap-3'>
                <div className='grid-rows-12'>
                    <input 
                        onChange={handleInput}
                        name='username'
                        type="text"
                        placeholder='Username' />
                </div>
                <div className='grid-rows-12'>
                    <input 
                        onChange={handleInput}
                        name='password'
                        type="password"
                        placeholder='password' />
                </div>
                <div className='grid-rows-12'>
                    <button type='submit'>
                        Login
                    </button>
                </div>
            </div>
        </form>
        </div>
    </>
  )
}

export default LoginForm;