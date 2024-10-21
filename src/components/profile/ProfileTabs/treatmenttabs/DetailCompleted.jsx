import React, { useContext, useEffect, useMemo } from "react";
import { Context } from "../../../context/Context";
import DoctorNote from "./DoctorNote";

export default function DetailCompleted() {
  const { treatmenttab, setTreatmenttab } = useContext(Context);
  const { docnote, setDocnote } = useContext(Context);

  useEffect(() => {
    if (docnote) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [docnote]);

  const bills = useMemo(
    () => [
      {
        AppointmentID: "123JDH482",
        Therapist: "Shiva Kumar",
        Date: "12 Nov 2023",
        Time: "12:30 PM",
        Status: "Unpaid",
        AppointmentStatus: "Confirm ",
      },
      //   {
      //     AppointmentID: "123JDH482",
      //     Therapist: "Shiva Kumar",
      //     Date: "12 Nov 2023",
      //     Time: "12:30 PM",
      //     Status: "Paid",
      //     AppointmentStatus: "Confirm ",
      //   },
    ],
    []
  );
  return (
    <div>
      <button className="px-2 mt-3" onClick={() => setTreatmenttab(2)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_104_776)">
            <path
              d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_104_776">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="flex items-center justify-between mt-6 my-4 text-[#333]">
        <div className="flex flex-col gap-1 justify-between">
          <h1 className="text-[18px] font-[600]">
            Aromatherapy Hot Stone Massage
          </h1>
          <h1 className="text-[14px] font-[400]">Category</h1>
          <p className=" text-[14px] font-[400]">Treatment Id: 23JDH48</p>

          <h1 className="text-[16px] font-[600]">₹ 10.500 / ₹25,000 Paid</h1>
        </div>
        <div className="flex flex-col items-end gap-1 justify-between">
          <h1 className="text-[18px] font-[600]">
            From:24- 12-2024 To 14- 2-2023
          </h1>
          <h1 className="text-[12px] font-[600]">
            7 of 25 - Appointment Completed
          </h1>
          <h1 className="text-[12px] w-fit font-[600] mt-[6px]  px-2 py-[6px] rounded-[10px] bg-[#F5F5FF] text-[#00F]">
            15 days Appointment Interval
          </h1>
          <h1 className="text-[10px] text-[#DC9E3E] p-[6px] w-fit font-[600] cursor-pointer flex gap-1 border-[1px] border-[#D9D9D9]  rounded-[10px]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M11.0815 8.81863V10.2326C11.082 10.3638 11.0552 10.4938 11.0026 10.614C10.95 10.7343 10.8729 10.8423 10.7761 10.931C10.6794 11.0197 10.5652 11.0873 10.4409 11.1293C10.3165 11.1714 10.1848 11.187 10.054 11.1752C8.60374 11.0176 7.21062 10.522 5.98663 9.72827C4.84786 9.00464 3.88238 8.03917 3.15876 6.9004C2.36223 5.67084 1.86654 4.27095 1.71183 2.81413C1.70006 2.68379 1.71554 2.55243 1.75732 2.42842C1.79909 2.3044 1.86622 2.19043 1.95445 2.09378C2.04268 1.99713 2.15006 1.91991 2.26977 1.86704C2.38947 1.81416 2.51888 1.78679 2.64974 1.78667H4.06368C4.29241 1.78442 4.51415 1.86541 4.68758 2.01456C4.86101 2.16371 4.97429 2.37083 5.0063 2.59732C5.06598 3.04981 5.17666 3.4941 5.33622 3.92171C5.39963 4.0904 5.41335 4.27374 5.37576 4.44999C5.33818 4.62625 5.25085 4.78803 5.12413 4.91617L4.52556 5.51474C5.1965 6.69469 6.17348 7.67167 7.35343 8.34261L7.952 7.74404C8.08014 7.61733 8.24193 7.53 8.41818 7.49241C8.59443 7.45482 8.77777 7.46854 8.94646 7.53195C9.37407 7.69152 9.81836 7.80219 10.2709 7.86187C10.4998 7.89417 10.7089 8.00949 10.8584 8.1859C11.0078 8.3623 11.0872 8.58749 11.0815 8.81863Z"
                stroke="#DC9E3E"
                stroke-width="0.961475"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Reschedule Appointment
          </h1>
        </div>
      </div>
      <div className="bg-[#D8D8D8] h-[1px] w-full"></div>

      <div className="flex flex-col mt-6 gap-2">
        <div className="flex justify-around px-6 py-1 text-[16px] font-[600]">
          <div className="w-[13%]">Appointment ID</div>
          <div className="w-[18%]">Therapist </div>
          <div className="w-[13%]">Date </div>
          <div className="w-[8%]">Time </div>
          <div className="w-[13%]">Status </div>
          <div className="w-[12%]">Appointment Status </div>
          <div className="w-[13%]">Therapist Note </div>
        </div>

        {bills.map((bill) => (
          <div className="flex justify-around px-6 py-6 rounded-[8px] text-[16px] font-[600] bg-[#F3F3F3] opacity-[.8] border-[1px]  border-[#C0C0C0]">
            <div className="w-[13%] ">{bill.AppointmentID}</div>
            <div className="w-[18%] ">{bill.Therapist}</div>
            <div className="w-[13%] ">{bill.Date}</div>
            <div className="w-[8%] ">{bill.Time}</div>
            <div className="w-[13%] ">
              <button
                className={
                  bill.Status == "Paid"
                    ? "bg-[#DFD] w-fit px-3 py-1  rounded-full text-[#008000]"
                    : bill.Status == "Unpaid"
                    ? "bg-[#FFD7D7] w-fit px-3 py-1  rounded-full text-[#F11E1E]"
                    : "bg-[#FFD7D7] w-fit px-3 py-1  rounded-full text-[#F11E1E]"
                }
              >
                {bill.Status}
              </button>
            </div>
            <div className="w-[12%] ">{bill.AppointmentStatus}</div>

            <div className="w-[13%]  ">
              <button
                onClick={() => {
                  setDocnote(true);
                }}
                className="text-[#D59533] flex items-center gap-1 border-[1px] border-[#CA7B00] p-1 rounded-[4px] "
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                >
                  <path
                    d="M1.58711 0L0.412109 1.175L4.22878 5L0.412109 8.825L1.58711 10L6.58711 5L1.58711 0Z"
                    fill="#CA7B00"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex items-center justify-between mt-4">
        <button className="p-2" onClick={() => setTreatmenttab(2)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_104_776)">
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="#323232"
              />
            </g>
            <defs>
              <clipPath id="clip0_104_776">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="px-6 py-4 flex items-center gap-1 rounded-[10px] bg-[#D3860E] text-white font-[600]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_104_780)">
              <path
                d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z"
                stroke="white"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_104_780">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Reschedule Appointment
        </button>
      </div> */}
      <div className={docnote ? "fixed top-0 inset-0" : "hidden"}>
        <DoctorNote />
      </div>
    </div>
  );
}
