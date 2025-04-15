import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../state/auth/authSlice'
import {NavbarContainer,NavbarLinkContainer,NavbarLink, Image} from './styles'
import Logo from '../../assets/bodega-web-logo.png'

const Nav = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <NavbarContainer>
            <NavbarLink className="nav-link" to="/">
                <Image className="logo" src={Logo} alt="logo"/>
            </NavbarLink>
            <NavbarLinkContainer>
                {user ?
                    <>
                        <NavbarLink className="nav-link" to="/dashboard">Dashboard</NavbarLink>
                        <NavbarLink className="nav-link" to="/" onClick={handleLogout}>Logout</NavbarLink>
                        <NavbarLink className="nav-link" to="/cart">Cart</NavbarLink>
                    </>
                    :
                    <>
                        <NavbarLink className="nav-link" to="/dashboard">Dashboard</NavbarLink>
                    </>
                }
            </NavbarLinkContainer>
        </NavbarContainer>
    )
}

export default Nav