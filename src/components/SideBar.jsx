import React from "react";
import ButterflyImg from "../assets/Images/butterfly.png";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { BsCardList } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className=" flex flex-col items-center gap-6 p-3 h-full w-[4%]">
      <div className=" flex flex-col gap-6 items-center p-1">
        <img src={ButterflyImg} alt="butterfly-img" />
        <FaSearch fontSize="1.2rem" color="#95A5A6" />
      </div>

      <div className=" flex flex-col items-center gap-6">
        <div className=" bg-blue-700 w-10 h-10 p-2 rounded-xl shadow-xl">
          <GoHome fontSize="1.5rem" color="white" />
        </div>
        <BsCardList color="#95A5A6" fontSize="1.65rem" />
      </div>
    </div>
  );
};

export default SideBar;
