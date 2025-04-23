import React, { useState } from "react";
import electronicsData from "../api/electronicsData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const checkBox = {
    border: '1px solid #a9ba5a',
    borderRadius: '4px'
}

function Electronics() {
    const [searchText, setSearchText] = useState("");
    const [selectedProducts, setselectedProducts] = useState([]);
    const [selectedBrands, setselectedBrands] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);

    const handleSearch = (e) => {
        setSearchText(e.target.value.toLowerCase());
    }

    const handleProductChange = (e) => {
        const value = e.target.value;
        setselectedProducts((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    }

    const handleBrandChange = (e)=>{
        const value = e.target.value;

        setselectedBrands(((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        ))

    }

    const handlePriceChange = (e)=>{
        const value = e.target.value;

        setSelectedPrices((prev)=>{
           return prev.includes(value) ? prev.filter((item)=> item !== value) : [...prev, value]
        })
    }

    const filterByPrice = (price)=>{
        if(selectedPrices.length === 0){
            return true
        }

        for(let i = 0; i<selectedPrices.length; i++){
            const range = selectedPrices[i];

            if(range === '20001 & Above'){
                if (price >= 20001) {
                    return true; // price is matched
                }
            }else if(range === '0 - 10000'){
               if(price > 0 && price <= 10000){
                return true
               }
            }else if(range === '10001 - 20000'){
                debugger
                if(price >= 10001 && price <= 20000){
                    return true
                }
            }
        }
    }

    const filteredData = electronicsData.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchText);
        const matchesProduct = selectedProducts.length === 0 || selectedProducts.includes(item.product)
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const matchesPrice = filterByPrice(item.price);

        return matchesSearch && matchesProduct && matchesBrand && matchesPrice;
    })


    return (
        <div className="product-landing-pages">
            <Header />
            <div className="top-banner-section">
                <div className="banner-image-block">
                    <img src={`${process.env.PUBLIC_URL}/electronics-banner.jpg`} alt="Electronics Banner" />
                </div>
                <div className="banner-content-block">
                    <h2 className="poppins-extrabold-italic">Electronic's</h2>
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
                            {/* Product Filter */}
                            <div className="col-12 p-0 mb-3">
                                <div className="price-filter-block">
                                    <div className="filter-heading mb-2">Product</div>
                                    {
                                        ['TV', 'Computer'].map((product, index) => {
                                            return (<div className="form-check" key={index}>
                                                <label className="form-check-label">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        style={checkBox}
                                                        value={product}
                                                        onChange={handleProductChange}
                                                        checked={selectedProducts.includes(product)}
                                                    />{" "}
                                                    {product}
                                                </label>
                                            </div>)

                                        })
                                    }
                                </div>
                            </div>

                            {/* {Brand Filter} */}
                            <div className="col-12 p-0 mb-3">
                                <div className="price-filter-block">
                                    <div className="filter-heading mb-2">Product</div>
                                    {
                                        ['LG','Samsung','TCL','Panasonic','Sony'].map((brand, index) => {
                                            return (<div className="form-check" key={index}>
                                                <label className="form-check-label">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        style={checkBox}
                                                        value={brand}
                                                        onChange={handleBrandChange}
                                                    />{" "}
                                                    {brand}
                                                </label>
                                            </div>)

                                        })
                                    }
                                </div>
                            </div>

                            {/* {Price Filter} */}
                            <div className="col-12 p-0 mb-3">
                                <div className="price-filter-block">
                                    <div className="filter-heading mb-2">Price</div>
                                    {["0 - 10000", "10001 - 20000", "20001 & Above"].map((range, i) => (
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
                        </div>
                        <div className="col-7 col-sm-9">
                            <div className="row">
                                <div className="px-2 px-sm-3">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" value={searchText} onChange={handleSearch} />
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
                                                            <Link to={`/electroinic/${item.id}`}>
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

export default Electronics;