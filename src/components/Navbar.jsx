import React, { useContext, useEffect, useState } from "react";
import Logo from "./../assets/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./login/Login";
import { Context } from "./context/Context";

export default function Navbar() {
  const { loginPopup, setLoginPopup } = useContext(Context);

  const navigate = useNavigate();

  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  const {
    anchorabtusRef,
    anchorhospitalRef,
    anchorpackageRef,
    anchorcontactRef,
    anchorbookappRef,
  } = useContext(Context);
  const scrollToabtus = () => {
    anchorabtusRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTohosps = () => {
    anchorhospitalRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTopackage = () => {
    anchorpackageRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTocontact = () => {
    anchorcontactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTobookapp = async () => {
    await navigate("/");
    anchorbookappRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // console.log(scrollPosition);
      const scrollThreshold = (90 * window.innerHeight) / 100; // 90vh in pixels
      if (scrollPosition > scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Add or remove scroll listener based on the route
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsFixed(false); // Reset fixed state if route is not '/'
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // console.log(isFixed);
  return (
    <div className="h-[80px]">
      <div
        className={`h-[80px] w-screen bg-[#FCF3EC] px-10 z-30 py-4 flex items-center justify-between font-[600] text-[16px] ${
          isFixed ? "fixed top-0 bg-white" : ""
        }`}
        id={isFixed ? "navbar_shadow" : ""}
      >
        <div className="h-full">
          <div className=" w-[100px] cursor-pointer select-none h-full">
            <img
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              src={Logo}
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-[50vw] flex items-center justify-center gap-8">
            <div
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer select-none"
              id="navbar_text"
            >
              Home
              <div
                className="w-full h-[3px] bg-transparent"
                id="hoverunderline"
              ></div>
            </div>
            <div
              className="cursor-pointer select-none"
              onClick={async () => {
                await navigate("/");
                scrollToabtus();
              }}
              // onClick={() => {
              //   navigate("/");
              //   scrollToabtus();
              //   // window.scrollTo({
              //   //   top: window.innerHeight * 1.95,
              //   //   behavior: "smooth",
              //   // });
              // }}
              id="navbar_text"
            >
              About us
              <div
                className="w-full h-[3px] bg-transparent"
                id="hoverunderline"
              ></div>
            </div>
            <div className="cursor-pointer select-none">
              <div
                onClick={async () => {
                  await navigate("/");
                  // window.scrollTo({
                  //   top: window.innerHeight * 2.9,
                  //   behavior: "smooth",
                  // });

                  scrollTohosps();
                }}
                className=""
                id="navbar_text"
              >
                Hospitals
                <div
                  className="w-full h-[3px] bg-transparent"
                  id="hoverunderline"
                ></div>
              </div>
            </div>
            {/* <h1 id="navbar_text">
            Doctors
            <div
              className="w-full h-[3px] bg-transparent"
              id="hoverunderline"
            ></div>
          </h1> */}
            <div
              className="cursor-pointer select-none"
              onClick={async () => {
                await navigate("/");
                // window.scrollTo({
                //   top: window.innerHeight * 4.85,
                //   behavior: "smooth",
                // });
                scrollTopackage();
              }}
              id="navbar_text"
            >
              Packages
              <div
                className="w-full h-[3px] bg-transparent"
                id="hoverunderline"
              ></div>
            </div>
            <div
              className="cursor-pointer select-none"
              onClick={async () => {
                await navigate("/");
                // window.scrollTo({
                //   top: window.innerHeight * 6.03,
                //   behavior: "smooth",
                // });
                scrollTocontact();
              }}
              id="navbar_text"
            >
              Contact
              <div
                className="w-full h-[3px] bg-transparent"
                id="hoverunderline"
              ></div>
            </div>
          </div>

          <div className=" flex gap-3">
            <button
              onClick={() => {
                setLoginPopup(!loginPopup);
              }}
              className="px-5 py-3 rounded-[9px] bg-white text-[#333333]"
              id="loginshadow"
            >
              Login
            </button>
            <button
              onClick={async () => {
                scrollTobookapp();
              }}
              className="px-5 py-3 rounded-[9px] bg-[#2E2F2A] text-white hover:bg-[#C27B1D] "
              id="bookappshadow"
            >
              Book Appointment
            </button>
          </div>
        </div>

        <div className={loginPopup ? "absolute inset-0 z-40 " : "hidden"}>
          <Login />
        </div>
      </div>
    </div>
  );
}
