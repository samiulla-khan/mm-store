import React, { useState } from "react";

const slideData = [
    {
        image: "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
        alt: "black polo t-shirt",
        price: 350,
        title: "Black Polo T-Shirt"
    },
    {
        image: "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-hoodie-men.png",
        alt: "black hoodie",
        price: 500,
        title: "Black Hoodie"
    }
];

function SliderComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slideData.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slideData.length - 1 ? 0 : prevIndex + 1));
    };

    const currentSlide = slideData[currentIndex];

    return (
        <div className="slider-section">
            <div className="container">
                <div className="slides-wrapper">
                    <div className="slides">
                        <div className="slide col-lg-12 p-0 d-flex flex-row flex-wrap align-items-center justify-content-between active">
                            <div className="col-sm-6 p-0 slider-image-block">
                                <img src={currentSlide.image} alt={currentSlide.alt} />
                            </div>
                            <div className="col-sm-6 p-sm-0 slider-content-block">
                                <div className="poppins-semibold">Price : <span>&#8377;</span> {currentSlide.price} only</div>
                                <h1 className="poppins-bold">{currentSlide.title}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="slider-controls mt-3 d-flex justify-content-center gap-3">
                        <button onClick={goToPrevious} className="arrows prev-arrow">&#8592;</button>
                        <button onClick={goToNext} className="arrows next-arrow">&#8594;</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SliderComponent;
