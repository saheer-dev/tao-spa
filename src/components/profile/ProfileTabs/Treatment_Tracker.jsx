import React, { useContext } from "react";
import Appoinment from "./Appoinment";
import Bills from "./Bills";
import { Context } from "../../context/Context";
import Ongoing from "./treatmenttabs/Ongoing";
import Completed from "./treatmenttabs/Completed";
import Track_ongoing from "./treatmenttabs/Track_ongoing";
import DetailCompleted from "./treatmenttabs/DetailCompleted";

export default function Treatment_Tracker() {
  let treatmentactive;
  const { treatmenttab, setTreatmenttab } = useContext(Context);

  if (treatmenttab === 1) {
    treatmentactive = <Ongoing />;
  } else if (treatmenttab === 2) {
    treatmentactive = <Completed />;
  } else if (treatmenttab === 3) {
    treatmentactive = <Track_ongoing />;
  } else if (treatmenttab === 4) {
    treatmentactive = <DetailCompleted />;
  }
  return (
    <div className="mt-[24px]">
      <div className="h-[46px] flex items-center border-b-[1px] border-[#D2D2D2]">
        <button
          onClick={() => setTreatmenttab(1)}
          className={
            treatmenttab === 1 || treatmenttab === 3
              ? "text-[16px] text-[#D3860E] font-[600] p-2 py-[10px] mr-[30px] border-b-[2px] border-[#D3860E]"
              : "text-[16px] text-[#5B5B5B] font-[600] p-2 py-[10px] mr-[30px] "
          }
        >
          On Going
        </button>
        <button
          onClick={() => setTreatmenttab(2)}
          className={
            treatmenttab === 2 || treatmenttab === 4
              ? "text-[16px] text-[#D3860E] font-[600] p-2 py-[10px] mr-[30px] border-b-[2px] border-[#D3860E]"
              : "text-[16px] text-[#5B5B5B] font-[600] p-2 py-[10px] mr-[30px] "
          }
        >
          Completed
        </button>
      </div>
      <div>{treatmentactive}</div>
    </div>
  );
}
