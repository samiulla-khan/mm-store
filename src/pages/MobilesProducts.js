import React, { useState } from "react";
import Header from "../components/Header";
import { mobileData } from "../api/mobilesData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const checkBox = {
    border: '1px solid #a9ba5a',
    borderRadius: '4px'
}

function MobilesProducts() {

    const [searchText, setSearchText] = useState("");
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

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

            if (range === "15,001 & Above") {
                if (price >= 15001) {
                    return true; // price is matched
                }
            } else if (range === "0 - 10,000") {
                if (price >= 0 && price <= 10000) {
                    return true;
                }
            } else if (range === "10,001 - 15,000") {
                if (price >= 10001 && price <= 15000) {
                    return true;
                }
            }
        }

        // If none of the ranges match
        return false;
    };

    // TYPE FILTER FUNCTIONALITY

    const handleTypeChange = (e) => {
        debugger
        const value = e.target.value;
        setSelectedBrands((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };


    const filteredData = mobileData.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchText);
        const matchesPrice = filterByPrice(item.price);
       const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);

        return matchesSearch && matchesPrice && matchesBrand;

    });



    return (
        <div className="product-landing-pages">
            <Header />
            <div className="top-banner-section">
                <div className="banner-image-block">
                    <img src={`${process.env.PUBLIC_URL}/mobiles-banner.jpg`} alt="Banner Mens Fashion" />
                </div>
                <div className="banner-content-block">
                    <h2 className="poppins-extrabold-italic">Buy your favorite mobiles </h2>
                </div>
            </div>
            <div className="container">
                <div className="products-container">
                    <div className="row">
                        <div className="col-5 col-sm-3">
                            <div className="col-12 d-flex flex-row align-items-center justify-content-around filter-title-block mb-3">
                                <img src={`${process.env.PUBLIC_URL}/ic-filter.png`} alt="Banner Mens Fashion" />
                                <h3 className="poppins-medium">Fliter Products</h3>
                            </div>

                            {/* Price Filter */}
                            <div className="col-12 p-0 mb-3">
                                <div className="price-filter-block">
                                    <div className="filter-heading mb-2">Price</div>
                                    {["0 - 10,000", "10,001 - 15,000", "15,001 & Above"].map((range, i) => (
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

                            
                            {/* {Type Filter} */}

                            <div className="col-12 p-0 mb-3">
                                <div className="price-filter-block">
                                    <div className="filter-heading mb-2">Type</div>
                                    {["Oppo", "Vivo", "One Plus", "Samsung", "Redmi", "Tecno", "Karbon"].map((type, i) => (
                                        <div className="form-check" key={i}>
                                            <label className="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    value={type}
                                                    onChange={handleTypeChange}
                                                    checked={selectedBrands.includes(type)}
                                                    style={checkBox}
                                                />{" "}
                                                {type}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-7 col-sm-9">
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

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MobilesProducts;