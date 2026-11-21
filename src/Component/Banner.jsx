
import React from "react";

const Banner = () => {
  return (
    <section
      className="relative flex items-center w-full h-[600px] mt-[50px]
      bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/0a21d873-3192-4b9f-b738-2bc1ba1a800e-Photoroom (1).png')"
      }}
    >

      {/* BLACK TRANSPARENT OVERLAY */}
      <div className="absolute inset-0 bg-black/35 z-0"></div>

      {/* LEFT SIDE - OVERLAPPING FOOD IMAGE */}
{/* LEFT SIDE - OVERLAPPING FOOD IMAGE */}
<div className="relative z-10 w-1/2 h-full
                flex items-center justify-center">

  <img
  src="/images/Overlapping Grilled Chicken Salad Bowls.png"
  alt="Grilled Chicken Salad Bowls"
  className="
    w-[900px]
    h-[750px]
    max-w-none
    object-contain
    transition-transform
    rotate-1
    duration-500
    ease-in-out
    hover:scale-110
    cursor-pointer
  "
  style={{
    marginTop: "30px",
    marginLeft: "150px",
    marginBottom: "40px"
  }}
/>

</div>

      {/* RIGHT SIDE - CONTENT */}
      <div className="relative z-10 w-1/2 flex flex-col ml-60
                      justify-center pl-[80px] pr-[50px] py-[30px]">

        {/* MAIN HEADING */}
        <h1 className="text-5xl font-semibold leading-tight text-white">
          Together, We Can Make
        </h1>

        {/* HIGHLIGHTED HEADING */}
        <h1 className="text-5xl font-semibold italic leading-tight
                       text-[#E8C99F] pb-5">
          Every Meal Matter.
        </h1>

        {/* DESCRIPTION */}
        <p className="max-w-[520px] text-base leading-[1.8]
                      text-white/90 mb-[25px]">
          Every meal has the power to bring happiness and hope to someone.
          Let's connect people, share available food, and make every
          contribution count. A simple act of sharing today can create
          a better tomorrow.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-[15px]">

          <button className="
            px-[22px] py-[13px]
            border-2 border-[#405B43]
            rounded-md text-[15px] font-semibold
            bg-[#405B43] text-white
            cursor-pointer
            transition-all duration-300
            hover:bg-[#718C68]
            hover:border-[#718C68]
            hover:-translate-y-1
          ">
            Register as Food Partners
          </button>

          <button className="
            px-[22px] py-[13px]
            border-2 border-[#E8C99F]
            rounded-md text-[15px] font-semibold
            bg-transparent text-white
            cursor-pointer
            transition-all duration-300
            hover:bg-[#B68C63]
            hover:border-[#B68C63]
            hover:text-white
          ">
            Register as NGO
          </button>

        </div>

      </div>

    </section>
  );
};

export default Banner;
