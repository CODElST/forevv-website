import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Logo from "../../../assets/common/Logo/brandmark-design (1).svg";
import { NavLink } from "react-router-dom";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import "./styles.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={window.innerHeight}
      ref={containerRef}
    >
      {isOpen ? (
        <motion.div initial={false} animate={"open"}>
          <motion.div className="background" variants={sidebar} />
          <motion.ul>
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
            <div className="text-center flex flex-col gap-16">
              <NavLink
                to="/"
                id="navbarLink"
                className="mx-6 font-semibold text-2xl max-w-min ml-auto mr-auto"
                onClick={() => toggleOpen()}
              >
                <p>Home</p>
              </NavLink>
              <NavLink
                to="about"
                id="navbarLink"
                className="mx-6 font-semibold text-2xl max-w-max ml-auto mr-auto"
                onClick={() => toggleOpen()}
              >
                <p>About Us</p>
              </NavLink>
              <div
                className="flex mx-6 items-center text-center justify-center"
                onClick={() => toggleOpen()}
              >
                <p className="font-semibold text-2xl pl-8">Elevator Pitch</p>
                <ExternalLinkIcon className="h-5 w-5 ml-2" />
              </div>
              <a
                className="mx-6 cursor-pointer font-semibold text-2xl text-forevv-blue"
                onClick={() => {
                  toggleOpen();
                  var element = document.getElementById("early-access-div");
                  var headerOffset = 45;
                  var elementPosition = element.getBoundingClientRect().top;
                  var offsetPosition =
                    elementPosition + window.pageYOffset - 100;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }}
              >
                <p>Get Early Access</p>
              </a>
            </div>
          </motion.ul>
        </motion.div>
      ) : null}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
