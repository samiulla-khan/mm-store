import React from "react";
import '../App';
import menData from '../api/menData.js'
import { Link } from "react-router-dom";
function MensMiniComponent() {
    // let data = menData.slice(0, 6);
    let data = [...menData].sort(() => 0.5 - Math.random()).slice(0, 4);
    return (
        <div className="container">
            <div className="products-container">
                <section>
                    <div className="row">
                        <div className="col-10">
                            <h4 className="poppins-bold">Men's Fashion</h4>
                        </div>
                        <div className="col-2 d-flex align-items-center justify-content-end">
                            <Link to="/mensproducts" className="poppins-bold goto-arrow" style={{textDecoration:'none'}}>
                                &#8250;
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.map((item) => {
                                return (
                                    <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                                        <div className="card">
                                            <img className="card-img-top" src={`${process.env.PUBLIC_URL}/${item.imageURL}`} alt={item.name} />
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
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MensMiniComponent;