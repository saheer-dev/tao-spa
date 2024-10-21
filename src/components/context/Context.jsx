import React, { createContext, useRef, useState } from "react";

const Context = createContext();

const AppProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [usertype, setUsertype] = useState(1);
  const [profiletab, setProfiletab] = useState(1);
  const [treatmenttab, setTreatmenttab] = useState(1);
  const [loginPopup, setLoginPopup] = useState(false);
  const [appsubmit, setAppsubmit] = useState(false);
  const [docnote, setDocnote] = useState(false);

  const anchorabtusRef = useRef(null);
  const anchorhospitalRef = useRef(null);
  const anchorpackageRef = useRef(null);
  const anchorcontactRef = useRef(null);
  const anchorbookappRef = useRef(null);

  return (
    <Context.Provider
      value={{
        step,
        setStep,
        usertype,
        setUsertype,
        profiletab,
        setProfiletab,
        loginPopup,
        setLoginPopup,
        treatmenttab,
        setTreatmenttab,
        appsubmit,
        setAppsubmit,
        anchorabtusRef,
        anchorhospitalRef,
        anchorpackageRef,
        anchorcontactRef,
        anchorbookappRef,
        docnote,
        setDocnote,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };
