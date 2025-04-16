import React, { useState } from "react";
import Header from "../components/Header";
import menData from "../api/menData";

const checkBox = {
    border: '1px solid #a9ba5a',
    borderRadius: '4px'
}

function MensProducts() {

    const [searchText, setSearchText] = useState("");
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    // SEARCH FILTER FUNCTIONALITY BELOW
    const handleSearchChange = (e) => {
        setSearchText(e.target.value.toLowerCase());
    };

    // PRICE FILTER FUNCTIONALITY BELOW
    const handlePriceChange = (e) => {
        const value = e.target.value; // This is the value of the checkbox (like "0 - 300")

        // Check if that value is already in the list (checkbox was already checked)
        if (selectedPrices.includes(value)) {
            // Remove it (user unchecked it)
            const newPrices = selectedPrices.filter(item => item !== value);
            setSelectedPrices(newPrices);
        } else {
            // Add it (user checked it)
            const newPrices = [...selectedPrices, value];
            setSelectedPrices(newPrices);
        }
    };

    const filterByPrice = (price) => {
        // If no filters are selected, include all prices
        if (selectedPrices.length === 0) {
            return true;
        }

        // Check each selected price range
        for (let i = 0; i < selectedPrices.length; i++) {
            const range = selectedPrices[i];

            if (range === "501 & Above") {
                if (price >= 501) {
                    return true; // price is matched
                }
            } else if (range === "0 - 300") {
                if (price >= 0 && price <= 300) {
                    return true;
                }
            } else if (range === "301 - 500") {
                if (price >= 301 && price <= 500) {
                    return true;
                }
            }
        }

        // If none of the ranges match
        return false;
    };

    // TYPE FILTER FUNCTIONALITY

    const handleTypeChange = (e) => {
        const value = e.target.value;
        setSelectedTypes((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };


    const filteredData = menData.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchText);
        const matchesPrice = filterByPrice(item.price);
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.type);

        return matchesSearch && matchesPrice && matchesType;

    });



    return (
        <div className="product-landing-pages">
            <Header />
            <div className="top-banner-section">
                <div className="banner-image-block">
                    <img src={`${process.env.PUBLIC_URL}/mens-fashion.jpg`} alt="Banner Mens Fashion" />
                </div>
                <div className="banner-content-block">
                    <h2 className="poppins-extrabold-italic">Men's Fashion</h2>
                </div>
            </div>
            <div className="container">
                <div className="products-container">
                    <div className="row">
                        <div className="col-3">
                            <div className="col-12 d-flex flex-row align-items-center justify-content-around filter-title-block mb-3">
                                <img src={`${process.env.PUBLIC_URL}/ic-filter.png`} alt="Banner Mens Fashion" />
                                <h3 className="poppins-medium">Fliter Products</h3>
                            </div>
                            {/* <div className="col-12 p-0">
                                <div className="price-filter-block mb-3">
                                    <div className="filter-heading mb-2">Price</div>
                                    <div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="lessthreehundred">
                                                <input type="checkbox" className="form-check-input" id="lessthreehundred" name="lessthreehundred" value="0 - 300" style={checkBox} /> <span>&#8377;</span> 0 - 300
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="lessfivehundred">
                                                <input type="checkbox" className="form-check-input" id="lessfivehundred" name="lessfivehundred" value="301 - 500" style={checkBox} /><span>&#8377;</span> 301 - 500
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="morethenfivehundred">
                                                <input type="checkbox" className="form-check-input" id="morethenfivehundred" name="morethenfivehundred" value="501 & Above" style={checkBox} /> <span>&#8377;</span> 501 & Abouve
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* Price Filter */}
                            <div className="col-12 p-0 mb-3">
                                <div className="price-filter-block">
                                    <div className="filter-heading mb-2">Price</div>
                                    {["0 - 300", "301 - 500", "501 & Above"].map((range, i) => (
                                        <div className="form-check" key={i}>
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    value={range}
                                                    onChange={handlePriceChange}
                                                    checked={selectedPrices.includes(range)}
                                                    style={checkBox}
                                                />{" "}
                                                &#8377; {range}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* <div className="col-12 p-0">
                                <div className="price-filter-block mb-3">
                                    <div className="filter-heading mb-2">Type</div>
                                    <div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="hoodies">
                                                <input type="checkbox" className="form-check-input" id="hoodies" name="hoodies" value="Hoodies" style={checkBox} /> Hoodies
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="jacket">
                                                <input type="checkbox" className="form-check-input" id="jacket" name="jacket" value="Jacket" style={checkBox} />Jacket
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="t-shirt">
                                                <input type="checkbox" className="form-check-input" id="t-shirt" name="t-shirt" value="T-Shirt" style={checkBox} /> T-Shirt
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="casual-shirt">
                                                <input type="checkbox" className="form-check-input" id="casual-shirt" name="casual-shirt" value="Casual Shirt" style={checkBox} /> Casual Shirt
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="formal-shirt">
                                                <input type="checkbox" className="form-check-input" id="formal-shirt" name="formal-shirt" value="Formal Shirt" style={checkBox} /> Formal Shirt
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="sweat-shirt">
                                                <input type="checkbox" className="form-check-input" id="sweat-shirt" name="sweat-shirt" value="Sweat Shirt" style={checkBox} /> Sweat Shirt
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* {Type Filter} */}

                            <div className="col-12 p-0 mb-3">
                                <div className="price-filter-block">
                                    <div className="filter-heading mb-2">Price</div>
                                    {["Hoodies", "Jacket", "T-Shirt", "Casual Shirt", "Formal Shirt", "Sweat Shirt"].map((type, i) => (
                                        <div className="form-check" key={i}>
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    value={type}
                                                    onChange={handleTypeChange}
                                                    checked={selectedTypes.includes(type)}
                                                    style={checkBox}
                                                />{" "}
                                                {type}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="px-2 px-sm-3">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" value={searchText} onChange={handleSearchChange} />
                                </div>
                            </div>
                            <div className="row">
                                {
                                    filteredData.map((item) => {
                                        return (
                                            <div className="col-sm-6 col-md-3" key={item.id}>
                                                <div className="card">
                                                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/${item.imageURL}`} alt={item.name} />
                                                    <div className="card-body">
                                                        <div>
                                                            <p className="card-title product-type poppins-regular">{item.type}</p>
                                                            <p className="card-title product-name poppins-bold">{item.name}</p>
                                                            <p className="card-text product-price poppins-medium"><span>&#8377;</span> {item.price}</p>

                                                        </div>
                                                        <div>
                                                            <button className="btn btn-green">View Product</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MensProducts;