import React from "react";
import { ReactComponent as SvgEarlyAccess } from "../../../assets/common/Group 245 (2).svg";

function index() {
  return (
    <div
      id="early-access-div"
      className="grid grid-cols-12 gap-2 relative mt-12 lg:mt-52"
    >
      <div className="col-span-1 lg:col-span-7" />
      <div className="col-span-10 lg:col-span-4 text-center justify-center">
        <p className="text-base font-semibold lg:text-4xl">Get Early Access</p>
      </div>
      <div className="col-span-1" />
      <div className="col-span-1 lg:hidden" />
      <div className="col-span-10 lg:hidden ml-auto mr-auto">
        <SvgEarlyAccess />
      </div>
      <div className="col-span-1 lg:hidden" />
      <div className="col-span-1" />
      <div className="col-span-10 lg:col-span-3 text-center justify-center items-center lg:mt-16 lg:text-left">
        <p className="text-base font-semibold lg:text-xl">
          Your chance to win:
        </p>
        <div className="flex-col mt-2 my-10 lg:h-40 lg:mt-7 ">
          <p className="text-base font-normal  lg:text-2xl lg:font-semibold">
            'Changemaker' Badge
          </p>
          <p className="text-base font-normal my-2 lg:text-2xl lg:font-semibold lg:my-7">
            Forevv Merchandise
          </p>
          <p className="text-base font-normal  lg:text-2xl lg:font-semibold">
            Free Pro Subscription
          </p>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3">
        <SvgEarlyAccess
          className="hidden lg:block w-full "
          style={{
            height: 440,
            transform: "translateY(-50%)",
            top: "40%",
            left: "-10%",
            position: "relative",
          }}
        />
      </div>
      <div className="col-span-1 lg:hidden" />
      <div className="col-span-10 lg:col-span-4  lg:mt-16 text-left justify-center">
        <div className="grid grid-cols-2 gap-7 lg:mt-0 ">
          <input
            type="text"
            placeholder="Your name"
            className="col-span-2 border-forevv-blue rounded-lg border-2 h-10 lg:h-14 px-5"
          />
          <input
            type="text"
            placeholder="56486515"
            className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border-2 h-10 lg:h-14 px-5"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border-2 h-10 lg:h-14 px-5"
          />
          <button
            className="col-span-2 rounded-full lg:mt-8 bg-forevv-blue w-32 h-10 lg:w-60 lg:h-14 ml-auto mr-auto"
            style={{ maxWidth: 266 }}
          >
            <p className="text-sm lg:text-xl font-semibold text-white">
              Let me try!
            </p>
          </button>
        </div>
      </div>
      <div className="col-span-1" />
    </div>
  );
}

export default index;
