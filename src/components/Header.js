import React from "react";
import '../App';

function Header() {
    return (
        <div className="header-section">
            <div className="container">
                <nav className="navbar navbar-expand-sm">
                    <div className="logo-section">
                        <a className="navbar-brand" href="#">
                            <img src="mmlogo.png" alt="brand logo" />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mx-2">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" to="http://example.com" id="navbarDropdownMenua" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Fashion
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenua">
                                <li><a className="dropdown-item" to="/mens">Men</a></li>
                                <li><a className="dropdown-item" to="/womens">Women</a>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" to="/mobiles">Mobiles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/books">Education</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" to="/computers">Electronics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/kitchen">Appliances</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/furnitures">Furnitures</a>
                        </li>
                    </ul>
                    <div className="px-2 px-sm-3">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    </div>
                    <div className="mx-2">
                        <a className="nav-link d-inline" to="/cart">Cart</a>
                        <span className="mx-2">0</span>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;