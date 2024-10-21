import React, { useRef } from "react";
import Logo from "./../../assets/Logo.png";

export default function HospitalBranches() {
  const imgsRef = useRef(null);

  const scrollLeft = () => {
    if (imgsRef.current) {
      const scrollAmount = imgsRef.current.clientWidth / 3; // Adjust scroll distance as needed
      imgsRef.current.scrollTo({
        left: imgsRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (imgsRef.current) {
      const scrollAmount = imgsRef.current.clientWidth / 3; // Adjust scroll distance as needed
      imgsRef.current.scrollTo({
        left: imgsRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-20 px-[130px] flex flex-col relative items-center  font-[600]">
      <h1 className="text-[#774B06] text-[34px] font-[700]">
        Hospital Branches
      </h1>
      <p className="text-[#CA7B00] text-[20px] font-[600]">
        12+ branches allover India
      </p>

      <div
        className=" w-full overflow-x-scroll  flex gap-6  justify-  hidescrollbar "
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
        ref={imgsRef}
      >
        {[...Array(10)].map((_, index) => (
          <div
            className="w-[400px] shrink-0 flex flex-col border-[1px] rounded-[8px] mt-10"
            style={{ scrollSnapAlign: "center" }}
          >
            <div className="p-3 bg-[#FF1F000D] relative">
              <h1 className="text-[#101828] text-[20px]">
                Lorem ipsum dolor sit amet{" "}
              </h1>
              <h1 className="text-[#BB760B] text-[14px]">Thiruvananthapuram</h1>
              <div
                className="absolute w-[90px] h-[90px] bg-white flex items-center justify-center rounded-full right-5 top-[-40px] border-[1px] border-[#FFE4BA] "
                id="taologo_shadow"
              >
                <img src={Logo} className=" w-[56px]" alt="" />
              </div>
            </div>
            <div className="py-5 px-3 flex flex-col gap-4">
              <div className="flex h-fit items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M3.75 16.5H14.25"
                    stroke="black"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.75 1.5H14.25"
                    stroke="black"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.75 16.5V13.371C12.7499 12.9732 12.5918 12.5917 12.3105 12.3105L9 9L5.6895 12.3105C5.40818 12.5917 5.25008 12.9732 5.25 13.371V16.5"
                    stroke="black"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.25 1.5V4.629C5.25008 5.02679 5.40818 5.40826 5.6895 5.6895L9 9L12.3105 5.6895C12.5918 5.40826 12.7499 5.02679 12.75 4.629V1.5"
                    stroke="black"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex justify-between flex-col">
                  <h1 className="text-[#333] text-[14px]">8:00 AM - 5:30 PM</h1>
                  <h1 className="text-[#7E7E7E] font-[500] text-[12px]">
                    Working Hours
                  </h1>
                </div>
              </div>

              {/* <div className='flex h-fit items-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.75 15H14.25M1.5 3L3.75 12H14.25L16.5 3L12 8.25L9 3L6 8.25L1.5 3Z" stroke="black" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                          <div className='flex justify-between flex-col'>
                              <h1 className='text-[#333] text-[14px]'>Dietary Restrictions & Cafeteria</h1>
                              <h1 className='text-[#7E7E7E] font-[500] text-[12px]'>Speciality</h1>
                          </div>
                  </div> */}

              <div className="flex  gap-2">
                <button className="bg-[rgba(46,47,42,0.05)] hover:bg-[rgba(46,47,42,0.24)] hovertrans px-5 py-3 border-[1px] border-[rgba(46,47,42,0.12)] rounded-[4px]">
                  Book Appointment
                </button>
                <button className="bg-[#147B141A] hover:bg-[rgba(20,123,20,0.24)] hovertrans h-[50px] w-[50px] flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_71_8566)">
                      <path
                        d="M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z"
                        stroke="#147B14"
                        stroke-width="1.7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_71_8566">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="bg-[#1858D41A] hover:bg-[rgba(24,88,212,0.24)]  hovertrans h-[50px] w-[50px] flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z"
                      stroke="#1858D4"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 5.25L9.7725 9.525C9.54095 9.67007 9.27324 9.74701 9 9.74701C8.72676 9.74701 8.45905 9.67007 8.2275 9.525L1.5 5.25"
                      stroke="#1858D4"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          className="absolute top-[310px] left-[50px] z-10"
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
          className="absolute top-[310px] right-[50px] z-10"
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
    </div>
  );
}
