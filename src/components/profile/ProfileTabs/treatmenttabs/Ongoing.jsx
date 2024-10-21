import React, { useContext } from "react";
import { Context } from "../../../context/Context";

export default function Ongoing() {
  const { treatmenttab, setTreatmenttab } = useContext(Context);

  return (
    <div className=" mt-4 gap-4" id="ongoingGrid">
      <div className="bg-white border-[1px] h-fit rounded-[5px] border-[#CECECE] p-3">
        <h1 className=" text-[16px] font-[600] text-[#333] ">
          Aromatherapy Hot Stone Massage
        </h1>
        <p className=" text-[14px]">Category</p>
        <div className="flex gap-1  text-[14px]">
          <p>
            From: <span>24- 12-2024</span>
          </p>
          <p>
            To: <span>24- 12-2024</span>
          </p>
        </div>
        <p className=" text-[14px]">Treatment Id: 23JDH48</p>
        <p className="text-[#00F] font-[500] text-[12px] mt-1 bg-[#F5F5FF] rounded-[6px] w-fit px-[6px] py-1">
          15 days - Appointment Interval
        </p>
        <div className="h-[1px] bg-[#D5D5D5] my-3"></div>
        <div>
          <h1 className="text-[14px] text-[#333] font-[600]">
            7 of 25 - Appointment Completed
          </h1>
          <div className="bg-[rgba(255,138,0,0.24)] w-full h-[6px] mt-2 mb-3 rounded-full overflow-hidden">
            <div className="bg-[#FF8A00] w-[40%] rounded-r-full h-full"></div>
          </div>

          <p className="text-[12px] text-[#333]">Up-Coming Appointment </p>

          <div className="flex items-center text-[#333] mt-1 bg-[#FCFCFC] border-[1px] border-[rgba(0,0,0,0.12)] p-1 px-[6px] rounded-[4px]">
            <div className="h-[30px] w-[30px] bg-[#999] mr-2"></div>
            <div className="pr-2 border-r-[1px] border-[#E6E6E6] flex flex-col justify-between">
              <h1 className="text-[14px]">Anandhu S Saran</h1>
              <p className="text-[10px] text-[#999]">Nero Therapist</p>
            </div>
            <p className="text-[12px] flex items-center  gap-1 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <g clip-path="url(#clip0_94_499)">
                  <path
                    d="M5.02344 1.43555V3.50225"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.15723 1.43555V3.50225"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.7072 2.46973H3.47378C2.90308 2.46973 2.44043 2.93237 2.44043 3.50308V10.7365C2.44043 11.3072 2.90308 11.7699 3.47378 11.7699H10.7072C11.2779 11.7699 11.7406 11.3072 11.7406 10.7365V3.50308C11.7406 2.93237 11.2779 2.46973 10.7072 2.46973Z"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.44043 5.56934H11.7406"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_499">
                    <rect
                      width="12.4002"
                      height="12.4002"
                      fill="white"
                      transform="translate(0.889648 0.402344)"
                    />
                  </clipPath>
                </defs>
              </svg>
              24- 12-2024
            </p>
            <p className="text-[12px] flex items-center  gap-1 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clip-path="url(#clip0_94_505)">
                  <path
                    d="M6.51343 11.769C9.36695 11.769 11.6802 9.45581 11.6802 6.6023C11.6802 3.74878 9.36695 1.43555 6.51343 1.43555C3.65991 1.43555 1.34668 3.74878 1.34668 6.6023C1.34668 9.45581 3.65991 11.769 6.51343 11.769Z"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.5127 3.50293V6.60298L8.5794 5.56963"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_505">
                    <rect
                      width="12.4002"
                      height="12.4002"
                      fill="white"
                      transform="translate(0.3125 0.402344)"
                    />
                  </clipPath>
                </defs>
              </svg>
              12:00 PM
            </p>
          </div>
          <h1 className="text-[13px] my-3 text-[#222]  font-[600]">
            ₹ 10.500 / ₹25,000 Paid
          </h1>
          <button
            onClick={() => setTreatmenttab(3)}
            className="bg-[#D3860E] w-full py-3 text-white font-[600] rounded-[6px]"
          >
            Track Now
          </button>
        </div>
      </div>

      <div className="bg-white border-[1px] h-fit  rounded-[5px] border-[#CECECE] p-3">
        <h1 className=" text-[16px] font-[600] text-[#333] ">
          Aromatherapy Hot Stone Massage
        </h1>
        <p className=" text-[14px]">Category</p>
        <div className="flex gap-1  text-[14px]">
          <p>
            From: <span>24- 12-2024</span>
          </p>
          <p>
            To: <span>24- 12-2024</span>
          </p>
        </div>
        <p className=" text-[14px]">Treatment Id: 23JDH48</p>

        <p className="text-[#00F] font-[500] text-[12px] mt-1 bg-[#F5F5FF] rounded-[6px] w-fit px-[6px] py-1">
          1 Appointment
        </p>
        <div className="h-[1px] bg-[#D5D5D5] my-3"></div>
        <div>
          {/* <h1 className="text-[14px] text-[#333] font-[600]">
            7 of 25 - Appointment Completed
          </h1>
          <div className="bg-[rgba(255,138,0,0.24)] w-full h-[6px] mt-2 mb-3">
            <div className="bg-[#FF8A00] w-[40%] rounded-r-full h-full"></div>
          </div> */}

          <p className="text-[12px] text-[#333]">Appointment </p>

          <div className="flex items-center text-[#333] mt-1 bg-[#FCFCFC] border-[1px] border-[rgba(0,0,0,0.12)] p-1 px-[6px] rounded-[4px]">
            <div className="h-[30px] w-[30px] bg-[#999] mr-2"></div>
            <div className="pr-2 border-r-[1px] border-[#E6E6E6] flex flex-col justify-between">
              <h1 className="text-[14px]">Anandhu S Saran</h1>
              <p className="text-[10px] text-[#999]">Nero Therapist</p>
            </div>
            <p className="text-[12px] flex items-center  gap-1 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <g clip-path="url(#clip0_94_499)">
                  <path
                    d="M5.02344 1.43555V3.50225"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.15723 1.43555V3.50225"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.7072 2.46973H3.47378C2.90308 2.46973 2.44043 2.93237 2.44043 3.50308V10.7365C2.44043 11.3072 2.90308 11.7699 3.47378 11.7699H10.7072C11.2779 11.7699 11.7406 11.3072 11.7406 10.7365V3.50308C11.7406 2.93237 11.2779 2.46973 10.7072 2.46973Z"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.44043 5.56934H11.7406"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_499">
                    <rect
                      width="12.4002"
                      height="12.4002"
                      fill="white"
                      transform="translate(0.889648 0.402344)"
                    />
                  </clipPath>
                </defs>
              </svg>
              24- 12-2024
            </p>
            <p className="text-[12px] flex items-center  gap-1 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clip-path="url(#clip0_94_505)">
                  <path
                    d="M6.51343 11.769C9.36695 11.769 11.6802 9.45581 11.6802 6.6023C11.6802 3.74878 9.36695 1.43555 6.51343 1.43555C3.65991 1.43555 1.34668 3.74878 1.34668 6.6023C1.34668 9.45581 3.65991 11.769 6.51343 11.769Z"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.5127 3.50293V6.60298L8.5794 5.56963"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_505">
                    <rect
                      width="12.4002"
                      height="12.4002"
                      fill="white"
                      transform="translate(0.3125 0.402344)"
                    />
                  </clipPath>
                </defs>
              </svg>
              12:00 PM
            </p>
          </div>
          <h1 className="text-[13px] text-[#008000] my-3  font-[600]">
            ₹25,000 Paid
          </h1>
          <button
            onClick={() => setTreatmenttab(3)}
            className=" bg-[#D3860E] w-full py-3 text-white font-[600] rounded-[6px]"
          >
            Track Now
          </button>
        </div>
      </div>

      <div className="bg-white border-[1px] h-fit  rounded-[5px] border-[#CECECE] p-3">
        <h1 className=" text-[16px] font-[600] text-[#333] ">
          Aromatherapy Hot Stone Massage
        </h1>
        <p className=" text-[14px]">Category</p>
        <div className="flex gap-1  text-[14px]">
          <p>
            From: <span>24- 12-2024</span>
          </p>
          <p>
            To: <span>24- 12-2024</span>
          </p>
        </div>
        <p className=" text-[14px]">Treatment Id: 23JDH48</p>

        <p className="text-[#00F] font-[500] text-[12px] mt-1 bg-[#F5F5FF] rounded-[6px] w-fit px-[6px] py-1">
          1 Appointment
        </p>
        <div className="h-[1px] bg-[#D5D5D5] my-3"></div>
        <div>
          {/* <h1 className="text-[14px] text-[#333] font-[600]">
            7 of 25 - Appointment Completed
          </h1>
          <div className="bg-[rgba(255,138,0,0.24)] w-full h-[6px] mt-2 mb-3">
            <div className="bg-[#FF8A00] w-[40%] rounded-r-full h-full"></div>
          </div> */}

          <p className="text-[12px] text-[#333]">Appointment </p>

          <div className="flex items-center text-[#333] mt-1 bg-[#FCFCFC] border-[1px] border-[rgba(0,0,0,0.12)] p-1 px-[6px] rounded-[4px]">
            <div className="h-[30px] w-[30px] bg-[#999] mr-2"></div>
            <div className="pr-2 border-r-[1px] border-[#E6E6E6] flex flex-col justify-between">
              <h1 className="text-[14px]">Anandhu S Saran</h1>
              <p className="text-[10px] text-[#999]">Nero Therapist</p>
            </div>
            <p className="text-[12px] flex items-center  gap-1 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <g clip-path="url(#clip0_94_499)">
                  <path
                    d="M5.02344 1.43555V3.50225"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.15723 1.43555V3.50225"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.7072 2.46973H3.47378C2.90308 2.46973 2.44043 2.93237 2.44043 3.50308V10.7365C2.44043 11.3072 2.90308 11.7699 3.47378 11.7699H10.7072C11.2779 11.7699 11.7406 11.3072 11.7406 10.7365V3.50308C11.7406 2.93237 11.2779 2.46973 10.7072 2.46973Z"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.44043 5.56934H11.7406"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_499">
                    <rect
                      width="12.4002"
                      height="12.4002"
                      fill="white"
                      transform="translate(0.889648 0.402344)"
                    />
                  </clipPath>
                </defs>
              </svg>
              24- 12-2024
            </p>
            <p className="text-[12px] flex items-center  gap-1 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clip-path="url(#clip0_94_505)">
                  <path
                    d="M6.51343 11.769C9.36695 11.769 11.6802 9.45581 11.6802 6.6023C11.6802 3.74878 9.36695 1.43555 6.51343 1.43555C3.65991 1.43555 1.34668 3.74878 1.34668 6.6023C1.34668 9.45581 3.65991 11.769 6.51343 11.769Z"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.5127 3.50293V6.60298L8.5794 5.56963"
                    stroke="black"
                    stroke-width="1.17113"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_505">
                    <rect
                      width="12.4002"
                      height="12.4002"
                      fill="white"
                      transform="translate(0.3125 0.402344)"
                    />
                  </clipPath>
                </defs>
              </svg>
              12:00 PM
            </p>
          </div>
          <h1 className="text-[13px] text-[#008000] my-3  font-[600]">
            ₹25,000 Paid
          </h1>
          <button
            onClick={() => setTreatmenttab(3)}
            className=" bg-[#D3860E] w-full py-3 text-white font-[600] rounded-[6px]"
          >
            Track Now
          </button>
        </div>
      </div>
    </div>
  );
}
