import React, { useEffect, useState } from "react";
import AboutHospital_Img from "./../../assets/abouthosp.png";
import CountUp from "./Countup";

export default function AboutHospital() {
  return (
    <div
      className=" pb-0 pt-[80px]  flex flex-col justify-center"
      id="AboutHospital_bggradient"
    >
      <div className=" mx-[120px]">
        <div className="flex justify-between">
          <div className="w-[40vw] flex flex-col justify-between">
            <h1 className="text-[#CA7B00] text-[20px]">About Hospital</h1>
            <h1 className="text-[#333] text-[38px] mt-8">
              Combining ancient healing traditions with modern techniques.{" "}
            </h1>
            <p className="text-[#333] text-[16px] mt-4">
              Visit our Massage centre Kozhikode today and embark on a
              transformative journey towards relaxation and rejuvenation.
              Discover the essence of wellness at the Best spa in Calicut.
            </p>
          </div>
          <img src={AboutHospital_Img} className="w-[456px]" alt="" />
        </div>

        <div
          className=" p-6 bg-white rounded-[12px] flex  justify-between mt-14 font-[600]"
          id="AboutHospitalgridShadow"
        >
          <div className="p-8 w-full flex flex-col items-center border-r-[1px] border-[#cd810e58]">
            <div className="flex relative w-fit">
              <CountUp limit={14} />
              {/* <h1 className="text-[#CD820E] text-[56px] ">14</h1> */}
              <h1 className="text-[#CD820E] text-[40px] absolute top-[-14px] right-[-20px] ">
                +
              </h1>
            </div>
            <h1>Doctors :</h1>
          </div>
          <div className="p-8 w-full flex flex-col items-center border-r-[1px] border-[#cd810e58]">
            <div className="flex relative w-fit">
              <CountUp limit={14} />
              {/* <h1 className="text-[#CD820E] text-[56px] ">14</h1> */}
              <h1 className="text-[#CD820E] text-[40px] absolute top-[-14px] right-[-20px] ">
                +
              </h1>
            </div>
            <h1>Doctors :</h1>
          </div>
          <div className="p-8 w-full flex flex-col items-center border-r-[1px] border-[#cd810e58]">
            <div className="flex relative w-fit">
              <CountUp limit={10} />
              {/* <h1 className='text-[#CD820E] text-[56px] '>10</h1> */}

              <h1 className="text-[#CD820E] text-[40px] absolute top-[-14px] right-[-20px] ">
                +
              </h1>
            </div>
            <h1>Doctors :</h1>
          </div>
          <div className="p-8 w-full flex flex-col items-center border-r-[1px] border-[#cd810e58]">
            <div className="flex relative w-fit">
              <CountUp limit={136} />
              {/* <h1 className="text-[#CD820E] text-[56px] ">336</h1> */}
              <h1 className="text-[#CD820E] text-[40px] absolute top-[-14px] right-[-20px] ">
                +
              </h1>
            </div>
            <h1>Doctors :</h1>
          </div>
          <div className="p-8 w-full flex flex-col items-center ">
            <div className="flex relative w-fit">
              <CountUp limit={14} />
              {/* <h1 className="text-[#CD820E] text-[56px] ">14</h1> */}
              <h1 className="text-[#CD820E] text-[40px] absolute top-[-14px] right-[-20px] ">
                +
              </h1>
            </div>
            <h1>Doctors :</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
