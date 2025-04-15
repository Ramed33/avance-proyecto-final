import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingProducts from '../../components/ShoppingProducts'
import { SubtitleDash, DashContainer } from './styles'

const Dashboard = () => {

    const { user } = useSelector((state) => state.auth)

    return (
        <DashContainer>
        {user ? (
            <>
          <SubtitleDash>Welcome, {user.username}. Thanks for loggin in!</SubtitleDash>
          <ShoppingProducts/>
          </>
          ):(
          <SubtitleDash>Please Login</SubtitleDash>
         )
        }
        </DashContainer>
    )
}

export default Dashboard