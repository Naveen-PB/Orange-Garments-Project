import React, { useState } from 'react';
import Topcategory from './Topcategory';
import Ourcollection from './OurCollection';

const images = [
    "https://m.media-amazon.com/images/I/717-WaIUi9L._SY879_.jpg",
    "https://m.media-amazon.com/images/I/6104QWrfpDL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/71OKaQZbj5L._SX679_.jpg",
    "https://libaasking.com/wp-content/uploads/2024/02/E360C7DD-75A0-487B-9458-089436422099-600x900.jpeg",
    "https://www.aarohee.in/wp-content/uploads/2023/09/43-1.jpeg",
    "https://images-cdn.ubuy.co.in/64808218af0de40b3d6978e7-wesracia-girls-dresses-kids-girls.jpg"
];

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id="custom-controls-gallery" className="relative w-auto" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 w-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out ${
                            index === activeIndex ? 'block' : 'hidden'
                        }`}
                        data-carousel-item={index === activeIndex ? "active" : ""}
                    >
                        <img src={image} className="mx-auto w-1/2 sm:w-1/3" alt="" />
                    </div>
                ))}
            </div>
            <div className="flex justify-evenly items-center pt-4 w-full">
                <button
                    type="button"
                    className="flex items-start float-start me-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={prevSlide}
                >
                    <span className="text-blue-600 hover:text-gray-900 dark:hover:text-blue-950 group-focus:text-gray-900">
                        <svg
                            className="rtl:rotate-180 w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 5H1m0 0 4 4M1 5l4-4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="flex items-end h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={nextSlide}
                >
                    <span className="text-blue-600 hover:text-gray-900 dark:hover:text-blue-950 group-focus:text-gray-900">
                        <svg
                            className="rtl:rotate-180 w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <Ourcollection/>
            <Topcategory/>
        </div>
    );
};

export default Home;
