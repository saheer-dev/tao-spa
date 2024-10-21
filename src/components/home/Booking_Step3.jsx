import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/Context";

export default function Booking_Step3() {
  const { step, setStep } = useContext(Context);

  const [branch, setBranch] = useState("Select Hospital Branch");
  const [Dropdownbranch, setDropdownbranch] = useState(false);

  const [doctordept, setDoctordept] = useState("Select Hospital Branch");
  const [dropdownDoctordept, setDropdownDoctordept] = useState(false);

  const [doctor, setDoctor] = useState("Select Hospital Branch");
  const [dropdownDoctor, setDropdownDoctor] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const branchdropref = useRef(null);
  const docdeptdropref = useRef(null);
  const docdropref = useRef(null);

  // Assuming you have a state for selectpatient

  useEffect(() => {
    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (
        branchdropref.current &&
        !branchdropref.current.contains(event.target)
      ) {
        setDropdownbranch(false);
      }
      if (
        docdeptdropref.current &&
        !docdeptdropref.current.contains(event.target)
      ) {
        setDropdownDoctordept(false);
      }
      if (
        docdropref.current &&
        !docdropref.current.contains(event.target)
      ) {
        setDropdownDoctor(false);
      }
    };

    // Adding event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleaning up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [branchdropref, docdeptdropref]);
  return (
    <>
      <div className="w-full flex gap-2 py-5  border-b-[1px] border-[#D1D1D1]">
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
          <div className="bg-[rgba(211,134,14,0.21)] rounded-r-[4px]  h-2"></div>
        </div>
      </div>

      <div className="font-[600] h-[350px] relative py-5">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex    mb-10 w-full gap-6">
            <div className=" w-[30%]">
              <h1 className="text-[#BB760B] text-[16px]">Hospital </h1>
              <h1 className="mt-2 text-[14px]">Hospital Branch </h1>

              <div
                ref={branchdropref}
                onClick={() => setDropdownbranch(!Dropdownbranch)}
                className="mt-[6px] justify-between  relative flex font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
              >
                <div className="h-full w-[85%] ">{branch}</div>
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
                  className={
                    Dropdownbranch
                      ? "absolute w-full  py-1  rounded-[8px] bg-white border-[1px] left-0 top-11 "
                      : "hidden"
                  }
                >
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white cursor-pointer px-3 py-[1px]"
                    onClick={(e) => {
                      setBranch(e.target.innerText);
                      setDropdownbranch(false);
                    }}
                  >
                    Trivandrum
                  </li>
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white cursor-pointer px-3 py-[1px]"
                    onClick={(e) => {
                      setBranch(e.target.innerText);
                      setDropdownbranch(false);
                    }}
                  >
                    Trivandrum
                  </li>
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white cursor-pointer px-3 py-[1px]"
                    onClick={(e) => {
                      setBranch(e.target.innerText);
                      setDropdownbranch(false);
                    }}
                  >
                    Kochi
                  </li>
                </ul>
              </div>
              {/* <select
                className="mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                name=""
                id=""
              >
                <option value="">Select Hospital Branch</option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Trivandrum">Trivandrum</option>
              </select> */}
            </div>

            <div className=" w-[30%]">
              <h1 className="text-[#BB760B] text-[16px]">Doctor </h1>
              <h1 className="mt-2 text-[14px]">Doctor Department </h1>
              {/* <input className='mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full' type="text" placeholder='Enter Your First and Last Name' /> */}
              <div
                ref={docdeptdropref}
                onClick={() => setDropdownDoctordept(!dropdownDoctordept)}
                className="mt-[6px] justify-between  relative flex font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
              >
                <div className="h-full w-[85%] ">{doctordept}</div>
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
                  className={
                    dropdownDoctordept
                      ? "absolute w-full  py-1  rounded-[8px] bg-white border-[1px] left-0 top-11 "
                      : "hidden"
                  }
                >
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white cursor-pointer px-3 py-[1px]"
                    onClick={(e) => {
                      setDoctordept(e.target.innerText);
                      setDropdownDoctordept(false);
                    }}
                  >
                    Department1
                  </li>
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white cursor-pointer px-3 py-[1px]"
                    onClick={(e) => {
                      setDoctordept(e.target.innerText);
                      setDropdownDoctordept(false);
                    }}
                  >
                    Department2
                  </li>
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white cursor-pointer px-3 py-[1px]"
                    onClick={(e) => {
                      setDoctordept(e.target.innerText);
                      setDropdownDoctordept(false);
                    }}
                  >
                    Department3
                  </li>
                </ul>
              </div>
              {/* <select
                className="mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                name=""
                id=""
              >
                <option value="">Select Department</option>
                <option value="Trivandrum">Department1</option>
                <option value="Trivandrum">Department2</option>
                <option value="Trivandrum">Department3</option>
              </select> */}
            </div>

            <div className=" w-[30%]">
              <h1 className="text-transparent invisible text-[16px]">
                Doctor{" "}
              </h1>
              <h1 className="mt-2 text-[14px]">Doctor</h1>
              {/* <input className='mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full' type="text" placeholder='Enter Your First and Last Name' /> */}
              <div
              ref={docdropref}
                onClick={() => setDropdownDoctor(!dropdownDoctor)}
                className="mt-[6px] justify-between  relative flex font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
              >
                <div className="h-full w-[85%] ">{doctor}</div>
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
                  className={
                    dropdownDoctor
                      ? "absolute w-full  py-1  rounded-[8px] bg-white border-[1px] left-0 top-11 "
                      : "hidden"
                  }
                >
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white cursor-pointer px-3 py-[1px]"
                    onClick={(e) => {
                      setDoctor(e.target.innerText);
                      setDropdownDoctor(false);
                    }}
                  >
                    Dr.George
                  </li>
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white cursor-pointer px-3 py-[1px]"
                    onClick={(e) => {
                      setDoctor(e.target.innerText);
                      setDropdownDoctor(false);
                    }}
                  >
                    Dr.James
                  </li>
                  <li
                    className="w-full hover:bg-[#D3860E] hover:text-white cursor-pointer px-3 py-[1px]"
                    onClick={(e) => {
                      setDoctor(e.target.innerText);
                      setDropdownDoctor(false);
                    }}
                  >
                    Dr.Roy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>

        <div className="my-5 h-[1px] w-full bg-[#D1D1D1]"></div>

        <div className="flex items-end justify-end h-fit absolute right-0 bottom-3 gap-3  ">
          <button
            onClick={() => {
              setStep(2);
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
              setStep(4);
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
