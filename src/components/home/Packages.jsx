import React, { useRef } from "react";

export default function Packages() {
  const Carousel = useRef(null);

  const scrollLeft = () => {
    if (Carousel.current) {
      const scrollAmount = Carousel.current.clientWidth / 3; // Adjust scroll distance as needed
      Carousel.current.scrollTo({
        left: Carousel.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (Carousel.current) {
      const scrollAmount = Carousel.current.clientWidth / 3; // Adjust scroll distance as needed
      Carousel.current.scrollTo({
        left: Carousel.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const packages = [
    {
      name: "Classic Ayurveda Massage",
      p: "Ideal for individuals who who need advanced features and tools for client work.",
      price: "$25",
    },
    {
      name: "Swedish massage",
      p: "Ideal for individuals who who need advanced features and tools for client work.",
      price: "$25",
    },
    {
      name: "Aroma massage",
      p: "Ideal for individuals who who need advanced features and tools for client work.",
      price: "$25",
    },
    {
      name: "Deep tissue massage",
      p: "Ideal for individuals who who need advanced features and tools for client work.",
      price: "$25",
      offer: "20 % OFF",
    },
    {
      name: "Swedish massage",
      p: "Ideal for individuals who who need advanced features and tools for client work.",
      price: "$25",
    },
    {
      name: "Aroma massage",
      p: "Ideal for individuals who who need advanced features and tools for client work.",
      price: "$25",
    },
    {
      name: "Deep tissue massage",
      p: "Ideal for individuals who who need advanced features and tools for client work.",
      price: "$25",
    },
  ];

  // console.log(packages.length);
  return (
    <div
      className="pt-20 pb-0 px-[130px] flex flex-col relative items-center justify-center"
      id="packages"
    >
      <h1 className="text-[34px] text-[#774B06] font-[700]">Packages</h1>
      <div
        className=" w-[85vw] overflow-x-scroll  flex  justify-  mt-10 hidescrollbar "
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
        ref={Carousel}
      >
        {packages.map((p, index) => (
          <div
            key={index}
            className="py-6  w-[300px] relative shrink-0 rounded-[12px] px-4  my-[20px] mx-3 flex flex-col items-start"
            style={{ scrollSnapAlign: "center" }}
            // id="ayurGrid_shadow"
            id="whytao_shadow"
          >
            {p.offer ? (
              <p className="absolute rounded-full inset-0 left-[35%] top-[-20px] px-4 py-1 bg-[#DFD] h-fit w-fit border-[1px] border-[rgba(0,128,0,0.32)]">
                {p.offer}
              </p>
            ) : (
              <></>
            )}
            <h1 className="text-[#333] text-[24px] font-[700] mb-1 leading-[110%]">
              Classic Ayurveda Massage
            </h1>
            <p className="text-[12px]">Category </p>
            <p className="text-[#D76614] mt-3 text-[12px] bg-[rgba(255,165,0,0.12)] p-[6px] rounded-[9px]">
              12 Days
            </p>
            <p className="text-[#333] text-[28px] font-[700] mt-4">
              ₹300 - ₹450
            </p>
            <p className="text-[#CA7B00] text-[12px] font-[700] mt-1">
              6 Appointment's{" "}
            </p>
            <p
              className="w-full text-[14px] font-[400] text-[#333] leading-[22px] border-b-[1px] border-[#DEDEDE] mt-3 pb-4"
              id="ayur"
            >
              Combines massage with the use of essential oils to promote
              relaxation and overall well-being.
            </p>
            <div className="flex w-full items- py-4 text-[#534126] text-[14px] font-[500] flex-col gap-3 border-b-[1px] border-[#DEDEDE]">
              <h1 className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6673 5L7.50065 14.1667L3.33398 10"
                    stroke="#333333"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Hot Stone Massage
              </h1>
              <h1 className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6673 5L7.50065 14.1667L3.33398 10"
                    stroke="#333333"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Seated massage typically
              </h1>
              <h1 className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6673 5L7.50065 14.1667L3.33398 10"
                    stroke="#333333"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Deep Tissue Steamed Massage
              </h1>
              <h1 className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6673 5L7.50065 14.1667L3.33398 10"
                    stroke="#333333"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Thai technique
              </h1>
              <h1 className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6673 5L7.50065 14.1667L3.33398 10"
                    stroke="#333333"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Thai technique
              </h1>
              <div className="flex items-center gap-1 text-[12px] -mt-3 self-end">
                View all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                >
                  <path
                    d="M10 1.5876L8.825 0.412598L5 4.22926L1.175 0.412597L-5.13609e-08 1.5876L5 6.5876L10 1.5876Z"
                    fill="#534126"
                  />
                </svg>
              </div>
            </div>
            {/* <div className="text-center">
              <h1 className="text-[#333] text-[56px] font-[600]">$250</h1>
              <p> Month</p>
            </div> */}
            <button className="text-[#CA7B00] hover:text-white hover:bg-[#CA7B00] hovertrans py-2 w-full border-[1px] border-[#CA7B00]">
              Get Started Now
            </button>
          </div>
        ))}
      </div>

      <button
        className="absolute top-[420px] left-[50px] z-10"
        onClick={scrollLeft}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_71_8485)">
            <path
              d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_71_8485">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button
        className="absolute top-[420px] right-[50px] z-10"
        onClick={scrollRight}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_71_8490)">
            <path
              d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_71_8490">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}
