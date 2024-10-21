import React, { useContext, useEffect, useRef, useState } from "react";

import Login_img from "./../../assets/login_img.png";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { loginPopup, setLoginPopup } = useContext(Context);
  const navigate = useNavigate();
  //* OTP
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (loginPopup) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [loginPopup]);

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

  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setLoginPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setLoginPopup]);

  return (
    <div className="h-screen  w-screen bg-black/60 flex items-center justify-center">
      <div
        ref={boxRef}
        className="w-[60vw] bg-white min-h-[60vh] rounded-[12px] overflow-hidden flex"
      >
        <div className="w-[45%] min-w-[300px] bg-[#FFE7EE] flex items-center justify-center">
          <img
            src={Login_img}
            className="w-[100%] h-[100%] min-w-[200px] mx-auto"
            alt=""
          />
        </div>
        <div className="w-[60%] px-6 py-8 min-w-[300px] h-full my-auto ">
          <div className="w-full h-full  ">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-[#101828]  text-[36px]">Login</h1>
              </div>
              <button
                onClick={() => {
                  setLoginPopup(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_412_51422)">
                    <path
                      d="M25.3337 8.54797L23.4537 6.66797L16.0003 14.1213L8.54699 6.66797L6.66699 8.54797L14.1203 16.0013L6.66699 23.4546L8.54699 25.3346L16.0003 17.8813L23.4537 25.3346L25.3337 23.4546L17.8803 16.0013L25.3337 8.54797Z"
                      fill="#323232"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_412_51422">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-2 mt-9">
              <p id="f500" className="text-[14px] text-[#333]">
                Phone number
              </p>
              <div className="flex items-center border-[1px] rounded-[8px] bg-white border-[#D0D5DD]">
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className=" font-[400] w-full text-[14px] placeholder:text-[#A3A3A3] bg-white py-[10px] px-[14px] outline-none rounded-[8px] "
                />
              </div>
            </div>

            {/* OTP */}
            <div className="flex flex-col gap-2 mt-9">
              <p id="f500" className="text-[14px] text-[#344054]">
                Enter OTP
              </p>
              <div className="flex gap-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="w-[50px] h-[50px]">
                    <input
                      maxLength={1}
                      value={otpValues[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="w-full font-[400] h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-[#D0D5DD] text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#B51F4E]"
                      type="text"
                      placeholder="-"
                      ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                    />
                  </div>
                ))}
              </div>
              <p className="font-[400] text-[#939393] text-[12px] italic">
                Enter the 4 digit OTP code we sent you
              </p>
              <button
                id="f400"
                className="bg-[#B08853] hover:bg-[#D3860E] text-[20px] text-white w-full py-3 rounded-[8px] mt-8"
                onClick={() => {
                  setLoginPopup(false);
                  navigate("/profile");
                }}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
