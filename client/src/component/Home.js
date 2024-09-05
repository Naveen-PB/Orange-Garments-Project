import React, { useState, useEffect } from 'react';
import Topcategory from './Topcategory';
import Ourcollection from './OurCollection';
import Hero from './Slider';
import banner1 from '../assest/banner1.jpg';
import banner3 from '../assest/banner3.jpg';
import banner2 from '../assest/banner2.png'

const images = [
    "https://m.media-amazon.com/images/I/717-WaIUi9L._SY879_.jpg",
    banner1,
    banner2,
    banner3,
    "https://m.media-amazon.com/images/I/6104QWrfpDL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/71OKaQZbj5L._SX679_.jpg",
    "https://libaasking.com/wp-content/uploads/2024/02/E360C7DD-75A0-487B-9458-089436422099-600x900.jpeg",
    "https://www.aarohee.in/wp-content/uploads/2023/09/43-1.jpeg",
    "https://images-cdn.ubuy.co.in/64808218af0de40b3d6978e7-wesracia-girls-dresses-kids-girls.jpg"
];

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id="custom-controls-gallery" className="relative w-full h-screen" data-carousel="slide">
            {/* <div className="relative w-screen h-screen overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        data-carousel-item={index === activeIndex ? "active" : ""}
                    >
                        <img
                            src={image}
                            className="
                                w-full h-full object-cover 
                                sm:w-full sm:h-64 
                                md:h-96 
                                lg:h-4/5 
                                xl:h-4/5"
                            alt=""
                        />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex justify-between items-center px-4">
                <button
                    type="button"
                    className="p-3 bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none"
                    data-carousel-prev
                    onClick={prevSlide}
                >
                    <svg
                        className="w-6 h-6"
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
                </button>
                <button
                    type="button"
                    className="p-3 bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none"
                    data-carousel-next
                    onClick={nextSlide}
                >
                    <svg
                        className="w-6 h-6"
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
                </button>
            </div> */}
            <Hero />
            <Ourcollection />
            <Topcategory />
        </div>
    );
};

export default Home;