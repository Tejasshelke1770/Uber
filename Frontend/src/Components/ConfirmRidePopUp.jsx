import  { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = ({ setConfirmRiderPanel, setRiderPopUpPanel }) => {
  const submitHandler = (e)=>{
    e.preventDefault()
  }

  const [otp, setOtp]= useState('')

  return (
    <div>
      <h1 className="text-xl font-medium text-center my-4">Confirm Ride to Start</h1>
      
      <div className="w-full flex bg-gray-200 rounded-md px-2 py-2 ">
        <div className="w-3/4 flex gap-4  ">
          <div className="w-12 h-12 rounded-md overflow-hidden">
            <img
              className="object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_F-MiVEXM6EIsoHiODyoMDE45q45IGc_62g&s"
            />
          </div>
          <div>
            <h1 className="text-lg font-medium">Kimber Day</h1>
          </div>
        </div>
        <div className="w-1/4 flex flex-col items-end">
          <h1 className="text-lg font-medium">₹399.20</h1>
          <p className="text-base leading-3 text-gray-400">14.3 km</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 py-4">

        <div className="w-full flex gap-5 items-center ">
          <i className="ri-map-pin-range-fill text-xl"></i>
          <div className="w-full">
            <h1 className="text-lg font-medium">562/11-A</h1>
            <p className="mb-4 leading-4 text-sm">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
            <hr />
          </div>
        </div>
        <div className="flex w-full items-center gap-5">
          <i className="ri-map-pin-range-fill text-xl"></i>
          <div className="w-full">
            <h1 className="text-lg font-medium ">562/11-A</h1>
            <p className="text-sm mb-4 leading-4 ">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
            <hr />
          </div>
        </div>
        <div className="w-full flex items-center gap-5">
        <i className="ri-wallet-fill"></i>
          <div className="w-full ">
            <h1 className="text-lg font-medium">₹350.20</h1>
            <p className="text-sm leading-4 mb-4" >cash cash</p>
            <hr />
          </div>
        </div>
      </div>

      <div className="w-full  mb-6 text-white">
        <form className="w-full" onSubmit={()=> submitHandler} >
          <input onChange={(e)=>setOtp(e.target.value)} value={otp}
          className="w-full bg-[#eee] tracking-[1rem] text-lg font-semibold  px-8 py-3 rounded-lg text-black " type="number" placeholder="ENTER OTP" />

          <div className="w-full flex gap-3 pt-5 ">
            <Link to={'/captain-riding'} className={`${otp.length > 3 ? '':'opacity-[.60] '} w-1/2 text-lg py-2 bg-green-500 font-medium text-center rounded-lg`}>Accept</Link>
            <Link onClick={()=> setConfirmRiderPanel(false)} className="w-1/2 text-lg py-2 bg-red-500 font-medium text-center rounded-lg ">Cancel</Link>
          </div>
        </form>
      </div>

    </div>
  );
};

export default ConfirmRidePopUp;
