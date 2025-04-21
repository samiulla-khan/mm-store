import React from "react";
import { mobileData } from "../api/mobilesData";
import { Link } from "react-router-dom";

function MobileMiniComponent() {
    let data = [...mobileData].sort(() => 0.5 - Math.random()).slice(0, 4);
    return (
        <div className="container">
            <div className="products-container">
                <section>
                    <div className="row">
                        <div className="col-10">
                            <h4 className="poppins-bold">Mobile's</h4>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-end">
                            <Link to="/mobileproducts" className="poppins-bold goto-arrow" style={{ textDecoration: 'none' }}>
                                &#8250;
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.map((item) => {
                                return (
                                    <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                                        <div className="card">
                                            <img className="card-img-top" src={`${process.env.PUBLIC_URL}/${item.imageURL}`} alt={item.name} />
                                            <div className="card-body">
                                                <div>
                                                    <p className="card-title product-type poppins-regular">{item.type}</p>
                                                    <p className="card-title product-name poppins-bold">{item.name}</p>
                                                    <p className="card-text product-price poppins-medium"><span>&#8377;</span> {item.price}</p>

                                                </div>
                                                <div>
                                                    <Link to={`/mobile/${item.id}`}>
                                                        <button className="btn btn-green">View Product</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MobileMiniComponent;