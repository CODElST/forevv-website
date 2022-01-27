import React from "react";
import { ReactComponent as Feature1 } from "../../../assets/common/Group 213.svg";
import { ReactComponent as Feature1Mobile } from "../../../assets/mobileSpecific/Group 237.svg";
import { ReactComponent as Feature2 } from "../../../assets/common/Group 225.svg";
import { ReactComponent as Feature2Mobile } from "../../../assets/mobileSpecific/Group 238.svg";
import { ReactComponent as Feature3 } from "../../../assets/common/undraw_share_link_qtxe.svg";
import { ReactComponent as Feature3Mobile } from "../../../assets/mobileSpecific/undraw_share_link_qtxe.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

function index() {
  return (
    <div className="grid grid-cols-12 gap-2 relative -mt-8 mb-14 lg:mb-36 lg:mt-12 items-center">
      <div className="col-span-1" />
      <div className="col-span-10 lg:col-span-4">
        <p className="text-base font-semibold my-7 text-center lg:text-left lg:text-4xl lg:whitespace-pre-line">
          Create cool visual{"\n"} memory lanes!
        </p>
        <div className="grid grid-cols-1 lg:hidden">
          <Feature1Mobile className="w-full" />
        </div>
        <p className="text-base font-regular mt-10 lg:mt-0 lg:text-2xl whitespace-pre-line">
          'A walk down the memory lane' is no longer just in your head. You can
          now actually go on a vitual walk down your memory lanes.
        </p>
        <motion.p
          whileHover={{ x: 10 }}
          className="text-base cursor-pointer hidden lg:block font-semibold lg:text-2xl mt-2 lg:mt-7 text-right text-forevv-blue whitespace-pre-line"
          style={{
            marginRight: -(window.innerWidth / 12),
          }}
        >
          Get early access!
        </motion.p>
        <p className="text-base lg:hidden font-semibold lg:text-2xl mt-2 lg:mt-7 text-right text-forevv-blue whitespace-pre-line">
          Get early access!
        </p>
      </div>
      <div className="col-span-1" />
      <div className="col-span-5 hidden lg:block">
        <Feature1 className="w-full pl-11" />
      </div>
      <div className="hidden lg:block lg:col-span-1" />
      <div className="hidden lg:block lg:col-span-1" />
      <div className="col-span-5 hidden mt-3 lg:mt-52 lg:block">
        <Feature2 className="max-w-full" />
      </div>
      <div className="col-span-1" />
      <div className="col-span-10 lg:col-span-4 lg:mt-52">
        <p className="text-base font-semibold my-7 text-center lg:text-left lg:text-4xl lg:whitespace-pre-line">
          You're now all set to live{"\n"} your memory lanes visually!
        </p>
        <div className="grid grid-cols-1 lg:hidden">
          <Feature2Mobile className=" w-full" />
        </div>
        <p className="text-base font-regular mt-10 lg:mt-0 lg:text-2xl  whitespace-pre-line">
          Record all your milestones, the ups and downs through the journey, and
          the beautiful moments you share with your loved ones.
        </p>
        <motion.p
          whileHover={{ x: 10 }}
          className="text-base cursor-pointer font-semibold lg:text-2xl mt-2 lg:mt-7 text-right text-forevv-blue whitespace-pre-line"
        >
          Get early access!
        </motion.p>
      </div>
      <div className="col-span-1" />

      <div className="col-span-1" />

      <div className="col-span-10 lg:col-span-4 lg:relative lg:mt-auto lg:mb-auto">
        <p className="text-base font-semibold my-7 lg:mt-52 text-center lg:text-left lg:text-4xl lg:whitespace-pre-line">
          Come along with your{"\n"} loved ones!
        </p>
        <div className="grid grid-cols-1 lg:hidden">
          <Feature3Mobile className="w-full" />
        </div>
        <p className="text-base font-regular mt-10 lg:mt-0  lg:text-2xl  whitespace-pre-line">
          Collaborative Memory Lanes are common between you and your partner in
          crime - An event added by either of you is visible to the other.
        </p>
        <motion.p
          whileHover={{ x: 10 }}
          className="text-base cursor-pointer hidden lg:block font-semibold lg:text-2xl mt-2 lg:mt-7 text-right text-forevv-blue whitespace-pre-line"
          style={{
            marginRight: -(window.innerWidth / 12),
          }}
          while
        >
          Get early access!
        </motion.p>
        <p className="text-base lg:hidden font-semibold lg:text-2xl mt-2 lg:mt-7 text-right text-forevv-blue whitespace-pre-line">
          Get early access!
        </p>
      </div>
      <div className="col-span-2" />
      <div className="col-span-4 hidden mt-3 lg:mt-44 lg:block">
        <Feature3 className=" max-w-full max-h-full ml-auto mr-auto" />
      </div>
      <div className="col-span-1" />
    </div>
  );
}

export default index;
