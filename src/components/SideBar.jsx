import React from "react";
import ButterflyImg from "../assets/Images/butterfly.png";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { BsCardList } from "react-icons/bs";
import { BsCash } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

const SideBar = () => {
  return (
    <div className=" flex flex-col items-center gap-6 p-4 h-full w-[5%]">
      <div className=" flex flex-col gap-6 items-center p-1">
        <img src={ButterflyImg} alt="butterfly-img" />
        <FaSearch fontSize="1.2rem" color="#95A5A6" />
      </div>

      <div className=" flex flex-col items-center gap-6 mt-10">
        <div className=" bg-blue-700 w-10 h-10 p-2 rounded-xl shadow-xl">
          <GoHome fontSize="1.5rem" color="white" />
        </div>
        <BsCardList color="#95A5A6" fontSize="1.55rem" />
        <BsCash color="#95A5A6" fontSize="1.55rem" />
        <CiUser color="#95A5A6" fontSize="1.63rem" className="" />
      </div>

      <div className=" flex flex-col items-center gap-4 mt-72">
        <div>
          <FaRegBell color="#95A5A6" fontSize="1.45rem" />
        </div>
        <HiArrowRightOnRectangle color="#95A5A6" fontSize="1.55rem"/>
      </div>
    </div>
  );
};

export default SideBar;
