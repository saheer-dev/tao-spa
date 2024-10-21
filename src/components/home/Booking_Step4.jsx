import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function Booking_Step4() {
  const { step, setStep, appsubmit, setAppsubmit } = useContext(Context);

  const [timeslot, setTimeslot] = useState(1);

  // const time_slots=['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM']
  const time_slots = [
    {
      id: 1,
      start: "9:00 AM",
      end: "9:30 AM",
    },
    {
      id: 2,
      start: "9:30 AM",
      end: "10:00 AM",
    },
    {
      id: 3,
      start: "10:00 AM",
      end: "10:30 AM",
    },
    {
      id: 4,
      start: "10:30 AM",
      end: "11:00 AM",
    },
    {
      id: 5,
      start: "11:00 AM",
      end: "11:30 AM",
    },
    {
      id: 6,
      start: "11:30 AM",
      end: "12:00 AM",
    },
  ];
  console.log(timeslot);

  return (
    <>
      <div className="w-full flex gap-2 py-5 border-b-[1px] border-[#D1D1D1]">
        <div className="w-[25%] flex flex-col gap-2">
          <h1 className="text-[16px] text-[#333]">Login</h1>
          <div className="bg-[#D3860E] rounded-l-[4px] h-2"></div>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <h1 className="text-[16px] text-[#333]">Patient Details </h1>
          <div className="bg-[#D3860E] h-2"></div>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <h1 className="text-[16px] text-[#333]">Hospital & Doctor </h1>
          <div className="bg-[#D3860E] h-2"></div>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <h1 className="text-[16px] text-[#333]">Slot Booking</h1>
          <div className="bg-[#D3860E] rounded-r-[4px]  h-2"></div>
        </div>
      </div>

      <div className="font-[600] h-[350px] relative py-5">
        <form action="">
          <h1 className="text-[#BB760B] text-[16px]">Select Slots </h1>
          <div className="flex w-full gap-6">
            <div className="mt-2 w-[30%]">
              <h1 className="text-[14px]">Date </h1>
              <input
                className="mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                type="date"
                placeholder="Enter Your First and Last Name"
              />
            </div>
          </div>

          {/* <h1 className='text-[#BB760B] mt-4 text-[16px]'>Select Time Slot</h1> */}
          <div className="flex flex-col w-full py-5 gap-3 mt-8 p-3 rounded-[12px] border-[1px] border-[#FFCD7F]">
            <h1 className="text-[14px]">Select Time Slot </h1>
            <div className="text-[12px] font-[500] " id="slotgrid">
              {time_slots.map((time) => (
                <div
                  onClick={() => {
                    setTimeslot(time.id);
                  }}
                  className={
                    time.id === timeslot
                      ? "flex bg-[#FFF6E9]  border-[1px] px-3 justify-between py-[10px] text-[#D3860E] w-full rounded-[4px] gap-1 border-[rgba(158,104,18,0.50)]"
                      : "flex bg-[  ]  border-[1px] px-3 justify-between py-[10px] text-[#333] w-full rounded-[4px] gap-1 border-[rgba(197,197,197,0.50)]"
                  }
                >
                  <h1 className="w-full text-left">{time.start}</h1>-{" "}
                  <h1 className="w-full text-right">{time.end}</h1>
                </div>
              ))}

              {/* <div className='flex border-[1px] px-3 py-[10px] text-[#333] w-fit rounded-[4px] gap-1 border-[rgba(158,104,18,0.50)]'>
                                <h1>9:00 AM</h1>- <h1>9:30 AM</h1>
                            </div> */}
            </div>
          </div>
        </form>

        {/* <div className="my-4 h-[1px] w-full bg-[#D1D1D1]"></div> */}

        <div className="flex items-end justify-end h-fit absolute right-0 bottom-3 gap-3   ">
          <button
            onClick={() => {
              setStep(3);
            }}
            className="border-[1px] border-[#989898] text-[#989898] hover:text-[#333] hover:border-[#333] hover:fill-[#333] text-[18px] px-5 py-[6px] rounded-full flex gap-2 items-center "
            id="back"
          >
            <svg
              id="backsvg"
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
            >
              <path
                d="M6.17984 0.5L7.58984 1.91L3.00984 6.5L7.58984 11.09L6.17984 12.5L0.179844 6.5L6.17984 0.5Z"
                fill=""
              />
            </svg>
            Back
          </button>
          <button
            onClick={() => {
              setAppsubmit(true);
            }}
            className="bg-[#B08853] hover:bg-[#C27B1D] hovertrans text-white text-[18px] px-5 py-[6px] rounded-full flex gap-2 items-center "
          >
            Book Now
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
