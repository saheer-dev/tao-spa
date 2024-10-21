import React from "react";
import ContactUsimg from "./../../assets/contactUs.png";

export default function ContactUs() {
  return (
    <div className="px-[200px] bg-[#FFFCF9] py-20 pt-24" id="contact">
      <div
        className="flex bg-white rounded-[12px] overflow-hidden"
        id="whytao_shadow"
      >
        <img src={ContactUsimg} className="max-w-[400px]" alt="" />

        <div className="px-6 py-8 w-full relative">
          <h1 className="text-[#774B06] text-[32px] font-[700]">Contact Us</h1>
          <p className="text-[#9D660A] w-[50%] text-[16px] font-[600]">
            Our experts will tailor the conversation to your specific needs.
          </p>

          <div className="mt-2 ">
            <h1 className="text-[14px]">Name </h1>
            <input
              className="mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
              type="text"
              placeholder="Enter Your  Name"
            />
          </div>
          <div className="mt-2 ">
            <h1 className="text-[14px]">Phone Number </h1>
            <input
              className="mt-[6px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
              type="tel"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="mt-2 ">
            <h1 className="text-[14px]">What is your Concern? </h1>

            <textarea
              className="mt-[6px] max-h-[190px] font-[400] text-[14px] px-3 py-[10px] outline-none border-[1px] border-[#D0D5DD] rounded-[4px] w-full"
              placeholder="Tell us a little about the project..."
              rows={8}
            ></textarea>
          </div>
          <div className="absolute bottom-8 right-6">
            <button className="px-5 py-3 bg-black hover:bg-[#C27B1D] hovertrans text-white rounded-[9px]">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
