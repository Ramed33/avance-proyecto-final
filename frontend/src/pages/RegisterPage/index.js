import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { BiUser } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../state/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { Form, FormInput, FormTitle, RegisterButton, RegisterContainer } from './styles'

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        "username": "",
        "email": "",
        "password1": "",
        "password2": "",
    })

    const { username, email, password1, password2 } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        if (password1 !== password2) {
            toast.error("Passwords do not match")
        } else {
            const userData = {
                username,
                email,
                password1,
                password2
            }
            dispatch(register(userData))
        }
    }


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate("/")
            toast.success("Registration successful")
        }

        dispatch(reset())

    }, [isError, isSuccess, user, message, navigate, dispatch])



    return (
            <RegisterContainer>
                <FormTitle>Register <BiUser /> </FormTitle>

                {isLoading && <Spinner />}

                <Form>
                    <FormInput type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={username}
                        required
                    />
                    <FormInput type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <FormInput type="password1"
                        placeholder="Password1"
                        name="password1"
                        onChange={handleChange}
                        value={password1}
                        required
                    />
                    <FormInput type="password2"
                        placeholder="Password2"
                        name="password2"
                        onChange={handleChange}
                        value={password2}
                        required
                    />

                    <RegisterButton type="submit" onClick={handleSubmit}>User Register</RegisterButton>
                </Form>
            </RegisterContainer>
    )
}

export default RegisterPage