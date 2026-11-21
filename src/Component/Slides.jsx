
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Every Plate Has a",
      sub_title: "Purpose",
      color: "bg-[#718C68]",
      image: "/images/hands-sharing-food.jpeg",
    },
    {
      id: 2,
      title: "A Little Extra Can",
      sub_title: "Mean a Lot",
      color: "bg-[#718C68]",
      image: "/images/LittleExtra.webp",
    },
    {
      id: 3,
      title: "Good Food Deserves Another",
      sub_title: "Tomorrow",
      color: "bg-[#718C68]",
      image: "/images/ShareaPlate.jpg",
    },
    {
      id: 4,
      title: "Give Every Bite a Brighter",
      sub_title: "Future",
      color: "bg-[#718C68]",
      image: "/images/ShareaPlate.jpg",
    },
    {
      id: 5,
      title: "More Than Food,",
      sub_title: "A Future",
      color: "bg-[#718C68]",
      image: "/images/ShareaPlate.jpg",
    },
    {
      id: 6,
      title: "There's Always a Place for",
      sub_title: "Good Food",
      color: "bg-[#718C68]",
      image: "/images/ShareaPlate.jpg",
    },
    {
      id: 7,
      title: "The Journey of Food Should",
      sub_title: "End in a Smile",
      color: "bg-[#718C68]",
      image: "/images/ShareaPlate.jpg",
    },
  ];

  // Next Slide
  const nextSlide = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatic Sliding
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  return (
    <div
      className="w-full flex items-center justify-center py-16 mt-8 overflow-hidden relative"
      style={{
        background:
          "linear-gradient(to bottom right, #E8E3CF, #F0EBDD, #DDE3D3)",
      }}
    >
      {/* Previous Button */}

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 md:left-12 z-30
        w-10 h-10 md:w-12 md:h-12
        rounded-full bg-[#405B43] text-white
        flex items-center justify-center
        hover:bg-[#B68C63] hover:scale-110
        transition-all duration-300 shadow-lg"
      >
        <img
          src="/images/icons8-previous-48.png"
          alt="Previous slide"
          className="w-8 h-8 pointer-events-none"
        />
      </button>

      {/* Slides Container */}

      <div className="flex items-center justify-center gap-6">
        {[-1, 0, 1].map((offset) => {
          const slideIndex =
            (currentIndex + offset + slides.length) % slides.length;

          const slide = slides[slideIndex];

          const isCenter = offset === 0;

          return (
            <motion.div
              key={slide.id}
              layout
              transition={{
                layout: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              animate={{
                scale: isCenter ? 1.1 : 0.85,
                y: isCenter ? -10 : 0,
                opacity: isCenter ? 1 : 0.65,
              }}
              whileHover={{
                scale: isCenter ? 1.15 : 0.95,
              }}
              className={`
                group
                ${slide.color}
                flex-shrink-0
                w-[130px] md:w-[400px]
                h-[200px] md:h-[280px]
                rounded-2xl
                text-white font-bold text-xl text-center p-4
                cursor-pointer
                transition-shadow duration-500
                ${
                  isCenter
                    ? "z-20 shadow-[0_20px_45px_rgba(0,0,0,0.25)] border-2 border-[#E8E3CF]"
                    : "shadow-md z-0"
                }
              `}
            >
              {/* Image Hover Effect */}

              <img
                src={slide.image}
                alt={slide.title}
                className="
                  w-40 h-32 object-cover block mx-auto mt-4 rounded-lg
                  transition-all duration-500 ease-in-out
                  group-hover:scale-110
                  group-hover:shadow-xl
                "
              />

              {/* Title Hover Effect */}

              <h2
                className="
                  mt-4 text-base md:text-xl
                  transition-all duration-300
                  group-hover:text-1xl
                "
              >
                {slide.title}
              </h2>

              {/* Subtitle Hover Effect */}

              <h2
                className="
                  text-[#E8C99F] text-base md:text-xl
                  transition-all duration-300
                  group-hover:text-1xl
                "
              >
                {slide.sub_title}
              </h2>
            </motion.div>
          );
        })}
      </div>

      {/* Next Button */}

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 md:right-12 z-30
        w-10 h-10 md:w-12 md:h-12
        rounded-full bg-[#405B43] text-white
        flex items-center justify-center
        hover:bg-[#B68C63] hover:scale-110
        transition-all duration-300 shadow-lg"
      >
        <img
          src="/images/icons8-next-page-48.png"
          alt="Next slide"
          className="w-8 h-8 pointer-events-none"
        />
      </button>
    </div>
  );
};

export default Slides;
