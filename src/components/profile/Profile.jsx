import React, { useContext, useEffect, useRef, useState } from "react";
import Appoinment from "./ProfileTabs/Appoinment";
import Bills from "./ProfileTabs/Bills";
import Invoice from "./ProfileTabs/Invoice";
import { Context } from "../context/Context";
import Treatment_Tracker from "./ProfileTabs/Treatment_Tracker";
import "./Profile.css";

export default function Profile() {
  const { profiletab, setProfiletab } = useContext(Context);

  const [profiles, setProfiles] = useState(false);

  let profileactive;

  if (profiletab === 1) {
    profileactive = <Appoinment />;
  } else if (profiletab === 2) {
    profileactive = <Treatment_Tracker />;
  } else if (profiletab === 3) {
    profileactive = <Bills />;
  } else if (profiletab === 4) {
    profileactive = <Invoice />;
  }
  const profileShadowRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileShadowRef.current &&
        !profileShadowRef.current.contains(event.target)
      ) {
        setProfiles(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="h- px-[84px]  py-8">
      <div
        className="w-full bg-white rounded-[12px] h-full px-8 py-6"
        id="profile_shadow"
      >
        <div className="flex items-center justify-between pb-8 border-b-[1px] border-[#DDD]">
          <div className="flex gap-3 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <g clip-path="url(#clip0_33_9336)">
                <path
                  d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
                  fill="#FFEEB4"
                />
                <path
                  d="M25 29.5234C30.5228 29.5234 35 25.0463 35 19.5234C35 14.0006 30.5228 9.52344 25 9.52344C19.4772 9.52344 15 14.0006 15 19.5234C15 25.0463 19.4772 29.5234 25 29.5234Z"
                  fill="#D8A048"
                />
                <path
                  d="M25.0002 31.25C16.9005 31.25 9.4027 34.6431 5.1377 40.1198C7.46146 43.1919 10.4661 45.6831 13.9155 47.3975C17.3648 49.1119 21.1648 50.0029 25.0168 50.0004C28.8687 49.9979 32.6675 49.1019 36.1146 47.3829C39.5617 45.664 42.5631 43.1688 44.8829 40.0938C40.6232 34.5981 33.2105 31.25 25.0002 31.25Z"
                  fill="#D8A048"
                />
              </g>
              <defs>
                <clipPath id="clip0_33_9336">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div ref={profileShadowRef} className="relative w-full">
              <h1 className="flex items-center gap-1 text-[24px] text-[#B08853]">
                Anandhu S Saran
                <button
                  id={profiles ? "rotate" : ""}
                  onClick={() => setProfiles(!profiles)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_33_9291)">
                      <path
                        d="M16.59 9.08984L12 13.6698L7.41 9.08984L6 10.4998L12 16.4998L18 10.4998L16.59 9.08984Z"
                        fill="#323232"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_33_9291">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </h1>
              <p className="text-[14px] text-[#4D4D4D]">+91 9874563210</p>

              <div
                className={
                  profiles
                    ? "text-[#B08853] overflow-hidden bg-white rounded-[8px] absolute w-full right-3 top-[65px]"
                    : "hidden"
                }
                id="profileShadow"
              >
                <h1 className="p-3 py-[14px] hover:bg-[#f9b15227] border-b-[1px] border-[#E3E3E3]">
                  Anandhu S Saran
                </h1>
                <h1 className="p-3 py-[14px] hover:bg-[#f9b15227] border-b-[1px] border-[#E3E3E3]">
                  Anandhu S Saran
                </h1>
                <h1 className="p-3 py-[14px] hover:bg-[#f9b15227] border-b-[1px] border-[#E3E3E3]">
                  Anandhu S Saran
                </h1>
                <h1 className="p-3 py-[14px] hover:bg-[#f9b15227]">
                  Anandhu S Saran
                </h1>
              </div>
            </div>
          </div>

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M14.3 24.9971C14.4674 25.3015 14.7134 25.5554 15.0125 25.7323C15.3115 25.9091 15.6526 26.0024 16 26.0024C16.3474 26.0024 16.6885 25.9091 16.9875 25.7323C17.2866 25.5554 17.5326 25.3015 17.7 24.9971M8 5.99707C6.8 7.69707 6 9.69707 6 11.9971M26 11.9971C26 9.69707 25.2 7.69707 24 5.99707M10 11.9971C10 10.4058 10.6321 8.87965 11.7574 7.75443C12.8826 6.62921 14.4087 5.99707 16 5.99707C17.5913 5.99707 19.1174 6.62921 20.2426 7.75443C21.3679 8.87965 22 10.4058 22 11.9971C22 18.9971 25 20.9971 25 20.9971H7C7 20.9971 10 18.9971 10 11.9971Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> */}
        </div>
        <div>
          <h1 className="font-[600] text-[18px] text-[#BB760B] pt-8">
            Personal Information{" "}
          </h1>
          <div className="flex gap-4">
            <div className="mt-2">
              <h1 className="text-[14px] font-[500] text-[#A3A3A3]"> Name </h1>
              <input
                className="mt-[4px] font-[600]  text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                type="text"
                value="Anandhu S Saran"
                placeholder="Anandhu S Saran"
              />
            </div>

            <div className="mt-2">
              <h1 className="text-[14px] font-[500] text-[#A3A3A3]">
                {" "}
                Date of Birth{" "}
              </h1>
              <input
                className="mt-[4px] font-[600]  text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                type="text"
                value="17 Nov 2001"
                placeholder=""
              />
            </div>
            <div className="mt-2">
              <h1 className="text-[14px] font-[500] text-[#A3A3A3]">
                {" "}
                Whatsapp Number{" "}
              </h1>
              <input
                className="mt-[4px] font-[600]  text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                type="text"
                value="+91 8933787919"
                placeholder=""
              />
            </div>

            <div className="mt-2">
              <h1 className="text-[14px] font-[500] text-[#A3A3A3]">
                {" "}
                Branch{" "}
              </h1>
              <input
                className="mt-[4px] font-[600]  text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                type="text"
                value="Thiruvananthapuram"
                placeholder=""
              />
            </div>
            <div className="mt-2 w-[21rem]">
              <h1 className="text-[14px] font-[500] text-[#A3A3A3]">
                {" "}
                Address{" "}
              </h1>
              <input
                className="mt-[4px] font-[600]  text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
                type="text"
                value="Lorem ipsum dolor sit amet consectetur."
                placeholder=""
              />
            </div>
          </div>
          {/* <div className="flex gap-10 mt-4 ">
            <div className="">
              <h1 className=" text-[#333] font-[600] text-[16px]">
                Anandhu S Saran
              </h1>
              <p className="text-[#A4A4A4] font-[500] text-[14px]">Name </p>
            </div>
            <div>
              <h1 className=" text-[#333] font-[600] text-[16px]">
                17 Nov 2001
              </h1>
              <p className="text-[#A4A4A4] font-[500] text-[14px]">DOB </p>
            </div>
            <div>
              <h1 className=" text-[#333] font-[600] text-[16px]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-[#A4A4A4] font-[500] text-[14px]">Address </p>
            </div>
            <div>
              <h1 className=" text-[#333] font-[600] text-[16px]">
                +91 8933787919
              </h1>
              <p className="text-[#A4A4A4] font-[500] text-[14px]">
                Whatsapp Number
              </p>
            </div>
            <div>
              <h1 className=" text-[#333] font-[600] text-[16px]">
                Thiruvananthapuram
              </h1>
              <p className="text-[#A4A4A4] font-[500] text-[14px]">Branch </p>
            </div>
          </div> */}
        </div>
        <div className="mt-8 p-6 bg-[#FFFCF9] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.12);]">
          <div className="flex gap-3 items-center">
            <button
              onClick={() => {
                setProfiletab(1);
              }}
              className={
                profiletab === 1
                  ? " bg-[#D3860E] text-white text-[16px] px-4 py-3 border-[1px] border-[#D3860E] rounded-[9px]"
                  : "text-[#D3860E] text-[16px] px-4 py-3 border-[1px] border-[#D3860E] rounded-[9px]"
              }
            >
              Appoinments
            </button>
            <button
              onClick={() => {
                setProfiletab(2);
              }}
              className={
                profiletab === 2
                  ? " bg-[#D3860E] text-white text-[16px] px-4 py-3 border-[1px] border-[#D3860E] rounded-[9px]"
                  : "text-[#D3860E] text-[16px] px-4 py-3 border-[1px] border-[#D3860E] rounded-[9px]"
              }
            >
              Treatment Tracker
            </button>
            <button
              onClick={() => {
                setProfiletab(3);
              }}
              className={
                profiletab === 3
                  ? " bg-[#D3860E] text-white text-[16px] px-4 py-3 border-[1px] border-[#D3860E] rounded-[9px]"
                  : "text-[#D3860E] text-[16px] px-4 py-3 border-[1px] border-[#D3860E] rounded-[9px]"
              }
            >
              Bills
            </button>
            <button
              onClick={() => {
                setProfiletab(4);
              }}
              className={
                profiletab === 4
                  ? " bg-[#D3860E] text-white text-[16px] px-4 py-3 border-[1px] border-[#D3860E] rounded-[9px]"
                  : "text-[#D3860E] text-[16px] px-4 py-3 border-[1px] border-[#D3860E] rounded-[9px]"
              }
            >
              Invoice
            </button>
          </div>

          {profileactive}
          {/* <Appoinment/> */}
          {/* <Bills/> */}
          {/* <Invoice/> */}
        </div>
      </div>
    </div>
  );
}
