import React from "react";
import SupportImg from "./../../assets/support.png";
import SaleImg from "./../../assets/sales.png";
import OnboardImg from "./../../assets/onboard.png";
import ProductImg from "./../../assets/product.png";
import QualityImg from "./../../assets/quality.png";
import ResultImg from "./../../assets/result.png";

export default function WhyTtaospa() {
  const whygrid = [
    {
      name: "Support",
      para: "Lorem ipsum dolor sit amet consectetur. Ac gravida cursus quis enim dignissim. Elementum nisl id congue gravida. Pharetra dolor potenti nunc sapien",
      img: SupportImg,
    },
    {
      name: "Sales",
      para: "Lorem ipsum dolor sit amet consectetur. Ac gravida cursus quis enim dignissim. Elementum nisl id congue gravida. Pharetra dolor potenti nunc sapien",
      img: SaleImg,
    },
    {
      name: "Onboarding",
      para: "Lorem ipsum dolor sit amet consectetur. Ac gravida cursus quis enim dignissim. Elementum nisl id congue gravida. Pharetra dolor potenti nunc sapien",
      img: OnboardImg,
    },
    {
      name: "Product",
      para: "Lorem ipsum dolor sit amet consectetur. Ac gravida cursus quis enim dignissim. Elementum nisl id congue gravida. Pharetra dolor potenti nunc sapien",
      img: ProductImg,
    },
    {
      name: "Quality",
      para: "Lorem ipsum dolor sit amet consectetur. Ac gravida cursus quis enim dignissim. Elementum nisl id congue gravida. Pharetra dolor potenti nunc sapien",
      img: QualityImg,
    },
    {
      name: "Result",
      para: "Lorem ipsum dolor sit amet consectetur. Ac gravida cursus quis enim dignissim. Elementum nisl id congue gravida. Pharetra dolor potenti nunc sapien",
      img: ResultImg,
    },
  ];

  return (
    <div className="px-20  pb-3 flex flex-col items-center">
      <h1 className="text-[#774B06] text-[34px] font-[700] mb-10">
        {" "}
        Why Ttao spa?
      </h1>

      <div id="whytao_grid">
        {whygrid.map((reason, index) => (
          <div
            key={index}
            className="p-6 pt-8 flex flex-col items-center text-center rounded-[12px]"
            id="whytao_shadow"
          >
            <img src={reason.img} className="max-w-[120px]" alt="" />
            <div className="mt-[32px]">
              <h1 className="text-[#18181B] text-[21px] font-[700]">
                {reason.name}
              </h1>
              <p className="text-[#52525B] mt-4 text-[16px]">{reason.para}</p>
            </div>
          </div>
        ))}
        {/* <div className='p-6  flex flex-col items-center text-center rounded-[12px]' id='whytao_shadow'>   
                    <img src={SupportImg} alt="" />
                    <div>
                        <h1 className='text-[#18181B] text-[21px] font-[700]'>Support</h1>
                        <p className='text-[#52525B]'>Lorem ipsum dolor sit amet consectetur. Ac gravida cursus quis enim dignissim. Elementum nisl id congue gravida. Pharetra dolor potenti nunc sapien</p>
                    </div>

                </div> */}
      </div>
    </div>
  );
}
