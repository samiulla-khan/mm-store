import React, { createContext, useContext, useState } from "react";

const context = createContext();


export const CartProvider = ({children}) => {
    let [cartItems, setCartItems] = useState([])
    const addToCart = (product)=>{
        // console.log("Adding to cart:", product); // 👈 log to see if it fires
        setCartItems([...cartItems, product])
    }

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter((data)=>{
            return data !== item;
        }))
    }

    return(
        <context.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </context.Provider>
    )
};

// CUSTOM HOOK CREATE CHESTUNNANU ENDUKATE EE APPLICATION LO EKKADAINA USE CHESUKOVADANIKI

export const useCart = () => {
    return useContext(context)
}