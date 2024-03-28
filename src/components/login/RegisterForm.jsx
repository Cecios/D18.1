import { useState } from 'react'

const RegisterForm = () => {
    const [signupFormData, setSignupFormData] = useState({})

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setSignupFormData({
            ...signupFormData,
            [name]: value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            return await fetch(
                `/users`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(signupFormData),
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChangeInput} type="text" name="userName" />
            <input onChange={onChangeInput} type="password" name="password" />
            <input onChange={onChangeInput} type="email" name="email" />
            <input onChange={onChangeInput} type="age" name="age" />
            <input onChange={onChangeInput} type="text" name="role" />

            <button className="btn btn-primary" type="submit">
                Registrati
            </button>
        </form>
    )
}
export default RegisterForm