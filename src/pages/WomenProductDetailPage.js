import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import womenData from "../api/womenData";
import { useCart } from "../components/CartContext";

function WomenProductDetails(){
    const {id} = useParams();
    const productId = parseInt(id);
    const product = womenData.find((item)=> item.id === productId);
    // const [showPopup, setShowPopup] = useState(false);

    // const openPopUp = () => {
    //     setShowPopup(true);
    // };

    // const closePopUp = () => {
    //     setShowPopup(false);
    // };

    const {addToCart} = useCart()

    return (
        <>
            <Header />
            <div className="product-details-section">
                <div className="container">
                    {product ? (
                        <div className="prodcut-detail">
                            <div className="col-12 p-0 d-flex flex-row flex-wrap align-items-center justify-content-between">
                                <div className="col-sm-6 product-detail-image-block">
                                    <img src={`${process.env.PUBLIC_URL}/${product.imageURL}`} alt={product.name} />
                                </div>
                                <div className="col-sm-6 product-detail-content-block">
                                    <h2 className="poppins-extrabold">{product.name}</h2>
                                    <p className="poppins-medium">Price : <span>&#8377;</span> {product.price} only</p>
                                    <p className="poppins-medium">Colour : {product.colour}</p>
                                    <p className="poppins-medium">Available Quantity : {product.quantity} </p>
                                    <p className="poppins-regular"><span className="poppins-medium">About Product :</span> {product.description}</p>
                                    <div>
                                        <button className="btn btn-green" onClick={()=>{addToCart(product)}}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Product not found.</p>
                    )}
                </div>
            </div>

            {/* Pop Up Related Code here */}
            {/* {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <p>This feature is in progress...</p>
                        <button onClick={closePopUp} className="btn btn-green">Close</button>
                    </div>
                </div>
            )} */}

            <Footer />
        </>
    );
}

export default WomenProductDetails;