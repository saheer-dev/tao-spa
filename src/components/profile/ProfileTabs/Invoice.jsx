import React, { useMemo } from "react";

export default function Invoice() {
  const invoice = useMemo(
    () => [
      {
        Therapist: "Anandhu S Saeran",
        BillID: "DGJ 12234",
        Treatment: "Nero Physio ",
        Time: "12:30 PM",
        Date: "12 Nov 2023",
        Amount: "$3,555",
        Status: "Unpaid",
      },
      {
        Therapist: "Anandhu S Saeran",
        BillID: "DGJ 12234",
        Treatment: "Nero Physio ",
        Time: "12:30 PM",
        Date: "12 Nov 2023",
        Amount: "$3,555",
        Status: "paid",
      },
      {
        Therapist: "Anandhu S Saeran",
        BillID: "DGJ 12234",
        Treatment: "Nero Physio ",
        Time: "12:30 PM",
        Date: "12 Nov 2023",
        Amount: "$3,555",
        Status: "Unpaid",
      },
      {
        Therapist: "Anandhu S Saeran",
        BillID: "DGJ 12234",
        Treatment: "Nero Physio ",
        Time: "12:30 PM",
        Date: "12 Nov 2023",
        Amount: "$3,555",
        Status: "paid",
      },
      {
        Therapist: "Anandhu S Saeran",
        BillID: "DGJ 12234",
        Treatment: "Nero Physio ",
        Time: "12:30 PM",
        Date: "12 Nov 2023",
        Amount: "$3,555",
        Status: "Unpaid",
      },
      {
        Therapist: "Anandhu S Saeran",
        BillID: "DGJ 12234",
        Treatment: "Nero Physio ",
        Time: "12:30 PM",
        Date: "12 Nov 2023",
        Amount: "$3,555",
        Status: "Unpaid",
      }
     
    ],
    []
  );

  return (
  <>
   

            <div className="flex flex-col mt-6 gap-2">
            <div className="flex justify-around px-6 py-1 text-[16px] font-[600]">
              <div className="w-[20%]">Therapist Name </div>
              <div className="w-[15%]">Invoice ID </div>
              <div className="w-[15%]">Treatment </div>
              <div className="w-[15%]">Time </div>
              <div className="w-[15%]">Date </div>
              <div className="w-[15%]">Amount </div>
              <div className="w-[15%]">Status </div>
              <div className="w-[1%]"> </div>
              </div>

                {
                  invoice.map((invoice)=>(
                    <div className="flex justify-around px-6 py-4 rounded-[8px] border-[1px] bg-white opacity-[.8] border-[#C0C0C0]">
                  <div className="w-[20%] text-[14px]">{invoice.Therapist}</div>
                  <div className="w-[15%] text-[14px]">{invoice.BillID}</div>
                  <div className="w-[15%] text-[14px]">{invoice.Treatment}</div>
                  <div className="w-[15%] text-[14px]">{invoice.Time}</div>
                  <div className="w-[15%] text-[14px]">{invoice.Date}</div>
                  <div className="w-[15%] text-[14px]">{invoice.Amount}</div>
                  <div className="w-[15%] text-[14px]">
                    <button className={invoice.Status=='Unpaid'?"bg-[rgba(241,30,30,0.12)] w-fit px-3 py-1  rounded-full text-[#F11E1E]":"bg-[rgba(0,128,0,0.12)] w-fit px-3 py-1  rounded-full text-[#008000]"}>{invoice.Status}</button>
                  </div>
                  <div className="w-[1%] text-[14px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M10 14.7497V3.08301" stroke="#333333" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 9.75L10 14.75L15 9.75" stroke="#333333" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.8337 18.083H4.16699" stroke="#333333" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></div>

                </div>
                  ))
                }
           </div>
  
  </>
  );
};

