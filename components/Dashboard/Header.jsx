import React from "react";
import Link from "next/link";
// import Dropdown from "./Dropdown";
import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* entire searchbar */}
      <div className="flex items-center justify-between  bg-queueLight1">
        {/* div1 of queue icon */}
        <div className="md:basis-1/5 21inch:basis-[15%]">
          {/* icon based on darkMode or lighmode*/}
          <div className="text-[#0C0B0B] pl-6 text-sm md:text-2xl lg:text-4xl bg-blue-500">
           Board.
          </div>
        </div>

        <div className="flex justify-end gap-x-4 items-center mr-4 21inch:mr-6 md:basis-[19%] 21inch:basis-[14%]">
          <div className="font-brandonMediumItalic text-[16px] 2xl:text-[16px] ">

          </div>

          {/* dropdown on the name */}
          <div className="">
            {/* <Dropdown /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
