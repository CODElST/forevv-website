import React from "react";
import { ReactComponent as Blob } from "../../../assets/common/brandmark-blob.svg";

function index() {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-1 block lg:hidden" />
      <div className="col-span-10 flex lg:hidden items-center ">
        <Blob className="w-full" />
      </div>
      <div className="col-span-1 block lg:hidden" />
      <div className="col-span-1" />
      <div className="col-span-10 lg:col-span-6 lg:text-left lg:h-screen">
        <p className="text-base lg:text-2xl font-normal relative lg:top-1/2 lg:-translate-y-1/2 whitespace-pre-line">
          Memories are at the core of our lives - they make us what we are.
          {"\n"}
          {"\n"}
          Forevv is a 6-month old BITSian technology startup in the social
          entrepreneurship space. Managed by a team of enthusiastic youngsters,
          Forevv envisions to revolutionize the way memories are handled
          altogether.
          {"\n"}
          {"\n"}
          "Sometimes a short walk down the memory lane is all it takes to
          appreciate where you are today"{"\n"}
          <span className="text-base hidden lg:block lg:text-2xl font-normal text-right">
            ~Susan Gale, Renowned Author
          </span>
        </p>
        <p className="text-base lg:hidden font-normal relative text-right">
          ~Susan Gale,
        </p>
        <p className="text-xs lg:hidden font-normal relative text-right text-forevv-blue">
          Renowned Author
        </p>
      </div>
      <div className="col-span-4 hidden lg:flex items-center">
        <Blob className="w-full" />
      </div>
      <div className="col-span-1" />
    </div>
  );
}

export default index;
