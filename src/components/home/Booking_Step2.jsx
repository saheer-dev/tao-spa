import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/Context";

export default function Booking_Step2() {
  const { step, setStep } = useContext(Context);
  const [gender, setGender] = useState(1);
  const [newperson, setNewperson] = useState(false);
  const [dropdownpatient, setDropdownpatient] = useState(false);
  const [selectpatient, setSelectpatient] = useState("Select Patient");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const patientdropref = useRef(null);
  // Assuming you have a state for selectpatient

  useEffect(() => {
    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (
        patientdropref.current &&
        !patientdropref.current.contains(event.target)
      ) {
        setDropdownpatient(false);
      }
    };

    // Adding event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleaning up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [patientdropref]);

  console.log(selectpatient);
  console.log(dropdownpatient);
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
          <div className="bg-[rgba(211,134,14,0.21)] h-2"></div>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <h1 className="text-[16px] text-[#333]">Slot Booking</h1>
          <div className="bg-[rgba(211,134,14,0.21)] rounded-r-[4px]  h-2"></div>
        </div>
      </div>

      <div className="font-[600] h-[350px] relative py-5">
        <form action="" onSubmit={handleSubmit}>
          <h1 className="text-[#BB760B] text-[16px]">Patient </h1>
          <div className="flex w-full gap-6">
            <div className="mt-2 w-[30%]">
              <h1 className="text-[14px]">Select Patient </h1>
              {/* <input className='mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full' type="text" placeholder='Enter Your First and Last Name' /> */}

              <div
                ref={patientdropref}
                onClick={() => setDropdownpatient(!dropdownpatient)}
                className="mt-[6px] justify-between  relative flex font-[400] text-[14px] px-3 py-[10px]  outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
              >
                <div className="h-full w-[85%] ">{selectpatient}</div>
                <div className=""></div>
                <button className="cursor-pointer  pl-8    w-fit  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path
                      d="M10.59 0.589966L6 5.16997L1.41 0.589966L0 1.99997L6 7.99997L12 1.99997L10.59 0.589966Z"
                      fill="#323232"
                    />
                  </svg>
                </button>
                <ul
                  // ref={dropdownpatientref}
                  className={
                    dropdownpatient
                      ? "absolute w-full  py-1  rounded-[8px] bg-white border-[1px] left-0 top-11 "
                      : "hidden"
                  }
                >
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white px-3 py-[1px]"
                    onClick={(e) => {
                      setSelectpatient(e.target.innerText);
                      setDropdownpatient(false);
                    }}
                  >
                    James Milner
                  </li>
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white px-3 py-[1px]"
                    onClick={(e) => {
                      setSelectpatient(e.target.innerText);
                      setDropdownpatient(false);
                    }}
                  >
                    Henderson
                  </li>
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white px-3 py-[1px]"
                    onClick={(e) => {
                      setSelectpatient(e.target.innerText);
                      setDropdownpatient(false);
                    }}
                  >
                    James Milner
                  </li>
                </ul>
              </div>

              {/* <select
                className="mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                name=""
                id=""
              >
                <option value="">James Milner</option>
                <option value="">Henderson</option>
                <option value="">James Milner</option>
              </select> */}
            </div>

            <div className="mt-2">
              <h1 className="invisible text-transparent text-[14px]">invi </h1>
              {/* <input className=' ' type="text" placeholder='Enter Your First and Last Name' /> */}
              <div className="flex items-center gap-2">
                <div
                  onClick={() => {
                    // setNewperson(true);
                    setNewperson(true);
                    console.log(newperson);
                  }}
                  className="cursor-pointer flex items-center gap-2 text-[#CA7B00]  mt-[6px] font-[600] text-[14px] px-3 py-[09px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                >
                  New Person?
                </div>
              </div>
            </div>
          </div>

          <div className={newperson ? "block mt-3" : "hidden "}>
            <h1 className="text-[#BB760B] mt-4 text-[16px]">Patient Details</h1>
            <div className="flex w-full gap-6">
              <div className="mt-2 w-[30%]">
                <h1 className="text-[14px]">Full Name </h1>
                <input
                  className="mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                  type="text"
                  placeholder="Enter Your First and Last Name"
                />
              </div>

              <div className="mt-2">
                <h1 className="text-[14px]">Gender </h1>
                {/* <input className=' ' type="text" placeholder='Enter Your First and Last Name' /> */}
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => {
                      setGender(1);
                    }}
                    className={
                      gender == 1
                        ? "flex items-center gap-2 cursor-pointer  text-[#CA7B00]  mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[rgba(158,104,18,0.50)] bg-[#FFF6E9] rounded-[4px] w-full"
                        : "flex items-center gap-2 cursor-pointer  text-[#A3A3A3]  mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="24"
                      viewBox="0 0 15 24"
                      fill="none"
                    >
                      <path
                        d="M8.63683 9.54567V4.38218L9.65236 5.39533C9.76608 5.51311 9.90238 5.60675 10.0531 5.67064C10.2038 5.73454 10.3659 5.76739 10.5296 5.76722C10.7793 5.76855 11.0238 5.69561 11.2319 5.55767C11.4401 5.41973 11.6025 5.22303 11.6986 4.99255C11.7947 4.76207 11.82 4.50822 11.7715 4.26329C11.723 4.01835 11.6027 3.79337 11.426 3.61695L8.17912 0.370103C8.06264 0.25282 7.92411 0.159738 7.7715 0.0962196C7.6189 0.0327009 7.45523 0 7.28993 0C7.12464 0 6.96097 0.0327009 6.80837 0.0962196C6.65576 0.159738 6.51723 0.25282 6.40074 0.370103L3.15389 3.61695C2.91807 3.85278 2.78558 4.17263 2.78558 4.50614C2.78558 4.83965 2.91807 5.1595 3.15389 5.39533C3.38972 5.63116 3.70957 5.76365 4.04308 5.76365C4.37659 5.76365 4.69644 5.63116 4.93227 5.39533L5.94304 4.38695V9.54567C4.15799 9.88126 2.56252 10.8711 1.46906 12.3214C0.375608 13.7717 -0.137059 15.578 0.0314603 17.3864C0.19998 19.1949 1.03755 20.8754 2.38013 22.0987C3.72272 23.322 5.47362 24 7.28993 24C9.10625 24 10.8571 23.322 12.1997 22.0987C13.5423 20.8754 14.3799 19.1949 14.5484 17.3864C14.7169 15.578 14.2043 13.7717 13.1108 12.3214C12.0173 10.8711 10.4219 9.88126 8.63683 9.54567ZM7.28993 21.8608C6.27061 21.8611 5.27412 21.559 4.42651 20.9928C3.57891 20.4265 2.91829 19.6217 2.52821 18.6799C2.13813 17.7382 2.03613 16.7019 2.2351 15.7022C2.43408 14.7025 2.92509 13.7843 3.64603 13.0637C4.36697 12.3431 5.28543 11.8525 6.28524 11.6539C7.28505 11.4554 8.32127 11.5579 9.26282 11.9484C10.2044 12.3389 11.0089 12.9999 11.5748 13.8478C12.1406 14.6957 12.4422 15.6923 12.4415 16.7116C12.4399 18.0772 11.8966 19.3864 10.9308 20.3518C9.96492 21.3171 8.65551 21.8599 7.28993 21.8608Z"
                        fill="#24B441"
                      />
                    </svg>
                    Male
                  </div>
                  <div
                    onClick={() => {
                      setGender(2);
                    }}
                    className={
                      gender == 2
                        ? "flex items-center gap-2 cursor-pointer  text-[#CA7B00]  mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[rgba(158,104,18,0.50)] bg-[#FFF6E9] rounded-[4px] w-full"
                        : "flex items-center gap-2 cursor-pointer  text-[#A3A3A3]  mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="24"
                      viewBox="0 0 15 24"
                      fill="none"
                    >
                      <path
                        d="M10.7441 17.6819H8.69754V14.4561C10.4951 14.1205 12.1018 13.1305 13.203 11.68C14.3041 10.2296 14.8204 8.42308 14.6507 6.61438C14.481 4.80567 13.6375 3.12503 12.2855 1.90158C10.9335 0.678126 9.17026 0 7.34118 0C5.51209 0 3.74889 0.678126 2.39687 1.90158C1.04484 3.12503 0.201385 4.80567 0.0316814 6.61438C-0.138022 8.42308 0.378249 10.2296 1.47939 11.68C2.58053 13.1305 4.18722 14.1205 5.98481 14.4561V17.6819H3.93707C3.75257 17.6819 3.56999 17.7191 3.40048 17.7915C3.23097 17.8638 3.07808 17.9697 2.95115 18.1027C2.82422 18.2357 2.7259 18.3929 2.66221 18.5649C2.59852 18.7369 2.57079 18.9199 2.58071 19.1029C2.61302 19.4565 2.77914 19.7847 3.04556 20.0214C3.31198 20.2582 3.65888 20.3857 4.01629 20.3784H5.98481V22.6529C5.98481 23.0102 6.12772 23.3528 6.38208 23.6055C6.63645 23.8581 6.98145 24 7.34118 24C7.70091 24 8.0459 23.8581 8.30027 23.6055C8.55464 23.3528 8.69754 23.0102 8.69754 22.6529V20.3784H10.7441C11.1041 20.3784 11.4494 20.2364 11.704 19.9835C11.9586 19.7307 12.1016 19.3878 12.1016 19.0302C12.1016 18.6726 11.9586 18.3297 11.704 18.0768C11.4494 17.824 11.1041 17.6819 10.7441 17.6819ZM7.34118 12.4463C6.31489 12.447 5.31144 12.1454 4.45773 11.5797C3.60401 11.0141 2.93836 10.2097 2.54496 9.26828C2.15156 8.32689 2.04808 7.29078 2.24759 6.29098C2.44711 5.29118 2.94068 4.37259 3.66586 3.65138C4.39105 2.93016 5.3153 2.43871 6.32172 2.23917C7.32815 2.03963 8.37155 2.14097 9.31999 2.53036C10.2684 2.91976 11.0793 3.57972 11.6501 4.4268C12.2208 5.27388 12.5259 6.27003 12.5266 7.28928C12.5255 8.65545 11.9791 9.96548 11.0071 10.9322C10.0351 11.8989 8.71678 12.4434 7.34118 12.4463Z"
                        fill="#228BD8"
                      />
                    </svg>
                    Female
                  </div>
                  <div
                    onClick={() => {
                      setGender(3);
                    }}
                    className={
                      gender == 3
                        ? "flex items-center gap-2 cursor-pointer  text-[#CA7B00]  mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[rgba(158,104,18,0.50)] bg-[#FFF6E9] rounded-[4px] w-full"
                        : "flex items-center gap-2 cursor-pointer  text-[#A3A3A3]  mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                    }
                  >
                    Other
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="my-5 h-[1px] w-full bg-[#D1D1D1]"></div>

        <div className="flex items-end justify-end h-fit absolute right-0 bottom-3 gap-3   ">
          <button
            onClick={() => {
              setStep(1);
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
              setStep(3);
            }}
            className="bg-[#B08853] hover:bg-[#C27B1D] hovertrans text-white text-[18px] px-5 py-[6px] rounded-full flex gap-2 items-center "
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
