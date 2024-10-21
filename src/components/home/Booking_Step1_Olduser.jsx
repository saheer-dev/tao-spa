import React, { useContext, useRef, useState } from "react";
import { Context } from "../context/Context";

export default function Booking_Step1_Olduser() {
  const { step, setStep } = useContext(Context);

  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    // Update the OTP value
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move to the next input field or rewind to the previous one
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="w-full flex gap-2 py-5 border-b-[1px] border-[#D1D1D1]">
        <div className="w-[25%] flex flex-col gap-2">
          <h1 className="text-[16px] text-[#333]">Login</h1>
          <div className="bg-[#D3860E] rounded-l-[4px] h-2"></div>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <h1 className="text-[16px] text-[#333]">Patient Details </h1>
          <div className="bg-[rgba(211,134,14,0.21)] h-2"></div>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <h1 className="text-[16px] text-[#333]">Hospital & Doctor </h1>
          <div className="bg-[rgba(211,134,14,0.21)] h-2"></div>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <h1 className="text-[16px] text-[#333]">Slot Booking</h1>
          <div className="bg-[rgba(211,134,14,0.21)] rounded-r-[4px]  h-2"></div>
        </div>
      </div>

      <div className="font-[600] h-[350px] relative py-5">
        <form action="">
          <h1 className="text-[#BB760B] mt-4 text-[16px]">Verification</h1>
          <div className="flex w-full gap-6">
            <div className="mt-2 w-[30%]">
              <h1 className="text-[14px]">Phone Number </h1>
              <input
                className="mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                type="text"
                placeholder="Enter Your Phone Number"
              />
              <div className="flex self-end w-full justify-end">
                <button className=" text-[14px] font-[400] w-[74px] bg-[#999] rounded-[4px] text-white mt-1 ">
                  Verify{" "}
                </button>
              </div>
            </div>

            <div className="mt-2 w-[30%]">
              <h1 className="text-[14px]">Enter OTP </h1>

              <div className="flex gap-2 mt-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="w-[40px] h-[40px]" id="f400">
                    <input
                      maxLength={1}
                      value={otpValues[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="w-full font-[400] h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-[#D0D5DD] text-[14px] bg-white focus:bg-gray-50 focus:ring-1 ring-[#BB760B]"
                      type="text"
                      ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex self-end w-full justify-start">
                <button className=" text-[12px] font-[400]  rounded-[4px] text-[#939393] mt-1 ">
                  Enter the 4 digit OTP code we sent you{" "}
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="my-5 h-[1px] w-full bg-[#D1D1D1] mt-[50px] mb-[100px]"></div>

        <div className="flex items-end justify-end h-fit absolute right-0 bottom-3 gap-3 ">
          {/* <button className='border-[1px] border-[#989898] text-[#989898] text-[18px] px-5 py-[6px] rounded-full flex gap-2 items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path d="M6.17984 0.5L7.58984 1.91L3.00984 6.5L7.58984 11.09L6.17984 12.5L0.179844 6.5L6.17984 0.5Z" fill="#989898"/>
                </svg>
                Back
                </button> */}
          <button
            onClick={() => {
              setStep(2);
            }}
            className=" bg-[#B08853] hover:bg-[#C27B1D] hovertrans text-white text-[18px] px-5 py-[6px] rounded-full flex gap-2 items-center "
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
            >
              <path
                d="M1.99984 0.5L0.589844 1.91L5.16984 6.5L0.589844 11.09L1.99984 12.5L7.99984 6.5L1.99984 0.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
