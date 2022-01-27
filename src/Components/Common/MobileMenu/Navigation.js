import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Logo from "../../../assets/common/Logo/brandmark-design (1).svg";
import { NavLink } from "react-router-dom";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <img
      src={Logo}
      alt="Forevv"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 47,
        marginBottom: 66,
      }}
    />
    <NavLink to="/" id="navbarLink" className="mx-6 font-semibold text-base">
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
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
