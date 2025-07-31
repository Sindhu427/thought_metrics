import React, { useEffect, useState } from "react";
import Carousel1 from "../assets/carousel/carousel1.svg";
import Carousel2 from "../assets/carousel/carousel2.svg";
import Carousel3 from "../assets/carousel/carousel3.svg";

const slides = [
  {
    id: 1,
    image: Carousel1,
    heading: "A Fresh Approach to Market Research.",
  },
  {
    id: 2,
    image: Carousel2,
    heading:
      "From Data to Decisions: Tailored research as unique as your brand.",
  },
  {
    id: 3,
    image: Carousel3,
    heading:
      "Your customers don't fit in a box, and neither does our approach.",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let imageShowTimeout;
    let textShowTimeout;
    let imageHideTimeout;
    let textHideTimeout;
    let nextSlideTimeout;

    // Reset states
    setShowImage(false);
    setShowText(false);

    // Show image smoothly
    imageShowTimeout = setTimeout(() => {
      setShowImage(true);
    }, 100);

    // Show text after 1 second
    textShowTimeout = setTimeout(() => {
      setShowText(true);
    }, 1100);

    // Hide image after 1 more second
    imageHideTimeout = setTimeout(() => {
      setShowImage(false);
    }, 2100);

    // Hide text after image hides
    textHideTimeout = setTimeout(() => {
      setShowText(false);
    }, 2600);

    // Move to next slide
    nextSlideTimeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3100);

    return () => {
      clearTimeout(imageShowTimeout);
      clearTimeout(textShowTimeout);
      clearTimeout(imageHideTimeout);
      clearTimeout(textHideTimeout);
      clearTimeout(nextSlideTimeout);
    };
  }, [current]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[500px] items-center bg-pink-50 relative overflow-hidden">
      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={slides[current].image}
          alt="Slide"
          className={`max-h-[500px] w-auto object-contain transform transition-all duration-700 ease-in-out ${
            showImage ? "opacity-100 scale-100" : "opacity-0  scale-95"
          }`}
        />
      </div>

      {/* Heading */}
      <div className="flex-1 p-6 flex justify-center items-center">
        <h2
          className={`text-2xl md:text-3xl font-bold max-w-md text-center md:text-left transform transition-all duration-700 ease-in-out ${
            showText ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {slides[current].heading}
        </h2>
      </div>
      {/* Carousel Dots */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-8">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                current === index
                  ? "bg-red-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
