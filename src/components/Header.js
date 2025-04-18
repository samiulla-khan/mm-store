import React from "react";
import '../App';
import { Link } from "react-router-dom";
// import ComingSoon from "./ComingSoon";
import { useCart } from "./CartContext";

function Header() {
    const {cartItems} = useCart();
    return (
        <div className="header-section fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-md">
                    <div className="logo-section">
                        <Link className="navbar-brand" to="/">
                            {/* <img src="mmlogo.png" alt="brand logo" /> */}
                            {/* i'm using gh-pages so that direct image path 
                            won't work so that we have to give path like below */}
                            <img src={`${process.env.PUBLIC_URL}/mmlogo.png`} alt="brand Logo" />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mx-2">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="http://example.com" id="navbarDropdownMenua" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Fashion
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenua">
                                <li><Link className="dropdown-item" to="/mensproducts">Men</Link></li>
                                <li><Link className="dropdown-item" to="/womensproducts">Women</Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/mobiles">Mobiles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/books">Education</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/inprogress">Electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inprogress">Appliances</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inprogress">Furnitures</Link>
                        </li>
                    </ul>
                    <div className="px-2 px-sm-3">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    </div>
                    <div className="mx-2">
                        <Link className="nav-link d-inline" to="/cart">Cart</Link>
                        <span className="mx-2">
                            {
                                cartItems.length > 0 ? cartItems.length : 0
                            }
                        </span>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;