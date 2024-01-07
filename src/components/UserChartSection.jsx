import React from "react";

const UserChartSection = () => {
  return (
    <div className=" pt-10 pl-20">


      <div>
        <h1 className=" font-bold font-sans text-blue-600">
          Retirement Income
        </h1>
        <p className=" text-3xl font-sans font-semibold">Starting Year 2056</p>
      </div>


      <div className=" flex gap-8 mt-10">

        <div className=" flex flex-col gap-2 w-40">
        <p className=" font-bold text-2xl">$300,000</p>
        <p className=" text-sm text-gray-400 font-semibold">My Goal</p>
        <hr className=" text-blue-600 border border-blue-700" />
        </div>

        <div className=" flex flex-col gap-2 w-40">
        <p className=" font-bold text-2xl">59%</p>
        <p className=" text-sm text-gray-400 font-semibold">Goal Achieved</p>
        <hr className=" text-blue-600 border border-blue-700" />
        </div>


        <div className=" flex flex-col gap-2 w-40">
        <p className=" font-bold text-2xl">$300</p>
        <p className=" text-sm text-gray-400 font-semibold">Est. Monthly Income</p>
        <hr className=" text-blue-600 border border-blue-700" />
        </div>

      </div>


    </div>
  );
};

export default UserChartSection;
