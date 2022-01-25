import React from "react";
import Hero from "../../Components/About/Hero";
import Partner from "../../Components/About/Partner";
import Achievements from "../../Components/About/Achievements";
import Team from "../../Components/About/Team";
import EarlyAccess from "../../Components/Common/Early Access";

function Aboutpage() {
  return (
    <div className="parentDiv">
      <Hero />
      <Partner />
      <Achievements />
      <Team />
      <EarlyAccess />
    </div>
  );
}

export default Aboutpage;
