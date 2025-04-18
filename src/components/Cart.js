import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "./CartContext";

function CartComponent() {
    let { cartItems, removeFromCart } = useCart();
    return (
        <div className="coming-soon-section">
            <Header />
            <div className="add-to-cart-section">
                <div className="container">
                    <div className="cart-detail">
                        <div className="col-12 p-0 d-flex flex-row flex-wrap align-items-center justify-content-between">
                            <div className="add-to-cart-content-block">
                                <h2 className="poppins-extrabold">Your Shopping Cart is Here</h2>
                                {cartItems.length === 0 ? (<p>Your Cart is Empty</p>) :
                                    <div className="cart-items-block">
                                        {
                                            cartItems.map((product) => {
                                                return (
                                                    <div className="cart-item" key={product.id}>
                                                        <div className="col-12 p-0 d-flex flex-row align-items-center justify-content-between" key={product.id}>
                                                            <div className="col-6 p-0">
                                                                <img src={`${process.env.PUBLIC_URL}/${product.imageURL}`} alt={product.name} className="w-100" />
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="row">
                                                                    <h2 className="poppins-extrabold">{product.name}</h2>
                                                                    <p className="poppins-medium">Price : <span>&#8377;</span> {product.price} only</p>
                                                                    <p className="poppins-medium">Colour : {product.colour}</p>
                                                                    <div>
                                                                        <button className="btn btn-danger" onClick={()=>{removeFromCart(product)}}>Remove</button>
                                                                    </div>
                                                                </div>
                                                             </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartComponent;