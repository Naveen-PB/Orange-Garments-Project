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
    "Explore the World of Imagination!",
    "Discover Exciting Stories for Little Minds",
    "Spark Creativity with Engaging Reads",
  ];

  const paragraphs = [
    [
      "Embark on an adventure through the pages of captivating tales! Our collection of kids' books will transport young readers to magical realms, where imagination knows no bounds.",
      "Dive into a world of wonder and discovery with enchanting stories that ignite curiosity and inspire young minds to dream big.",
    ],
    [
      "Ignite your child's imagination with stories that come to life! From tales of brave heroes to whimsical adventures, our books will keep kids entertained for hours.",
      "With colorful illustrations and engaging narratives, our selection of children's books is designed to foster a love for reading and learning in every young reader.",
    ],
    [
      "Nurture a love for reading from an early age! Our collection of kids' books is carefully curated to provide endless entertainment and learning opportunities for children of all ages.",
      "From board books for toddlers to chapter books for young readers, our diverse range of titles offers something for every child to enjoy. Start exploring today!",
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
