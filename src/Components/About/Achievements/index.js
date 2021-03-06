import React from "react";
import Slider from "react-slick";
import "./styles.css";
import { ReactComponent as Meity } from "../../../assets/common/MEITY_Startup hub_logo.svg";
import { ReactComponent as EO } from "../../../assets/common/Image 5.svg";
import { ReactComponent as BackArrow } from "../../../assets/common/Group 183.svg";
import { ReactComponent as Left } from "../../../assets/common/left.svg";

function index() {
  return (
    <div className="grid grid-cols-12 gap-2 relative mt-10 lg:mt-32 items-center">
      <div className="col-span-1" />
      <div className="col-span-10 ">
        <p className="text-base lg:text-4xl font-bold lg:font-semibold text-center lg:whitespace-pre-line">
          Our Achievements
        </p>
      </div>
      <div className="col-span-1" />

      <div className="col-span-2 lg:col-span-3" />
      <div className="col-span-8 lg:col-span-6 ">
        <Slider
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={false}
          prevArrow={<Left />}
          nextArrow={<Left />}
        >
          <div className="p-2">
            <div
              className="grid grid-cols-6 items-center p-5 lg:p-14 bg-white text-center lg:text-left"
              style={{
                width: "98%",
                height: "calc(100% - 100px)",
                boxShadow: "4px 8px 10px #6D8DAD33",
              }}
            >
              <Meity className="col-span-6 lg:col-span-2 w-full relative" />
              <div className="hidden lg:block lg:col-span-1" />
              <p className="col-span-6  lg:col-span-3">
                Recipient of a grant under the TIDE 2.0 scheme by MeitY. TIDE
                aims to promote select few promising startups through financial
                and technical support.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div
              className="grid grid-cols-6 items-center p-5 lg:p-14 bg-white text-center lg:text-left"
              style={{
                width: "98%",
                height: "calc(100% - 100px)",
                boxShadow: "4px 8px 20px #6D8DAD33",
              }}
            >
              <EO className="col-span-6 lg:col-span-2 w-full relative" />
              <div className="hidden lg:block lg:col-span-1" />
              <p className="col-span-6  lg:col-span-3">
                Finalist in GSEA, AP Chapter. EO GSEA supports student
                entrepreneurs in taking their business to the next level.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="col-span-2 lg:col-span-3" />
    </div>
  );
}

export default index;
