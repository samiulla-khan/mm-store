import React, { useState } from "react";
import Header from "../components/Header";
import womenData from "../api/womenData";
import Footer from "../components/Footer";

const checkBox = {
    border: '1px solid #a9ba5a',
    borderRadius: '4px'
}

function WomensProducts() {

    const [searchText, setSearchText] = useState("");
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleSearchChange = (e)=>{
        setSearchText(e.target.value.toLowerCase());
    }

    const handleTypeChange = (e)=>{
        const value = e.target.value;
        setSelectedTypes((prev)=>{
           return prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value];
        })
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

        for(let i=0; i<selectedPrices.length; i++){
            const range = selectedPrices[i];

            if (range === "0 - 500") {
                if (price <= 500) {
                    return true; // price is matched
                }
            }else if(range === "501 - 1000"){
                if(price >= 501 && price <= 1000){
                    return true; // price is matched
                }
            }else if(range === "1001 & Above"){
                if(price >= 1001){
                    return true;
                }
            }
        }
        
    }

    const filteredData = womenData.filter((item)=>{
        const matchesSearch = item.name.toLocaleLowerCase().includes(searchText);
        const matchesPrice = filterByPrice(item.price);
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.type);

        return matchesSearch && matchesType && matchesPrice;
    })


    return (
        <div className="product-landing-pages">
            <Header />
            <div className="top-banner-section">
                <div className="banner-image-block">
                    <img src={`${process.env.PUBLIC_URL}/womens-fashion.jpg`} alt="Banner Mens Fashion" />
                </div>
                <div className="banner-content-block">
                    <h2 className="poppins-extrabold-italic">Women's Fashion</h2>
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
                                    {["0 - 500", "501 - 1000", "1001 & Above"].map((range, i) => (
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

                            <div className="col-12 p-0">
                                <div className="price-filter-block mb-3">
                                    <div className="filter-heading mb-2">Type</div>
                                    <div>
                                        {
                                            ["Polo", "Hoodie", "Round Neck", "Dress", "Blouse", "Jeans", "Jumpsuit", "Skirt", "Sweater", "Blazer", "Leggings", "Swimwear", "Pants", "Coat", "T-Shirt"].map((type, i)=>{
                                                return(
                                                    <div className="form-check" key={i}>
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input"  value={type} onChange={handleTypeChange} checked={selectedTypes.includes(type)} style={checkBox} /> {" "}
                                                        {type}
                                                    </label>
                                                </div>  
                                                )
                                            })
                                        }
                                        {/* <div className="form-check">
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* {Type Filter} */}

                            {/* <div className="col-12 p-0 mb-3">
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
                            </div> */}
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
            <Footer />
        </div>
    )
}

export default WomensProducts;