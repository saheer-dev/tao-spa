import React, { useContext, useEffect, useRef, useState } from "react";
import Booking_Step1 from "./Booking_Step1";
import Booking_Step2 from "./Booking_Step2";
import Booking_Step3 from "./Booking_Step3";
import Booking_Step4 from "./Booking_Step4";
import Booking_Step1_Olduser from "./Booking_Step1_Olduser";
import { Context } from "../context/Context";
import Booking_submit from "./Booking_submit";

export default function BookAppointment() {
  const { step, setStep, usertype, setUsertype, appsubmit, setAppsubmit } =
    useContext(Context);

  // console.log(step);

  useEffect(() => {
    if (appsubmit) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [appsubmit]);

  let stepComponent;

  if (step === 1) {
    stepComponent = <Booking_Step1 />;
  } else if (step === 2) {
    stepComponent = <Booking_Step2 />;
  } else if (step === 3) {
    stepComponent = <Booking_Step3 />;
  } else if (step === 4) {
    stepComponent = <Booking_Step4 />;
  } else if (step === 5) {
    stepComponent = <Booking_Step1_Olduser />;
  }

  return (
    <div
      className="h- relative  w-screen  flex flex-col font-[600] items-center pt-[75px] py-[50px]"
      id="bookapp_bggradient"
    >
      <h1 className="text-[#774B06] text-[34px] font-[700]" id="book_app">
        Book Appointment
      </h1>
      <p className="text-[#333] text-[18px] font-[600]">
        Easy and Hassle Free Appointment Booking.
      </p>

      <div className=" w-[70vw] mt-6  rounded-[12px] overflow-hidden">
        <div className="flex  justify-between px-10 py-4 text-white   bg-[#D3860E]">
          <h1 className="text-[22px] font-[]">Schedule Appointment </h1>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setUsertype(1);
                setStep(1);
              }}
              className={
                usertype == 1
                  ? "text-[14px] flex items-center   gap-1  p-3 py-2 border-[1px] border-[rgba(255,255,255,0.50)] bg-[rgba(255,255,255,0.10)] rounded-[4px]"
                  : " flex items-center gap-1 text-[14px] p-3 py-2 hover:bg-[rgba(255,255,255,0.10)] hovertrans border-[1px] border-[rgba(255,255,255,0.50)] rounded-[4px]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <rect
                  x="1"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  fill="#F9F5FF"
                />
                <rect
                  x="1"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  className={
                    usertype == 1
                      ? "stroke-[#774B06] "
                      : "stroke-[rgba(164,160,160,0.5)] "
                  }
                />
                <circle
                  cx="10.5"
                  cy="10"
                  r="3.75"
                  className={usertype == 1 ? "fill-[#774B06] " : " "}
                />
              </svg>
              New Patient{" "}
            </button>
            <button
              onClick={() => {
                setUsertype(2);
                setStep(5);
              }}
              className={
                usertype == 2
                  ? "text-[14px] flex items-center   gap-1  p-3 py-2 border-[1px] border-[rgba(255,255,255,0.50)] bg-[rgba(255,255,255,0.10)] rounded-[4px]"
                  : " flex items-center gap-1 text-[14px] p-3 py-2 border-[1px] hover:bg-[rgba(255,255,255,0.10)] hovertrans border-[rgba(255,255,255,0.50)] rounded-[4px]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <rect
                  x="1"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  fill="#F9F5FF"
                />
                <rect
                  x="1"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  className={
                    usertype == 2
                      ? "stroke-[#774B06] "
                      : "stroke-[rgba(164,160,160,0.5)] "
                  }
                />
                <circle
                  cx="10.5"
                  cy="10"
                  r="3.75"
                  className={usertype == 2 ? "fill-[#774B06] " : " "}
                />
              </svg>{" "}
              Old Patient{" "}
            </button>
          </div>
        </div>
        <div className="h-full w-full bg-white  px-10 py-6 ">
          {/* <p className='text-[#CA7B00] px-2 py-1 border-[1px] bg-[rgba(255,182,68,0.08)] border-[rgba(158,104,18,0.50)] w-fit rounded-[4px] text-[14px] font-[500]'>Continue with “New Patient” if you want to setup an new appointment. </p> */}

          {stepComponent}
        </div>
      </div>

      <div className={appsubmit ? "fixed   top-0 left-0 z-50" : "hidden"}>
        <Booking_submit />
      </div>
    </div>
  );
}
