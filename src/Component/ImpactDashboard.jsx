
import React, { useEffect, useRef, useState } from "react";

import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";

// Animated Counter
const AnimatedCounter = ({ value, suffix = "" }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {

    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 20);

    const timer = setInterval(() => {

      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }

    }, 20);

    return () => clearInterval(timer);

  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};


const ImpactDashboard = () => {

  const [hoveredCard, setHoveredCard] = useState(null);

  // Impact Data
  const ImpactData = [

    {
      id: 1,
      title: "Total Meals Shared",
      value: 12500,
      image: "/images/meals.png",
      sub_title: "+12% from last month",
      progress: 85,
      description:
        "Thousands of nutritious meals have been rescued and shared with people who need them.",
      suffix: "",
    },

    {
      id: 2,
      title: "Food Donor Partners",
      value: 250,
      image: "/images/partners.png",
      sub_title: "+8% from last month",
      progress: 70,
      description:
        "Restaurants, bakeries, and food businesses are joining our mission to reduce food waste.",
      suffix: "",
    },

    {
      id: 3,
      title: "Active NGOs",
      value: 85,
      image: "/images/ngo.png",
      sub_title: "+15% from last month",
      progress: 65,
      description:
        "Our NGO partners help distribute rescued food to communities and families.",
      suffix: "",
    },

    {
      id: 4,
      title: "Food Waste Reduced",
      value: 2400,
      image: "/images/waste.png",
      sub_title: "+10% from last month",
      progress: 90,
      description:
        "Surplus food is redirected from waste to meaningful meals, supporting a more sustainable environment.",
      suffix: " kg",
    },

  ];


  return (

    <section
      id="impact"
      className="w-full py-20 px-6 md:px-12
      bg-gradient-to-br from-[#E8E3CF] via-[#F0EBDD] to-[#DDE3D3]"
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >

        <span
          className="inline-block px-5 py-2 rounded-full
          bg-[#DDE3D3] text-[#405B43] text-sm font-semibold mb-4"
        >
          Our Community Impact
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#405B43]">
          Making Every Meal Count
        </h2>

        <p className="text-[#5D6256] mt-4 max-w-2xl mx-auto leading-7">
          Every meal shared creates an opportunity for change.
          Together, we are building stronger communities and a
          future with less food waste.
        </p>

      </motion.div>


      {/* Impact Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-7 max-w-7xl mx-auto"
      >

        {ImpactData.map((item, index) => (

          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >

            {/* Floating Hover Image Above Card */}
            <AnimatePresence>

              {hoveredCard === item.id && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-full left-0 w-full
                  mb-3 z-20 pointer-events-none"
                >

                  <img
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600"
                    alt="ShareAPlate food impact"
                    className="w-full h-40 object-cover
                    rounded-xl shadow-xl"
                  />

                </motion.div>

              )}

            </AnimatePresence>


            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-7 shadow-md
              hover:shadow-xl border border-[#DDE3D3]
              transition-shadow duration-300 cursor-pointer"
            >

              {/* Card Header */}
              <div className="flex items-center justify-between">

                <h3 className="text-[#65705E] font-semibold text-sm">
                  {item.title}
                </h3>

                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  className="w-12 h-12 rounded-xl bg-[#E8E3CF]
                  flex items-center justify-center"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />

                </motion.div>

              </div>


              {/* Animated Value */}
              <h2 className="text-3xl font-bold text-[#405B43] mt-7">

                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                />

              </h2>


              {/* Growth */}
              <p className="text-sm text-[#718C68] mt-3 font-medium">
                ↗ {item.sub_title}
              </p>


              {/* Progress Bar */}
              <div className="mt-6">

                <div
                  className="flex justify-between text-xs
                  text-[#73776B] mb-2"
                >
                  <span>Impact progress</span>
                  <span>{item.progress}%</span>
                </div>

                <div
                  className="w-full h-2 bg-[#E8E3CF]
                  rounded-full overflow-hidden"
                >

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${item.progress}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3 + index * 0.15,
                    }}
                    className="h-full bg-[#718C68] rounded-full"
                  />

                </div>

              </div>

            </motion.div>

          </div>

        ))}

      </div>


      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mt-14"
      >

        <h3 className="text-xl md:text-2xl font-bold text-[#405B43]">
          Every Contribution Makes a Difference.
        </h3>

        <p className="text-[#65705E] mt-2">
          Share more. Waste less. Create a better tomorrow.
        </p>

      </motion.div>

    </section>

  );

};

export default ImpactDashboard;
