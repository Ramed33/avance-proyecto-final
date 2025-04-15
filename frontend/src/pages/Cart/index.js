import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCart from '../../components/ShoppingCart'
import { CartContainer, TitleCart } from './styles'

const Cart = () => {

    const { user } = useSelector((state) => state.auth)

    return (
        <CartContainer>
        {user ? (
          <>
          <TitleCart>{user.username}'s shopping cart</TitleCart>
          <ShoppingCart/>
          </>
          ):(
          <TitleCart>Please Login</TitleCart>
         )
        }
        </CartContainer>
    )
}

export default Cart