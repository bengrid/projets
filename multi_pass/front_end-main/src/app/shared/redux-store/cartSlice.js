import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice: 0
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            let newState = JSON.parse(JSON.stringify(state))
            newState.cart.push(action.payload)
            return newState
        },
        increaseProductQty: (state, action) => {
            let newState = JSON.parse(JSON.stringify(state))
            newState.cart = add(action.payload)
            return newState
        },
        decreaseProductQty: (state, action) => {
            let newState = JSON.parse(JSON.stringify(state))
            newState.cart = reduce(action.payload)
            return newState
        },
        removeProductToCart: (state, action) => {
            let newState = JSON.parse(JSON.stringify(state))
            newState.cart = deleteProduct(action.payload)
            return newState
        },
        removeAllProductToCart: (state, action) => {
            let newState = JSON.parse(JSON.stringify(state))
            newState.cart = deleteAllProduct(action.payload)
            return newState
        },
        totalCartPrice: (state) => {
            let newState = JSON.parse(JSON.stringify(state))
            newState.totalPrice = totalPanier()

            return newState
        }
    }
});

export const { addProductToCart, increaseProductQty, removeAllProductToCart, decreaseProductQty, removeProductToCart, totalCartPrice } = cartSlice.actions;

export default cartSlice.reducer;

export const selectTotal = (state) => {
    const cart = state.cart.cart;
    //TODO: calcul total
    let total = 9;
    return total;
}





export function add(productId) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const i = cart.findIndex((x) => (x._id === productId))
    cart[i].qtyInCart++
    localStorage.setItem('cart', JSON.stringify(cart))
    return cart
}

export function reduce(productId) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const i = cart.findIndex((x) => (x._id === productId))
    cart[i].qtyInCart--
    localStorage.setItem('cart', JSON.stringify(cart))
    return cart
}
export function deleteProduct(productId) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const i = cart.findIndex((x) => (x._id === productId))
    cart.splice(i, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    totalPanier()
    return cart
}
export function deleteAllProduct() {
    localStorage.removeItem('cart')
    const newCart = JSON.parse(localStorage.getItem('cart')) || []
    totalPanier()
    return newCart
}

export function totalPanier() {
    let x = 0
    let products = JSON.parse(localStorage.getItem('cart'))
    if (products) {
        products.map((product) => {
            x += product.price * product.qtyInCart
            return x
        })
    }
    return x.toFixed(2)
}
