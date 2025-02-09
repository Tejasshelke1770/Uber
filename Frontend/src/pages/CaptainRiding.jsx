import React from "react";

const CaptainRiding = () => {
  return (
    <div className="h-screen ">
      <div className="fixed top-0 px-4 py-4">
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
      </div>
      <div className="h-4/5 overflow-hidden">
        <img
          className="object-cover w-full h-full "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="relative h-1/5 bg-yellow-400 flex items-center justify-evenly">
        <h4 className="text-lg font-medium">4Km Away </h4>
        <button className="px-8 py-3 text-lg font-semibold bg-green-400 rounded-md text-white">
          Complete Ride
        </button>

        <div className="w-full text-center absolute top-0">
          <i className="ri-arrow-down-wide-line text-4xl font-bold text-gray-400 hover:text-gray-500 "></i>
        </div>
      </div>

      {/* <div className="h-[35%] flex flex-col items-center ">
        <div className="w-10 h-1.5 mt-2 bg-gray-300 rounded-full"></div>
        <div className="flex px-3 py-4 items-center w-full ">
          <div className="flex w-3/4 gap-3 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                className="w-full object-cover h-full"
                src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"/>
            </div>
            <div>
              <h1 className="text-lg font-medium ">Jeremiah Curtis</h1>
              <p className="text-xs text-gray-400">Basic level</p>
            </div>
          </div>
          <div className="flex flex-col items-end w-1/4">
            <h1 className="text-lg font-medium">₹380.20</h1>
            <p className="text-xs text-gray-400">Earned</p>
          </div>
        </div>
        <div className="w-full px-3 "> 
            <div className="bg-yellow-400 flex items-center justify-center py-4 rounded-md">
                <div className="w-1/3 flex flex-col items-center">
                    <i className="ri-time-line text-2xl text-gray-400"></i>
                    <h1 className="text-lg font-medium">10.2</h1>
                    <p className="text-gray-400 text-xs">HOURS ONLINE </p>
                </div>
                <div className="w-1/3 flex flex-col items-center">
                    <i className="ri-time-line text-2xl text-gray-400"></i>
                    <h1 className="text-lg font-medium">10.2</h1>
                    <p className="text-gray-400 text-xs">HOURS ONLINE </p>
                </div>
                <div className="w-1/3 flex flex-col items-center">
                    <i className="ri-time-line text-2xl text-gray-400"></i>
                    <h1 className="text-lg font-medium">10.2</h1>
                    <p className="text-gray-400 text-xs">HOURS ONLINE </p>
                </div>
            </div>
        </div>
      </div> */}
    </div>
  );
};

export default CaptainRiding;
