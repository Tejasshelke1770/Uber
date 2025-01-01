import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen w-screen">
      <Link to={"/home"} className="fixed right-2 top-2 px-4 py-3 bg-white rounded-full">
        <i className="ri-home-2-fill text-xl"></i>
      </Link>

      <div className="h-1/2 overflow-hidden">
        <img
          className="object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 py-2 rounded">
        <div className="flex px-3 py-3 items-center">
          <div className="w-1/2">
            <img
              className="w-28 ml-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5O2PVmKwYLyptJf2j6AwLaJ8XiBAVt7Z8Cw&s"
            />
          </div>
          <div className="w-1/2 text-right">
            <p className="font-medium text-gray-500 leading-3">SANTH</p>
            <h1 className="text-xl font-medium "> KA15AK00-0</h1>
            <p className="text-xs"> White Suzuki S-Presso LXI</p>
          </div>
        </div>
        <div className="w-full px-3 py-1 ">
          <div className="flex w-full items-center gap-5 py-2">
            <i className="ri-map-pin-fill  text-xl"></i>
            <div className="w-full">
              <h1 className="font-medium text-xl">562/11-A</h1>
              <p className="text-sm mb-4">
                Kaikondrahalli, Bengaluru, Karnataka
              </p>
              <hr />
            </div>
          </div>
          <div className="flex w-full items-center gap-5 ">
            <i className="ri-wallet-fill text-xl"></i>
            <div className="w-full">
              <h1 className="font-medium text-xl">₹193.20</h1>
              <p className="text-sm mb-4">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className=" flex py-4 px-3">
          <Link
            to={""}
            className="w-full text-center py-2 bg-green-500 font-medium text-white rounded-md"
          >
            Make a Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Riding;
