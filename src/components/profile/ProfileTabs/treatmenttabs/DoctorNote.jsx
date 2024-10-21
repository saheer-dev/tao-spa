import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../../../context/Context";

export default function DoctorNote() {
  const { docnote, setDocnote } = useContext(Context);

  const docnoteref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (docnoteref.current && !docnoteref.current.contains(event.target)) {
        setDocnote(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [docnoteref]);
  return (
    <div className="h-screen   flex items-center justify-center w-screen bg-black/60 ">
      <div
        className="w-[40vw] py-8 px-8 bg-white rounded-[32px] relative flex items-start justify-center flex-col"
        ref={docnoteref}
      >
        <h1 className="text-[18px] font-[600] mb-4">Therapist Note</h1>
        <button
          onClick={() => {
            setDocnote(false);
          }}
          className="absolute top-5 right-6 scale-[.8]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M24 8L8 24"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <p className="max-h-[40vh] overflow-x-hidden overflow-y-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime illum
          architecto dignissimos commodi atque, ducimus veritatis quisquam
          mollitia impedit asperiores alias magni cum dolorem at cupiditate est
          laborum itaque ipsa eos natus, officia blanditiis laboriosam saepe?
          Odio eligendi quod vitae necessitatibus deleniti quaerat. Veniam eos .
        </p>
      </div>
    </div>
  );
}
