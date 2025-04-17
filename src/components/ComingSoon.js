import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function ComingSoon() {
    return (
        <div className="coming-soon-section">
            <Header />
            <div className="product-details-section">
                <div className="container" style={{'height':'60vh'}}>
                    <div className="prodcut-detail" style={{'position':'absolute','top':'40%','left':'40%','transform':'translate(-40%,-40%)'}}>
                        <div className="col-12 p-0 d-flex flex-row flex-wrap align-items-center justify-content-between">
                            <div className="product-detail-content-block">
                                <h2 className="poppins-extrabold">This feature is in progress...</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ComingSoon;