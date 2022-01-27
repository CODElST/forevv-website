import React from "react";
import Slider from "react-slick";
import "./styles.css";
import { ReactComponent as Rectangle1 } from "../../../assets/common/Team/Rectangle 222.svg";
import { ReactComponent as Rectangle2 } from "../../../assets/common/Team/Rectangle 220.svg";
import SaiCharan from "../../../assets/common/Team/SaiCharan.svg";
import AarushSinha from "../../../assets/common/Team/AarushSinha.svg";
import ShivanshShukla from "../../../assets/common/Team/ShivanshShukla.svg";
import VanshikaThakur from "../../../assets/common/Team/VanshikaThakur.svg";
import GeethaCharan from "../../../assets/common/Team/GeethaCharan.svg";
import AshutoshTewari from "../../../assets/common/Team/AshutoshTewari.svg";
import AnujBatra from "../../../assets/common/Team/AnujBatra.svg";
import NikhilSrivastava from "../../../assets/common/Team/NikhilSrivastava.svg";
import KrishnaVarma from "../../../assets/common/Team/KrishnaVarma.svg";
import ForevvLogo from "../../../assets/mobileSpecific/Logo/brandmark-design-mobile.svg";
import Linkedin from "../../../assets/common/Linkedin.svg";
import Insta from "../../../assets/common/Insta.svg";
import { ReactComponent as BackArrow } from "../../../assets/common/Group 183.svg";
import { ReactComponent as ForwardArrow } from "../../../assets/common/left.svg";
import { motion } from "framer-motion";

const TeamData = [
  {
    name: "Sai Charan Kommana",
    title: "Founder & CEO",
    desc: "“Main udna chahta hu, daudna chahta hu, girna bhi chahta hu. Bas rukna nahi chahta”. These famous lines from YJHD best describe me ;).",
    pic: SaiCharan,
    linkedin: "https://www.linkedin.com/in/sai-charan-kommana/",
    instagram: "https://www.instagram.com/_char_a_n_/",
  },
  {
    name: "Shivansh Shukla",
    title: "Software Developer",
    desc: "Backend developer specializing in Python & Django. When not on projects, you will find me hooked to a sci-fi book or a game.",
    pic: ShivanshShukla,
    linkedin: "https://www.linkedin.com/in/shuklashivansh/",
    instagram: "https://www.instagram.com/shivansh.dmg/",
  },
  {
    name: "Aarush Sinha",
    title: "Software Developer",
    desc: "A ReactJS & React Native guy exploring a bit of UI/UX and AR/VR domains. Love binging movies, series and anime. :))",
    pic: AarushSinha,
    linkedin: "https://www.linkedin.com/in/aarush-sinha-66a790201/",
    instagram: "https://www.instagram.com/aarush.py/",
  },
  {
    name: "Vanshika Thakur",
    title: "Associate Software Developer",
    desc: "Caught up in front-end development ;p. I am a tech-geek who loves to read sci-fi books, besides sipping coffee.",
    pic: VanshikaThakur,
    linkedin: "https://www.linkedin.com/in/vanshika-thakur-249204200/",
    instagram: "https://www.instagram.com/v4nshikaaa/",
  },
  {
    name: "Geetha Charan",
    title: "Design Lead",
    desc: "Been on a rather bumpy ride before finally landing in UI/UX. Love empathetic design patterns, apart from cooking. :)",
    pic: GeethaCharan,
    linkedin: "https://www.linkedin.com/in/aarush-sinha-66a790201/",
    instagram: "https://www.instagram.com/aarush.py/",
  },
  {
    name: "Krishna Varma Sagi",
    title: "Operations Manager",
    desc: "Just a motorsport lover. Novels, Series, Coffee - I can do these all day. 'Just do it' defines me the best. ;)",
    pic: KrishnaVarma,
    linkedin: "https://www.linkedin.com/in/krishna-varma-sagi-5062a6222/",
    instagram: "",
  },
  {
    name: "Anuj Batra",
    title: "Business Advisor",
    desc: "",
    pic: AnujBatra,
    linkedin: "",
    instagram: "",
  },
  {
    name: "Ashutosh Tewari",
    title: "Business Advisor",
    desc: "",
    pic: AshutoshTewari,
    linkedin: "",
    instagram: "",
  },
  {
    name: "Nikhil Srivatsa",
    title: "Technical Advisor",
    desc: "",
    pic: NikhilSrivastava,
    linkedin: "",
    instagram: "",
  },
];

function TeamComponent() {
  const [data, setData] = React.useState(TeamData[0]);
  return (
    <div className="grid grid-cols-12 gap-2 relative mt-10 lg:mt-32 items-center lg:mb-36">
      <div className="col-span-1" />
      <div className="col-span-10 xl:col-span-4">
        <p className="text-base lg:text-3xl font-bold lg:font-semibold text-center lg:whitespace-pre-line">
          Our Team
        </p>
      </div>

      <div className="col-span-1 xl:col-span-7" />

      <div className="col-span-2 xl:col-span-1" />
      <div className="col-span-8 xl:hidden ">
        <Slider
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={false}
          prevArrow={<BackArrow />}
          nextArrow={<ForwardArrow />}
        >
          {TeamData.map((item, id) => (
            <div key={id}>
              <div className=" border-2 rounded-2xl border-forevv-blue mx-1 mb-6 justify-center p-2 lg:p-14 bg-white text-center">
                <div className="w-fit ml-auto mr-auto">
                  <img
                    src={item.pic}
                    alt=""
                    style={{ maxWidth: 125, maxHeight: 125, marginTop: 28 }}
                  />
                </div>
                <p className="font-semibold text-lg mt-5 mb-2">{item.name}</p>
                <p className="font-semibold text-xs text-forevv-blue mb-2">
                  {item.title}
                </p>
                <p className="italic text-base mb-2">{item.desc}</p>
                <div className="flex flex-row justify-center">
                  {item.linkedin !== "" ? (
                    <img
                      src={Linkedin}
                      alt=""
                      style={{ height: 60, width: 60 }}
                    />
                  ) : null}
                  {item.instagram !== "" ? (
                    <img src={Insta} alt="" style={{ height: 60, width: 60 }} />
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden xl:block xl:col-span-4 ">
        <div className="w-min ml-auto mr-auto mt-16">
          <Rectangle1 />
          <div
            className="absolute top-16"
            style={{ width: "414px", height: "536px" }}
          >
            <img
              id="teamMemberDp"
              src={SaiCharan}
              alt=""
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: 10,
                left: "36px",
                borderColor: data.pic === SaiCharan ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[0])}
            />
            <img
              id="teamMemberDp"
              src={ShivanshShukla}
              alt=""
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: 10,
                right: 36,
                borderColor: data.pic === ShivanshShukla ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[1])}
            />
            <img
              id="teamMemberDp"
              src={AarushSinha}
              alt=""
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                right: -72,
                transform: "translateY(-50%)",
                borderColor: data.pic === AarushSinha ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[2])}
            />
            <img
              id="teamMemberDp"
              src={VanshikaThakur}
              alt=""
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                left: -72,
                transform: "translateY(-50%)",
                borderColor: data.pic === VanshikaThakur ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[3])}
            />
            <img
              id="teamMemberDp"
              src={GeethaCharan}
              alt=""
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                bottom: 42,
                right: 36,
                borderColor: data.pic === GeethaCharan ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[4])}
            />

            <img
              id="teamMemberDp"
              src={KrishnaVarma}
              alt=""
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                bottom: 42,
                left: 36,
                borderColor: data.pic === KrishnaVarma ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[5])}
            />
            <img
              src={ForevvLogo}
              alt=""
              className="rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: 132,
                width: 132,
                boxShadow: "4px 4px 20px #00000033",
              }}
            />
          </div>
        </div>
        <p className="text-base lg:text-3xl lg:mt-16 font-bold lg:font-semibold text-center lg:whitespace-pre-line">
          Advisors
        </p>
        <div className="w-min ml-auto mr-auto mt-7">
          <Rectangle2 />
          <div
            className="absolute top-7"
            style={{ width: "414px", height: "183px", top: 650 }}
          >
            <img
              id="teamMemberDp"
              src={AnujBatra}
              alt=""
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                left: -36,
                transform: "translateY(-50%)",
                borderColor: data.pic === AnujBatra ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[6])}
            />
            <img
              id="teamMemberDp"
              src={AshutoshTewari}
              alt=""
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderColor: data.pic === AshutoshTewari ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[7])}
            />
            <img
              id="teamMemberDp"
              src={NikhilSrivastava}
              alt=""
              className="border-4 rounded-full"
              style={{
                position: "absolute",
                top: "50%",
                right: -36,
                transform: "translateY(-50%)",
                borderColor: data.pic === NikhilSrivastava ? "#4896EF" : null,
              }}
              onClick={() => setData(TeamData[8])}
            />
          </div>
        </div>
      </div>
      <div className=" hidden xl:block xl:col-span-1" />
      <div className="hidden xl:block xl:col-span-5 items-start">
        <div className="border-2 border-forevv-blue rounded-2xl max-w-xl ml-auto mr-0 p-14 bg-white text-center">
          <div className="w-fit ml-auto mr-auto">
            <img src={data.pic} alt="" style={{ height: 250, width: 250 }} />
          </div>
          <p className="font-semibold text-3xl mt-5 mb-2">{data.name}</p>
          <p className="font-semibold text-xl text-forevv-blue mb-5">
            {data.title}
          </p>
          <p className="italic text-2xl mb-2">{data.desc}</p>
          <div className="flex flex-row justify-center mt-5">
            {data.linkedin !== "" ? (
              <motion.a
                whileHover={{ scale: 1.1, rotateZ: -30 }}
                href={data.linkedin}
                target={"_blank"}
              >
                <img src={Linkedin} alt="" />
              </motion.a>
            ) : null}
            {data.instagram !== "" ? (
              <motion.a
                whileHover={{ scale: 1.1, rotateZ: -30 }}
                href={data.instagram}
                target={"_blank"}
              >
                <img src={Insta} alt="" />
              </motion.a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="col-span-2 xl:col-span-1" />
    </div>
  );
}

export default TeamComponent;
