import React from "react";
import Slider from "react-slick";
import "./styles.css";
import { ReactComponent as SaiCharan } from "../../../assets/common/Team/SaiCharan.svg";
import { ReactComponent as BackArrow } from "../../../assets/common/Group 183.svg";

const data = [
  {
    name: "Sai Charan Kommana",
    title: "Founder & CEO",
    desc: "“Main udna chahta hu, daudna chahta hu, girna bhi chahta hu. Bas rukna nahi chahta”. These famous lines from YJHD best describe me ;). A hustler!",
    pic: <SaiCharan />,
    linkedin: "https://www.linkedin.com/in/sai-charan-kommana/",
    instagram: "https://www.instagram.com/_char_a_n_/",
  },
  {
    name: "Sai Charan Kommana",
    title: "Founder & CEO",
    desc: "“Main udna chahta hu, daudna chahta hu, girna bhi chahta hu. Bas rukna nahi chahta”. These famous lines from YJHD best describe me ;). A hustler!",
    pic: "",
    linkedin: "https://www.linkedin.com/in/sai-charan-kommana/",
    instagram: "https://www.instagram.com/_char_a_n_/",
  },
  {
    name: "Sai Charan Kommana",
    title: "Founder & CEO",
    desc: "“Main udna chahta hu, daudna chahta hu, girna bhi chahta hu. Bas rukna nahi chahta”. These famous lines from YJHD best describe me ;). A hustler!",
    pic: "",
    linkedin: "https://www.linkedin.com/in/sai-charan-kommana/",
    instagram: "https://www.instagram.com/_char_a_n_/",
  },
];

function index() {
  return (
    <div className="grid grid-cols-12 gap-2 relative mt-10 lg:mt-32 items-center">
      <div className="col-span-1" />
      <div className="col-span-10 ">
        <p className="text-base lg:text-4xl font-bold lg:font-semibold text-center lg:whitespace-pre-line">
          Our Team
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
          prevArrow={<BackArrow />}
          nextArrow={<BackArrow />}
        >
          {data.map((item, id) => (
            <div key={id}>
              <div className=" border-2 border-forevv-blue rounded-2xl justify-center p-5 lg:p-14 bg-white text-center">
                <div className="w-fit ml-auto mr-auto">{item.pic}</div>
                <p className="font-semibold text-lg mt-5 mb-2">{item.name}</p>
                <p className="font-semibold text-xs text-forevv-blue mb-2">
                  {item.title}
                </p>
                <p className="italic text-base mb-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="col-span-2 lg:col-span-3" />
    </div>
  );
}

export default index;
