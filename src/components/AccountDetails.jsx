import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

const AccountDetails = () => {
  return (
    <div className=" mt-6">
      <p className=" font-bold font-sans text-lg">Today</p>

      <div className=" flex flex-col gap-4 mt-3">
        <div>
          <p className=" font-extrabold font-mono text-3xl">$19,892</p>
          <p className=" font-semibold text-sm text-gray-400">
            Account Balance
          </p>
        </div>

        <div>
          <p className=" font-bold">$4,000</p>
          <p className="font-semibold text-sm text-gray-400">
            Year-to-Date Contributions
          </p>
        </div>

        <div>
          <p className=" font-bold">$1,892</p>
          <p className="font-semibold text-sm text-gray-400">Total interest</p>
        </div>
      </div>

      <div className=" flex items-center bg-blue-700 w-max px-5 py-3 text-white rounded-xl gap-2 mt-4">
        <button>I want to </button>
        <RiArrowDropDownFill fontSize="1.65rem" />
      </div>

      <div className=" mt-9">
        <p className=" font-sans text-lg font-bold mb-4">Recent Transactions</p>

        <div className=" flex flex-col gap-3">
          <div>
            <p className=" text-sm font-semibold text-gray-400">2020-08-07</p>
            <p className="font-semibold text-sm">WithDrawl Transfer to Bank-XXX11</p>
          </div>
          <hr className=" border w-[72%]" />

          <div>
            <p className=" text-sm font-semibold text-gray-400">2020-08-07</p>
            <p className="font-semibold text-sm">WithDrawl Transfer to Bank-XXX11</p>
          </div>
          <hr className="border w-[72%]" />

          <div>
            <p className=" text-sm font-semibold text-gray-400">2020-08-07</p>
            <p className=" font-semibold text-sm">WithDrawl Transfer to Bank-XXX11</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
