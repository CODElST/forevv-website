import React from "react";
import { ReactComponent as GooglePlayBadge } from "../../../assets/common/GooglePlayStoreBadge.svg";
import { ReactComponent as AppStoreBadge } from "../../../assets/common/AppStoreBadge.svg";
import { ReactComponent as SvgHome } from "../../../assets/common/Group 244.svg";
import AppStore from "../../../assets/common/AppStoreBadge.svg";
import PlayStore from "../../../assets/common/GooglePlayStoreBadge.svg";
import { motion } from "framer-motion";

function index() {
  return (
    <>
      <div
        className="hidden lg:grid grid-cols-12 gap-2 lg:h-screen"
        style={{ minHeight: 1000, maxHeight: 2000 }}
      >
        <div className="col-span-1 block lg:hidden" />
        <div className="col-span-10 flex lg:hidden items-center max-h-72 ">
          <SvgHome className="max-h-72 " />
        </div>
        <div className="col-span-1 block lg:hidden" />
        <div className="col-span-1" />
        <div className="col-span-10 lg:col-span-5 text-center lg:text-left">
          <p
            className="text-6xl font-bold relative top-1/4 hidden lg:block"
            style={{ lineHeight: "82px" }}
          >
            A platform to visualise your life's memory lanes
          </p>
          <p
            className="text-lg font-bold relative block lg:hidden"
            style={{ lineHeight: "24px" }}
          >
            A platform to visualise your life's memory lanes
          </p>
          <p className="text-base font-semibold lg:text-2xl lg:font-bold relative mt-5 lg:top-1/4 lg:mt-14 whitespace-pre-line">
            Capture memories in an ever more{"\n"} inclusive, immersive &
            innovative style.
          </p>
          <div className="flex relative lg:top-1/4 mt-10 lg:mt-10 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="border-2 rounded-full border-forevv-blue w-32 h-10 lg:w-64 lg:h-16"
              style={{ maxWidth: 266 }}
            >
              <p className="text-sm lg:text-2xl font-semibold text-forevv-blue">
                Contact Us!
              </p>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full  bg-forevv-blue w-32 h-10 ml-5 lg:w-64 lg:h-16 lg:ml-10"
              style={{ maxWidth: 266 }}
            >
              <p className="text-sm lg:text-2xl font-semibold text-white">
                Sign up
              </p>
            </motion.button>
          </div>
          <div className="relative lg:top-1/4 flex items-center mt-10 lg:mt-10 justify-center lg:justify-start">
            <p className="text-base font-semibold lg:text-2xl lg:font-bold min-w-max">
              Coming Soon on
            </p>
            <img
              src={AppStore}
              alt=""
              className="mx-5"
              style={{ maxWidth: 165 }}
            />
            <img src={PlayStore} alt="" style={{ maxWidth: 165 }} />
          </div>
        </div>
        <div className="col-span-5 hidden lg:flex items-center ">
          <SvgHome className="w-full" />
        </div>
        <div className="col-span-1" />
      </div>

      <div className="grid lg:hidden grid-cols-12 gap-2 ">
        <div className="col-span-1 block lg:hidden" />
        <div className="col-span-10 flex lg:hidden items-center max-h-72 ">
          <SvgHome className="max-h-72 " />
        </div>
        <div className="col-span-1 block lg:hidden" />
        <div className="col-span-1" />
        <div className="col-span-10 lg:col-span-5 text-center lg:text-left">
          <p
            className="text-6xl font-bold relative top-1/4 hidden lg:block"
            style={{ lineHeight: "82px" }}
          >
            A platform to visualise your life's memory lanes
          </p>
          <p
            className="text-lg font-bold relative block lg:hidden"
            style={{ lineHeight: "24px" }}
          >
            A platform to visualise your life's memory lanes
          </p>
          <p className="text-base font-semibold lg:text-2xl lg:font-bold relative mt-5 lg:top-1/4 lg:mt-14 whitespace-pre-line">
            Capture memories in an ever more{"\n"} inclusive, immersive &
            innovative style.
          </p>
          <div className="flex relative lg:top-1/4 mt-10 lg:mt-10 justify-center lg:justify-start">
            <button
              className="border-2 rounded-full border-forevv-blue w-32 h-10 lg:w-64 lg:h-16"
              style={{ maxWidth: 266 }}
            >
              <p className="text-sm lg:text-2xl font-semibold text-forevv-blue">
                Contact Us!
              </p>
            </button>
            <button
              className="rounded-full  bg-forevv-blue w-32 h-10 ml-5 lg:w-64 lg:h-16 lg:ml-10"
              style={{ maxWidth: 266 }}
            >
              <p className="text-sm lg:text-2xl font-semibold text-white">
                Sign up
              </p>
            </button>
          </div>
          <div className="relative lg:top-1/4 flex items-center mt-10 lg:mt-10 justify-center lg:justify-start">
            <p className="text-base font-semibold lg:text-2xl lg:font-bold min-w-max">
              Coming Soon on
            </p>
            <img
              src={AppStore}
              alt=""
              className="mx-4"
              style={{ maxWidth: 72 }}
            />
            <img src={PlayStore} alt="" style={{ maxWidth: 72 }} />
          </div>
        </div>
        <div className="col-span-5 hidden lg:flex items-center ">
          <SvgHome className="w-full" />
        </div>
        <div className="col-span-1" />
      </div>
    </>
  );
}

export default index;
