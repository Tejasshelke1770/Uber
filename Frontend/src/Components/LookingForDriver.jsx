import React from 'react'

const LookingForDriver = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-medium">Looking For Driver</h1>
      <hr className="mt-2" />
      <div className="flex flex-col items-center justify-center mt-4 ">
        <img
          className="w-32"
          src="https://cdn-iejhi.nitrocdn.com/NMxJCeGVpcAQdhpVLEQLtsJQObyxxCrn/assets/images/optimized/rev-d36051c/www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
          alt=""
        />
        <div className="w-full h-0.5 bg-zinc-400 rounded-lg mt-6 "></div>
      </div>

      <div className="flex flex-col gap-2 py-3 ">
        <div className="flex items-center gap-4 px-2  ">
          <i className="ri-map-pin-range-fill text-lg"></i>
          <div className="w-full">
            <h1 className="text-xl font-medium mb-1">562/11-A</h1>
            <p className="mb-4 leading-4 text-sm">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
            <hr />
          </div>
        </div>
        <div className="flex items-center gap-4 px-2 l ">
          <i className="ri-square-fill "></i>
          <div className="w-full">
            <h1 className="text-xl font-medium mb-1">Third Wave Coffee</h1>
            <p className="mb-4 leading-4 text-sm">
              17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
              Karnataka
            </p>
            <hr />
          </div>
        </div>
        <div className="flex items-center gap-4 px-2 ">
          <i className="ri-wallet-fill"></i>
          <div className="w-full">
            <h1 className="text-xl font-medium mb-1">₹193.20</h1>
            <p className="mb-4 leading-4 text-sm">Cash Cash</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver
