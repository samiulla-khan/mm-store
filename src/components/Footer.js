import React from "react";

function Footer() {
    return (

        <div className="footer-section">
            <div className="container">
                <div className="col-12 d-flex flex-column align-items-center justify-content-center pt-5">
                    <p className="poppins-semibold">This is footer section.</p>
                    <div className="socials-block d-flex flex-row align-items-center justify-content-center">
                        <div className="social-icon">
                            <a className="social-icons" href="/">
                                <img src={`${process.env.PUBLIC_URL}/naukri.png`} alt="brand Logo" />
                            </a>
                        </div>
                        <div className="social-icon">
                            <a className="social-icons" href="/">
                                <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="brand Logo" />
                            </a>
                        </div>
                        <div className="social-icon">
                            <a className="social-icons" href="/">
                                <img src={`${process.env.PUBLIC_URL}/gmail.png`} alt="brand Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>copyright ©2024 </p>
            </div>
        </div>

    )
}

export default Footer;