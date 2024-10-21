import React, { useContext } from "react";
import LandingPage from "./home/LandingPage";
import BookAppointment from "./home/BookAppointment";
import "./home/Home.css";
import AboutHospital from "./home/AboutHospital";
import HospitalBranches from "./home/HospitalBranches";
import WhyTtaospa from "./home/WhyTtaospa";
import Packages from "./home/Packages";
import ContactUs from "./home/ContactUs";
import { Context } from "./context/Context";

export default function Home() {
  const {
    anchorabtusRef,
    anchorhospitalRef,
    anchorpackageRef,
    anchorcontactRef,
    anchorbookappRef,
  } = useContext(Context);
  return (
    <div className=" " id="home">
      <div className="h-[calc(100vh-80px)] w-screen  bg-[#FCF3EC]">
        <LandingPage />
      </div>

      <div ref={anchorbookappRef} className="pt-[0px] bg-[#FCF3EC] ">
        <BookAppointment />
      </div>

      <div className="" ref={anchorabtusRef}>
        <AboutHospital />
      </div>

      <div ref={anchorhospitalRef} className="" id="hospitals">
        <HospitalBranches />
      </div>

      <WhyTtaospa />

      <div ref={anchorpackageRef}>
        <Packages />
      </div>

      <div ref={anchorcontactRef}>
        <ContactUs />
      </div>
      
    </div>
  );
}
