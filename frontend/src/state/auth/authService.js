import axios from "axios"

const BACKEND_DOMAIN = "http://localhost:8000"

const REGISTER_URL = `${BACKEND_DOMAIN}/api/register/`
const LOGIN_URL = `${BACKEND_DOMAIN}/api/login/`

// Register user

const register = async (FormData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(REGISTER_URL, FormData, config)

    return response.data
}

// Login user

const login = async (FormData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(LOGIN_URL, FormData, config)

    if (response.data) {
        localStorage.setItem("accessToken", response.data.tokens.access);
        localStorage.setItem("refreshToken", response.data.tokens.refresh)
    }

    return response.data
}

// Logout 

const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}

const authService = { register, login, logout }

export default authService