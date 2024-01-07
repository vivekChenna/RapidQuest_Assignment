import React from "react";
import UserImg from "../assets/Images/user_img.jpg";

const UserNameInfo = () => {
  return (
    <div className="flex items-center gap-5">
      <div className=" w-20">
        <img src={UserImg} alt="user-img" className=" rounded-full shadow-xl" />
      </div>
      <div>
        <p className="text-3xl font-bold font-sans  ">Hi Mike,</p>
        <p className=" font-medium text-gray-500">welcome back.</p>
      </div>
    </div>
  );
};

export default UserNameInfo;
