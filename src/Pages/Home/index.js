import React from "react";
import Hero from "../../Components/Home/Hero";
import EarlyAccess from "../../Components/Common/Early Access";
import Features from "../../Components/Home/Features";

function Homepage() {
  return (
    <div className="parentDiv">
      <Hero />

      <EarlyAccess />
      <Features />
    </div>
  );
}

export default Homepage;
