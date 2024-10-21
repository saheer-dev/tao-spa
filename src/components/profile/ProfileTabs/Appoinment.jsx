import React from "react";
import ProfilePic from "./../../../assets/profilpic.png";
export default function Appoinment() {
  return (
    <div id="appoinmentGrid">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="p-4 w-full rounded-[8px] bg-white mt-6"
          id="appoinmentShadow"
        >
          <div className="flex justify-between">
            <img src={ProfilePic} className="w-[68px]" alt="" />
            <p className="text-[#333] text-[16px] p-1 h-fit bg-[rgba(255,175,50,0.21)] rounded-[5px]">
              DHI788239
            </p>
          </div>
          <div className="mt-3">
            <h1 className="text-[#333] text-[22px] font-[600]">
              Anandhu S Saran
            </h1>
            <p className="text-[#A4A4A4] text-[14px]">Doctor Department </p>
          </div>
          <div className="h-[1px] bg-[#E0E0E0] my-3"></div>

          <div className="flex flex-col gap-3">
            <p className="text-[#333] text-[16px] flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.66699 1.66699V5.00033"
                  stroke="#BB760B"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.333 1.66699V5.00033"
                  stroke="#BB760B"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                  stroke="#BB760B"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 8.33301H17.5"
                  stroke="#BB760B"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              23 Nov 2023
            </p>
            <p className="text-[#333] text-[16px] flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_48_4413)">
                  <path
                    d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
                    stroke="#BB760B"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 5V10H6.25"
                    stroke="#BB760B"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_4413">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              12:34 PM
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-[#A4A4A4] text-[14px]">
              Treatment: <span className="text-[#333]">Orto</span>{" "}
            </p>
            <p className="text-[#008000] text-[12px] font-[600]">Confirmed</p>
          </div>
        </div>
      ))}
    </div>
  );
}
