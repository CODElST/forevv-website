import React from "react";
import { ReactComponent as Nasscom } from "../../../assets/common/Logo/Nasscom.svg";
import Caarya from "../../../assets/common/Logo/Caarya.svg";
import { ReactComponent as IEDLogo } from "../../../assets/common/Logo/IED.svg";
import { ReactComponent as Xartup } from "../../../assets/common/Logo/Xartup.svg";

function index() {
  return (
    <div className="grid grid-cols-12 gap-2 relative mt-10 lg:mt-0 items-center">
      <div className="col-span-1" />
      <div className="col-span-10 ">
        <p className="text-base lg:text-4xl font-bold lg:font-semibold text-center lg:whitespace-pre-line">
          We are a part of...
        </p>
      </div>
      <div className="col-span-1" />

      <div className="col-span-1" />
      <div className="col-span-10 lg:col-span-5 flex flex-row justify-around">
        <Nasscom className="max-h-40 md:max-h-fit " />
        <img src={Caarya} alt="" className="max-h-40 md:max-h-fit " />
      </div>
      <div className="col-span-1 lg:hidden" />

      <div className="col-span-1 lg:hidden" />
      <div className="col-span-10 lg:col-span-5 flex flex-row justify-around">
        <IEDLogo className="max-h-40 md:max-h-fit " />
        <Xartup className="max-h-40 md:max-h-fit " />
      </div>
      <div className="col-span-1" />
    </div>
  );
}

export default index;
