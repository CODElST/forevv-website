import React from "react";
import { ReactComponent as SvgEarlyAccess } from "../../../assets/common/Group 245 (2).svg";
import { ReactComponent as Trophy } from "../../../assets/common/trophy.svg";
import { motion } from "framer-motion";

function index() {
  return (
    <div
      id="early-access-div"
      className="grid grid-cols-12 gap-2 mt-12 lg:mt-0 mb-14 lg:mb-0"
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
      <div className="col-span-10 lg:col-span-3 text-center ml-auto mr-auto justify-center items-center lg:mt-8 lg:text-left">
        <p className="text-base font-semibold lg:text-xl">
          Your chance to win:
        </p>
        <div className="flex-col mt-2 my-10 lg:h-40 lg:mt-7 ">
          <div className="flex flex-row items-center">
            <Trophy />
            <p className="text-base font-normal ml-4 lg:text-2xl lg:font-semibold">
              'Changemaker' Badge
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Trophy />
            <p className="text-base font-normal ml-4 my-2 lg:text-2xl lg:font-semibold lg:my-7">
              Forevv Merchandise
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Trophy />
            <p className="text-base font-normal ml-4 lg:text-2xl lg:font-semibold">
              Free Pro Subscription
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3">
        <SvgEarlyAccess
          className="hidden lg:block w-full "
          style={{
            height: 440,
            transform: "translateY(-50%)",
            top: "30%",
            left: "-10%",
            position: "relative",
          }}
        />
      </div>
      <div className="col-span-1 lg:hidden" />
      <div className="col-span-10 lg:col-span-4  lg:mt-12 text-left justify-center">
        <div className="grid grid-cols-2 gap-7 lg:mt-0 ">
          <input
            type="text"
            placeholder="Your name"
            className="col-span-2 border-forevv-blue rounded-lg border-2 h-10 lg:h-14 px-5"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border-2 h-10 lg:h-14 px-5"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="col-span-2 lg:col-span-1 border-forevv-blue rounded-lg border-2 h-10 lg:h-14 px-5"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="col-span-2 rounded-full lg:mt-8 bg-forevv-blue w-32 h-10 lg:w-60 lg:h-14 ml-auto mr-auto"
            style={{ maxWidth: 266 }}
          >
            <p className="text-sm lg:text-xl font-semibold text-white">
              Let me try!
            </p>
          </motion.button>
        </div>
      </div>
      <div className="col-span-1" />
    </div>
  );
}

export default index;
