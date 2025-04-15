import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BiLogInCircle } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../state/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from "../../components/Spinner"
import { Form, FormInput, FormTitle, LoginButton, LoginContainer, TitleLogin } from "./styles"

const LoginPage = () => {

    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    })

    const { email, password } = formData

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

        const userData = {
            email,
            password,
        }
        dispatch(login(userData))
    }


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate("/dashboard")
        }

        dispatch(reset())

    }, [isError, isSuccess, user, message, navigate, dispatch])

    return (
            <LoginContainer>
                <FormTitle>Login <BiLogInCircle /></FormTitle>

                {isLoading && <Spinner />}

                <Form>
                    <FormInput type="text"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <FormInput type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <LoginButton type="submit" onClick={handleSubmit}>User Login</LoginButton>
                </Form>
            </LoginContainer>
    )
}

export default LoginPage