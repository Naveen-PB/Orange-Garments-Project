import { useState, useEffect } from "react";
import banner1 from '../assest/banner1.jpg';
import banner3 from '../assest/banner3.jpg';
import banner2 from '../assest/banner2.png';
import banner5 from '../assest/banner5.png';

export default function Hero() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const backgrounds = [
    banner1,
    banner2,
    banner3,
    banner5,
  ];

  const texts = [
    "Upgrade Your Wardrobe Today at Orange Garments!",
    "Discover the Latest Fashion Trends at Orange Garments",
    "Style that Speaks for Itself – Only at Orange Garments",
  ];

  const paragraphs = [
    [
      "Refresh your closet with the latest arrivals from Orange Garments! Explore our exclusive collection of modern styles, designed for fashion-forward individuals.",
      "From casual wear to formal attire, our range has everything you need to look your best, no matter the occasion. Shop now and elevate your wardrobe at Orange Garments.",
    ],
    [
      "Stay ahead of the fashion curve with our trendsetting pieces at Orange Garments! Whether you're dressing for work or play, we've got styles that will make you stand out.",
      "Our collection is carefully curated to bring you the hottest trends, with quality fabrics and expert craftsmanship. Discover your new favorite outfits today at Orange Garments!",
    ],
    [
      "Unleash your personal style with our diverse range of clothing at Orange Garments! From chic essentials to bold statement pieces, we have something for everyone.",
      "Browse our selection of fashion-forward apparel, and get ready to make a lasting impression wherever you go. Your style, your rules – only at Orange Garments!",
    ],
  ];

  return (
    <div>
      <section
        className="pt-10 mx-2 mt-2 sm:pt-2 bg-cover bg-center h-[30rem] relative transition duration-1000"
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transitionProperty: "background-image",
        }}
        id="home"
      >
        <div className="container flex items-center justify-center h-full w-full p-4">
          <div className="content flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white p-8 rounded-xl  mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
              {texts[backgroundIndex]}
            </h3>
            {paragraphs[backgroundIndex].map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-2"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
