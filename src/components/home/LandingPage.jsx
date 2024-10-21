import React, { useContext } from "react";
// import  from './../assets/landingPage_img.png'
import Landingbg from "./../../assets/Taobackground.png";
import LandingPageImg from "./../../assets/landingPage_img.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

export default function LandingPage() {
  const { anchorbookappRef } = useContext(Context);

  const scrollTobookapp = () => {
    anchorbookappRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative flex flex-col justify-center ">
      <div className="mx-20 h-[75vh] flex  flex-col justify-between w-fit">
        <div>
          <h1 className="text-[60px] font-[700] w-[40vw]  leading-[125%] text-black">
            Keep Calm & Make A <span className="text-[#BA7417]">Self Care</span>{" "}
            Plan
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="271"
              height="8"
              viewBox="0 0 271 8"
              fill="none"
            >
              <path
                d="M261.387 5.74491C231.247 5.42815 201.123 4.97564 170.983 4.81403C127.158 4.58131 83.2987 4.27103 39.5926 5.99703C30.7358 6.34611 21.8789 6.66936 13.0391 7.03136C6.10326 7.30934 1.78536 6.42371 0.306394 4.36803C-0.934582 2.64202 1.7003 1.11641 6.2902 1.44609C22.1849 2.57737 37.7056 0.916019 53.4133 0.767337C82.8737 0.482903 112.334 0.127337 141.812 0.0174421C163.333 -0.060131 184.889 0.133808 206.41 0.347134C224.209 0.528138 241.991 0.915987 259.789 1.21982C260.826 1.23921 261.931 1.25216 262.866 1.40731C266.538 2.02143 272.114 2.37049 270.805 4.33567C270.176 5.27301 265.178 5.79666 262.152 6.50128C261.897 6.24917 261.659 5.99702 261.404 5.74491H261.387Z"
                fill="#915300"
              />
            </svg>
          </h1>
          <p className="text-[18px] max-w-[507px] mt-3 leading-[165%]">
            Your Ultimate Relaxation Destination in Kozhikode and Calicut.
            Experience the art of wellness with our exquisite massage and spa
            services.{" "}
          </p>
          <button
            onClick={() => {
              navigate("/");
              // window.scrollTo({
              //   top: window.innerHeight * 0.95,
              //   behavior: "smooth",
              // });
              scrollTobookapp();
            }}
            className="flex items-center bg-[#B08853] hover:bg-[#C27B1D] hovertrans rounded-[9px] px-5 py-3 gap-[10px] mt-8 text-white font-[700]"
          >
            Book Appointment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 2V6"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 14H8.01"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14H12.01"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 14H16.01"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 18H8.01"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18H12.01"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 18H16.01"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <h1>Over 5+ Clinics all over India</h1>
          <div className="p-3 mt-2 border-t-[4px] w-fit border-l-[4px] border-[#FEE6C5]">
            <h1 className="flex items-center gap-2">
              Thiruvananthapuram, Tychad, Kerala
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12 13.2227C12.5523 13.2227 13 12.7749 13 12.2227C13 11.6704 12.5523 11.2227 12 11.2227C11.4477 11.2227 11 11.6704 11 12.2227C11 12.7749 11.4477 13.2227 12 13.2227Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 13.2227C19.5523 13.2227 20 12.7749 20 12.2227C20 11.6704 19.5523 11.2227 19 11.2227C18.4477 11.2227 18 11.6704 18 12.2227C18 12.7749 18.4477 13.2227 19 13.2227Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 13.2227C5.55228 13.2227 6 12.7749 6 12.2227C6 11.6704 5.55228 11.2227 5 11.2227C4.44772 11.2227 4 11.6704 4 12.2227C4 12.7749 4.44772 13.2227 5 13.2227Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h1>
            <div className="flex gap-[3px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <g clip-path="url(#clip0_122_11303)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9064 0.788271L13.3865 6.06424L19.1707 6.78538C19.7063 6.85439 20.0981 7.3486 20.0293 7.88447C19.9946 8.14564 19.8642 8.37205 19.6787 8.53051L15.4682 12.4735L16.5672 18.2027C16.6699 18.7385 16.3199 19.2537 15.7838 19.3566C15.5504 19.3978 15.3169 19.3566 15.1245 19.2467L10.0133 16.4373L4.90955 19.2467C4.42887 19.5146 3.83115 19.3362 3.57025 18.8619C3.4532 18.6491 3.42586 18.4154 3.46727 18.2027L4.5592 12.4735L0.307466 8.48221C-0.0845554 8.11115 -0.105258 7.48635 0.265796 7.09459C0.430621 6.91597 0.644016 6.81989 0.863517 6.79229V6.78538L6.6475 6.06424L9.1273 0.788271C9.35424 0.293798 9.93841 0.087834 10.4326 0.314501C10.6524 0.417483 10.8106 0.589208 10.9064 0.788271Z"
                    fill="url(#paint0_linear_122_11303)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_122_11303"
                    x1="0"
                    y1="0.222656"
                    x2="0"
                    y2="19.3723"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EBC33C" />
                    <stop offset="1" stop-color="#F9A314" />
                  </linearGradient>
                  <clipPath id="clip0_122_11303">
                    <rect
                      width="21.1897"
                      height="19.777"
                      fill="white"
                      transform="translate(0 0.222656)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <g clip-path="url(#clip0_122_11303)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9064 0.788271L13.3865 6.06424L19.1707 6.78538C19.7063 6.85439 20.0981 7.3486 20.0293 7.88447C19.9946 8.14564 19.8642 8.37205 19.6787 8.53051L15.4682 12.4735L16.5672 18.2027C16.6699 18.7385 16.3199 19.2537 15.7838 19.3566C15.5504 19.3978 15.3169 19.3566 15.1245 19.2467L10.0133 16.4373L4.90955 19.2467C4.42887 19.5146 3.83115 19.3362 3.57025 18.8619C3.4532 18.6491 3.42586 18.4154 3.46727 18.2027L4.5592 12.4735L0.307466 8.48221C-0.0845554 8.11115 -0.105258 7.48635 0.265796 7.09459C0.430621 6.91597 0.644016 6.81989 0.863517 6.79229V6.78538L6.6475 6.06424L9.1273 0.788271C9.35424 0.293798 9.93841 0.087834 10.4326 0.314501C10.6524 0.417483 10.8106 0.589208 10.9064 0.788271Z"
                    fill="url(#paint0_linear_122_11303)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_122_11303"
                    x1="0"
                    y1="0.222656"
                    x2="0"
                    y2="19.3723"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EBC33C" />
                    <stop offset="1" stop-color="#F9A314" />
                  </linearGradient>
                  <clipPath id="clip0_122_11303">
                    <rect
                      width="21.1897"
                      height="19.777"
                      fill="white"
                      transform="translate(0 0.222656)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <g clip-path="url(#clip0_122_11303)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9064 0.788271L13.3865 6.06424L19.1707 6.78538C19.7063 6.85439 20.0981 7.3486 20.0293 7.88447C19.9946 8.14564 19.8642 8.37205 19.6787 8.53051L15.4682 12.4735L16.5672 18.2027C16.6699 18.7385 16.3199 19.2537 15.7838 19.3566C15.5504 19.3978 15.3169 19.3566 15.1245 19.2467L10.0133 16.4373L4.90955 19.2467C4.42887 19.5146 3.83115 19.3362 3.57025 18.8619C3.4532 18.6491 3.42586 18.4154 3.46727 18.2027L4.5592 12.4735L0.307466 8.48221C-0.0845554 8.11115 -0.105258 7.48635 0.265796 7.09459C0.430621 6.91597 0.644016 6.81989 0.863517 6.79229V6.78538L6.6475 6.06424L9.1273 0.788271C9.35424 0.293798 9.93841 0.087834 10.4326 0.314501C10.6524 0.417483 10.8106 0.589208 10.9064 0.788271Z"
                    fill="url(#paint0_linear_122_11303)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_122_11303"
                    x1="0"
                    y1="0.222656"
                    x2="0"
                    y2="19.3723"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EBC33C" />
                    <stop offset="1" stop-color="#F9A314" />
                  </linearGradient>
                  <clipPath id="clip0_122_11303">
                    <rect
                      width="21.1897"
                      height="19.777"
                      fill="white"
                      transform="translate(0 0.222656)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <g clip-path="url(#clip0_122_11303)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9064 0.788271L13.3865 6.06424L19.1707 6.78538C19.7063 6.85439 20.0981 7.3486 20.0293 7.88447C19.9946 8.14564 19.8642 8.37205 19.6787 8.53051L15.4682 12.4735L16.5672 18.2027C16.6699 18.7385 16.3199 19.2537 15.7838 19.3566C15.5504 19.3978 15.3169 19.3566 15.1245 19.2467L10.0133 16.4373L4.90955 19.2467C4.42887 19.5146 3.83115 19.3362 3.57025 18.8619C3.4532 18.6491 3.42586 18.4154 3.46727 18.2027L4.5592 12.4735L0.307466 8.48221C-0.0845554 8.11115 -0.105258 7.48635 0.265796 7.09459C0.430621 6.91597 0.644016 6.81989 0.863517 6.79229V6.78538L6.6475 6.06424L9.1273 0.788271C9.35424 0.293798 9.93841 0.087834 10.4326 0.314501C10.6524 0.417483 10.8106 0.589208 10.9064 0.788271Z"
                    fill="url(#paint0_linear_122_11303)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_122_11303"
                    x1="0"
                    y1="0.222656"
                    x2="0"
                    y2="19.3723"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EBC33C" />
                    <stop offset="1" stop-color="#F9A314" />
                  </linearGradient>
                  <clipPath id="clip0_122_11303">
                    <rect
                      width="21.1897"
                      height="19.777"
                      fill="white"
                      transform="translate(0 0.222656)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <g clip-path="url(#clip0_122_11303)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9064 0.788271L13.3865 6.06424L19.1707 6.78538C19.7063 6.85439 20.0981 7.3486 20.0293 7.88447C19.9946 8.14564 19.8642 8.37205 19.6787 8.53051L15.4682 12.4735L16.5672 18.2027C16.6699 18.7385 16.3199 19.2537 15.7838 19.3566C15.5504 19.3978 15.3169 19.3566 15.1245 19.2467L10.0133 16.4373L4.90955 19.2467C4.42887 19.5146 3.83115 19.3362 3.57025 18.8619C3.4532 18.6491 3.42586 18.4154 3.46727 18.2027L4.5592 12.4735L0.307466 8.48221C-0.0845554 8.11115 -0.105258 7.48635 0.265796 7.09459C0.430621 6.91597 0.644016 6.81989 0.863517 6.79229V6.78538L6.6475 6.06424L9.1273 0.788271C9.35424 0.293798 9.93841 0.087834 10.4326 0.314501C10.6524 0.417483 10.8106 0.589208 10.9064 0.788271Z"
                    fill="url(#paint0_linear_122_11303)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_122_11303"
                    x1="0"
                    y1="0.222656"
                    x2="0"
                    y2="19.3723"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EBC33C" />
                    <stop offset="1" stop-color="#F9A314" />
                  </linearGradient>
                  <clipPath id="clip0_122_11303">
                    <rect
                      width="21.1897"
                      height="19.777"
                      fill="white"
                      transform="translate(0 0.222656)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <img
        src={LandingPageImg}
        className="max-w-[600px] absolute bottom-0 right-0 z-10"
        alt=""
      />
      <img
        src={Landingbg}
        className="absolute w-[1116px] right-[-300px] bottom-[-500px]"
        alt=""
      />
    </div>
  );
}
