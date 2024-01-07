import React from "react";
import SideBar from "./SideBar";
import UserDetails from "./UserDetails";

const Body = () => {
  return (
    <div className=" bg-white h-full w-full rounded-3xl flex">
      <SideBar />
      <UserDetails />
    </div>
  );
};

export default Body;
