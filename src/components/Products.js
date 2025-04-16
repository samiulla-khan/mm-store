import React from "react";
import apiData from '../api/data.js'

function Products() {
    return (
        <div className="container">
            <div className="products-container">
                <div className="row">
                    {
                        apiData.map((item) => {
                            return (
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="card">
                                        <img className="card-img-top" src={item.imageURL} alt={item.name} />
                                        <div className="card-body">
                                            <div>
                                                <p className="card-title product-type">{item.type}</p>
                                                <h4 className="card-title product-name">{item.name}</h4>
                                                <p className="card-text product-price"><span>&#8377;</span> {item.price}</p>

                                            </div>
                                            <div>
                                                <button className="btn btn-green">Go to Product</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
                            <img className="card-img-top" src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png" alt="Card image" />
                            <div className="card-body">
                                <div>
                                    <p className="card-title product-type">John Doe</p>
                                    <h4 className="card-title product-name">John Doe</h4>
                                    <p className="card-text product-price">Some example text some example text. John Doe is an architect and engineer</p>

                                </div>
                                <div>
                                    <button className="btn btn-green">Go to Product</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Products;