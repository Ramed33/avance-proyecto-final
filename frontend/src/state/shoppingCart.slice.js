import { createSlice } from "@reduxjs/toolkit";

const initialState = {itemList: [], totalQuantity: 0, showCart: false};

const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState,
    
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find(
              (item) => item.id === newItem.id
            );
            if (existingItem) {
              existingItem.quantity++;
              existingItem.totalPrice = (existingItem.price * existingItem.quantity);
            } else {
              state.itemList.push({
                image: action.payload.image,
                title: action.payload.title,
                price: action.payload.price,
                totalPrice: action.payload.price,
                id: action.payload.id,
                quantity: 1,
              });
            }
        },
        removeFromCart(state, action) {
            const findItem = state.itemList.find(
              (item) => item.id === action.payload.id
            );
            if (findItem.quantity === 1) {
              state.itemList = state.itemList.filter(
                (item) => item.id !== action.payload.id
              );
            } else {
              findItem.quantity--;
              findItem.totalPrice -= findItem.price;
            }
        },
        removeItem: (state, action) => {
          const itemId = action.payload;
          state.itemList = state.itemList.filter((item) => item.id !== itemId);
        },
        clearCart(state) {
            state.itemList = [];
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        },
    }
})

export const {addToCart, removeFromCart, clearCart,setShowCart, removeItem} = shoppingCartSlice.actions;

const { reducer: shoppingCartReducer } = shoppingCartSlice;
export default shoppingCartReducer;