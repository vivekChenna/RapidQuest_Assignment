import React from "react";
import UserNameInfo from "./UserNameInfo";
import AccountDetails from "./AccountDetails";

const UserDetails = () => {
  return (
    <div className=" bg-gray-100 p-2 w-[23%] pt-12 flex flex-col pl-16 bg-opacity-50">
      <UserNameInfo />
      <AccountDetails />
    </div>
  );
};

export default UserDetails;
