import React from "react";
import AppStore from "../../../assets/common/AppStoreBadge.svg";
import PlayStore from "../../../assets/common/GooglePlayStoreBadge.svg";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { MailIcon } from "@heroicons/react/solid";
import Linkedin from "../../../assets/common/Linkedin.svg";
import Instagram from "../../../assets/common/Insta.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

function index() {
  return (
    <div className="h-72 bottom-0 bg-footer-black">
      <div className="grid grid-cols-12 gap-2 h-full items-center text-white">
        <div className="col-span-1 lg:col-span-2" />
        <div className="col-span-10 lg:col-span-8 flex flex-row relative justify-between">
          <div className="flex flex-col gap-5 text-start">
            <p className="text-sm font-semibold  lg:text-2xl lg:whitespace-pre-line">
              QUICK LINKS
            </p>
            <NavLink to="/">
              <p className="text-xs font-normal lg:text-xl lg:whitespace-pre-line">
                Home
              </p>
            </NavLink>
            <NavLink to="about">
              <p className="text-xs font-normal lg:text-xl lg:whitespace-pre-line">
                About
              </p>
            </NavLink>

            <div className="flex flex-row items-center">
              <p className="text-xs font-normal lg:text-xl lg:whitespace-pre-line">
                Elevator Pitch
              </p>
              <ExternalLinkIcon className="h-5 w-5 ml-3" />
            </div>
          </div>
          <div className="flex-col gap-5 text-start hidden lg:flex">
            <p className="text-base font-semibold lg:text-2xl lg:whitespace-pre-line">
              COMING SOON ON
            </p>
            <img src={AppStore} alt="" style={{ maxWidth: 144 }} />
            <img src={PlayStore} alt="" style={{ maxWidth: 144 }} />
          </div>
          <div className="flex flex-col gap-5 text-start">
            <p className="text-sm font-semibold lg:text-2xl lg:whitespace-pre-line">
              CONTACT US
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@forevv.in"
              target={"_blank"}
              className="flex flex-row items-center"
            >
              <IoIosMail size={"1.875em"} className="mr-2" />
              <p className="text-xs font-normal lg:text-xl lg:whitespace-pre-line">
                hello@forevv.in
              </p>
            </a>

            <a
              href="https://www.linkedin.com/company/forevv/"
              target={"_blank"}
              className="flex flex-row items-center"
            >
              <AiFillLinkedin size={"1.875em"} className="mr-2" />
              <p className="text-xs font-normal lg:text-xl lg:whitespace-pre-line">
                Forevv
              </p>
            </a>
            <a
              href="https://www.instagram.com/forevv_india/"
              target={"_blank"}
              className="flex flex-row items-center"
            >
              <AiOutlineInstagram size={"1.875em"} className="mr-2" />
              <p className="text-xs font-normal lg:text-xl lg:whitespace-pre-line">
                @forevv_india
              </p>
            </a>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2" />
        <div className="col-span-1 lg:hidden" />
        <div className="flex-row col-span-10 gap-4 text-start flex lg:hidden">
          <p className="text-sm font-semibold lg:text-2xl lg:whitespace-pre-line">
            COMING SOON ON
          </p>
          <img src={AppStore} alt="" style={{ maxWidth: 72 }} />
          <img src={PlayStore} alt="" style={{ maxWidth: 72 }} />
        </div>
      </div>
    </div>
  );
}

export default index;
