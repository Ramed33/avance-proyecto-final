import { ContainerCartItem, ImageCartItem, TitleCartItem, PriceCartItem, ButtonContainer, ButtonPlus, ButtonMinus, ButtonRemove, TitleCartQuantity, TitleCartTotalPrice } from "./styles";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeItem } from "../../state/shoppingCart.slice";

const CartItem = ({data}) => {
    let {image,title,price,id,quantity, totalPrice} = data
    const dispatch = useDispatch();
    const increment = () => {
       dispatch(addToCart({ id, quantity, totalPrice, price }));
    };
    const decrement = () => {
      dispatch(removeFromCart({ id, quantity, totalPrice, price }));
    };

    return (
        <ContainerCartItem>
            <ImageCartItem src={image} alt={title}/>
            <TitleCartItem>{title}</TitleCartItem>
            <PriceCartItem>$ {price}</PriceCartItem>
            <TitleCartQuantity>Quantity: {quantity}</TitleCartQuantity>
            <TitleCartTotalPrice>Total Price: $ {totalPrice.toFixed(2)}</TitleCartTotalPrice>
            <ButtonContainer>
                <ButtonPlus onClick={increment}>+</ButtonPlus>
                <ButtonRemove className='remove-btn' onClick={() => dispatch(removeItem(id))} >Remove</ButtonRemove>
                <ButtonMinus onClick={decrement}>-</ButtonMinus>
            </ButtonContainer>
        </ContainerCartItem>
    );
};

export default CartItem;