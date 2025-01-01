import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRidePanel from "../Components/ConfirmRidePanel";
import LookingForDriver from "../Components/LookingForDriver";
import WatingForDriver from "../Components/WatingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [lookingForRidePanelOpen, setLookingForRidePanelOpen] = useState(false);
  const lookingForRidePanelRef = useRef(null)
  const[waitingForDriverPanel, setWaitngForDriverPanel]= useState(false);
  const WatingForDriverRef = useRef(null);

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: "24",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: "0",
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(()=>{
    if(confirmRidePanelOpen){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)',
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanelOpen]);

  useGSAP(()=>{
    if(lookingForRidePanelOpen){
      gsap.to(lookingForRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(lookingForRidePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[lookingForRidePanelOpen])

  useGSAP(()=>{
    if(waitingForDriverPanel){
      gsap.to(WatingForDriverRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(WatingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriverPanel])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(pickup, drop);
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-24 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://preview.redd.it/g2r5ewz4tqk11.jpg?width=1080&crop=smart&auto=webp&s=cecc4a19dc4fc7eb562021dae3029fc283e3ad92"
        />
      </div>

      {/* Search Panel */}
      <div className="h-screen w-full flex flex-col justify-end absolute bottom-0 rounded-md ">
        <div className="h-[30%] p-6 bg-white relative ">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold mb-4">Find a trip</h1>
            {panelOpen && (
              <i
                onClick={() => setPanelOpen(false)}
                className="ri-arrow-down-wide-line text-3xl "
              ></i>
            )}
          </div>
          <form onSubmit={submitHandler}>
            <div className="w-1 h-16 bg-zinc-800 rounded-lg absolute top-[44%] left-[10%] "></div>
            <input
              className="px-8 py-2 bg-[#eeeeee] text-base w-full rounded-md mb-4"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Add a pick-up location"
              onClick={() => setPanelOpen(true)}
            />
            <input
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              className="px-8 py-2 bg-[#eeeeee] text-base w-full rounded-md "
              type="text"
              placeholder="Enter your destination"
              onClick={() => setPanelOpen(true)}
            />
          </form>
        </div>

        <div ref={panelRef} className="h-0 bg-white  overflow-x-hidden">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      {/* Vehicle Panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0  px-3 py-6 pt-12 bg-white w-full translate-y-full"
      >
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanelOpen={setConfirmRidePanelOpen} />
      </div>

      {/* Confirm Ride Panel */}
      <div
        ref={confirmRidePanelRef}
        className="w-full z-20 px-3  pb-5 bg-white absolute bottom-0 rounded-lg translate-y-full ">
        <ConfirmRidePanel setConfirmRidePanelOpen={setConfirmRidePanelOpen} setLookingForRidePanelOpen={setLookingForRidePanelOpen} />
      </div>

      {/* Looking for Ride Panel */}
      <div 
      ref={lookingForRidePanelRef}
      className="w-full z-30 px-3 py-2 bg-white absolute bottom-0 rounded-lg translate-y-full ">
        <LookingForDriver/>
      </div>

      {/* Waiting for driver */}
      <div ref={WatingForDriverRef} className="w-full z-40 px-3 py-2 bg-white absolute bottom-0 rounded-lg translate-y-full">
        <WatingForDriver waitingForDriverPanel={waitingForDriverPanel} />
      </div>

    </div>
  );
};

export default Home;
