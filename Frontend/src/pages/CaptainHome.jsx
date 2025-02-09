import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CaptainDetails from "../Components/CaptainDetails";
import RidePopUp from "../Components/RidePopUp";
import ConfirmRidePopUp from "../Components/ConfirmRidePopUp";

const CaptainHome = () => {
const [riderPopUpPanel, setRiderPopUpPanel] = useState(true)
const riderPopUpRef = useRef(null)
const [confirmRiderPanel, setConfirmRiderPanel] = useState(false);
const confirmRiderPanelRef = useRef(null);


  useGSAP(()=>{
    if(riderPopUpPanel){
      gsap.to(riderPopUpRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(riderPopUpRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[riderPopUpPanel])

  useGSAP(()=>{
    if(confirmRiderPanel){
      gsap.to(confirmRiderPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRiderPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRiderPanel])

  return (
    <div className="h-screen ">
      <div className="flex items-center justify-between w-screen px-4 py-2  gap-1 fixed top-0">
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <Link to={"/captain-login"} className="px-4 py-3 bg-white rounded-full">
          <i className="ri-logout-box-r-line font-bold text-xl"></i>
        </Link>
      </div>
      <div className="h-[65%] overflow-hidden ">
        <img
          className="object-cover w-full h-full "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

    <div className="h-[35%] rounded-md flex flex-col items-center py-2">
      <CaptainDetails/>
    </div>

    <div ref={riderPopUpRef} className="w-full fixed bottom-0 translate-y-full bg-white px-3 z-10  ">
      <RidePopUp setRiderPopUpPanel={setRiderPopUpPanel} setConfirmRiderPanel={setConfirmRiderPanel}/>
    </div>
    
    <div ref={confirmRiderPanelRef} className="w-full fixed translate-y-full bottom-0 px-3 bg-white z-10 ">
      <ConfirmRidePopUp setConfirmRiderPanel={setConfirmRiderPanel} setRiderPopUpPanel={setRiderPopUpPanel} />
    </div>

    </div>
  );
};

export default CaptainHome;
