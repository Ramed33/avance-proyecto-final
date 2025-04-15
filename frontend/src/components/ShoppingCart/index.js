import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem";
import { CartEmpty, CartInfo, ClearCart, ContainerCart, NavbarLink } from "./styles";
import { clearCart } from "../../state/shoppingCart.slice";

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart.itemList);
    const dispatch = useDispatch();

    if (cart.length > 0) {

        return (
            <ContainerCart>
                <div>
                    <NavbarLink to="/checkout">Checkout shopping cart</NavbarLink>
                </div>
                <CartInfo>Total items: {cart.reduce((acumulador,actual) => acumulador + actual.quantity, 0)}</CartInfo>
                <CartInfo>Total due: {(cart.reduce((acumulador,actual) => acumulador + actual.totalPrice, 0)).toFixed(2)}</CartInfo>
                <ClearCart onClick={() => dispatch(clearCart())}>Clear Cart</ClearCart>
                <div>
                    {
                        cart.map((product) => 
                            <CartItem 
                                key={product.id} 
                                data={product} 
                            />
                    )}
                </div>
            </ContainerCart>
        );
    } else {
        return <CartEmpty>Cart is empty</CartEmpty>;
    }
};

export default ShoppingCart;