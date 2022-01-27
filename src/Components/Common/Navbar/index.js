import React from "react";
import { ReactComponent as BrandLogo } from "../../../assets/common/Logo/brandmark-design (1).svg";
import { ReactComponent as BrandLogoMobile } from "../../../assets/mobileSpecific/Logo/brandmark-design-mobile.svg";
import { ReactComponent as MenuIconMobile } from "../../../assets/mobileSpecific/Group 184 (1).svg";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "../MobileMenu";

function index() {
  return (
    <div className="absolute top-0">
      <header className="w-full fixed bg-white h-12 px-6 lg:px-20 shadow-[0_4px_8px_#6D8DAD33] lg:h-20">
        <div className="hidden lg:flex h-full w-full content-center ">
          <BrandLogo className="relative top-1/2 -translate-y-1/2" />
          <div className="flex items-center h-full relative ml-auto mr-0">
            <NavLink
              to="/"
              id="navbarLink"
              className="mx-6 font-semibold text-base"
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to="about"
              id="navbarLink"
              className="mx-6 font-semibold text-base"
            >
              <p>About Us</p>
            </NavLink>
            <div className="flex mx-6 items-center">
              <p className=" font-semibold text-base ">Elevator Pitch</p>
              <ExternalLinkIcon className="h-4 w-4 ml-3" />
            </div>
            <a
              className="mx-6 cursor-pointer font-semibold text-base text-forevv-blue"
              onClick={() => {
                var element = document.getElementById("early-access-div");
                var headerOffset = 45;
                var elementPosition = element.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - 100;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }}
            >
              <p>Get Early Access</p>
            </a>
          </div>
        </div>
        <div className="flex lg:hidden h-full w-full content-center">
          <MobileMenu className="relative top-1/2 -translate-y-1/2 right-0" />
          <BrandLogoMobile className="relative top-1/2 -translate-y-1/2 shadow-md rounded-full" />
        </div>
      </header>
    </div>
  );
}

export default index;
