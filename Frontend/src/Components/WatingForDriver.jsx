import React from "react";

const WatingForDriver = ({waitingForDriverPanel}) => {
  return (
    <div>
      <div className="flex  justify-between items-center px-1 py-4">
        <h1 className="text-xl font-bold">Meet at the pickup point</h1>
        <div className="w-[15%] h-[50px] bg-black py-1 px-1 ">
          <h1 className="text-white font-medium text-xl text-center leading-5">
            2 min
          </h1>
        </div>
      </div>
      <hr />
      <div className=" py-3 ">
        <div className="flex py-2 px-1 ">
          <div className="w-1/2  relative {images}">
            <img
              className="w-32 ml-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5O2PVmKwYLyptJf2j6AwLaJ8XiBAVt7Z8Cw&s"
              alt=""
            />
            <div className="w-16 h-16 bg-red-600 rounded-full absolute top-2 overflow-hidden">
              <img
                className="object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYjRGgAD2uPP_2eGJ6gg_V4LJII_VAfYJFQ&s"
              />
            </div>
          </div>
          <div className="text-right {Text}">
            <p className="text-base font-medium text-gray-500 leading-3">
              SANTH
            </p>
            <h1 className="text-2xl font-bold ">KA15AK00-0</h1>
            <p className="text-gray-500 text-sm">White Suzuki S-Presso LXI</p>
            <p className="text-gray-600">
              <i className="ri-star-s-fill"></i> 4.9
            </p>
          </div>
        </div>
        <div className="w-full px-1">
          <input
            type="text"
            placeholder="Send a Message..."
            className="py-3 px-6 bg-[#eeeeee] rounded-2xl w-1/2 my-3 "
          />
        </div>
        <div className="flex justify-between px-1 py-4 w-full">
          <div className="flex flex-col items-center justify-center w-1/3 gap-1">
            <div className=" bg-gray-300 py-3 px-4 rounded-full">
              <i className="ri-shield-check-fill text-blue-500 text-xl"></i>
            </div>
            <h2 className="text-lg font-medium">safety</h2>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3 gap-1 ">
            <div className=" bg-gray-300 py-3 px-4 rounded-full">
              <i className="ri-map-pin-fill text-blue-500 text-xl"></i>
            </div>
            <h2 className="text-lg font-medium">share my trip</h2>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3 gap-1">
            <div className=" bg-gray-300 py-3 px-4 rounded-full">
              <i className="ri-phone-fill text-blue-500 text-xl"></i>
            </div>
            <h2 className="text-lg font-medium">call driver</h2>
          </div>
        </div>
        <hr />
        <div className="py-3 w-full flex items-center gap-4">
          <i className="ri-map-pin-range-fill text-xl"></i>
          <div className="w-full ">
            <h1 className="text-xl font-medium ">562/11-A</h1>
            <p className="text-gray-500 mb-4">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatingForDriver;


