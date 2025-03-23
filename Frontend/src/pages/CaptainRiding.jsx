import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../Components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen">
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

      <div onClick={()=> setFinishRidePanel(true)} className="relative h-1/5 bg-yellow-400 flex items-center justify-evenly">
        <h4 className="text-lg font-medium">4Km Away </h4>
        <button className="px-8 py-3 text-lg font-semibold bg-green-400 rounded-md text-white">
          Complete Ride
        </button>
        <div className="w-full text-center absolute top-0">
          <i className="ri-arrow-up-wide-fill text-4xl font-bold text-gray-400 hover:text-gray-500 "></i>
        </div>
      </div> <i className=""></i>

      <div ref={finishRidePanelRef} className="fixed bottom-0 translate-y-full bg-white px-3 pb-6 w-full " >
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>

    </div>
  );
};

export default CaptainRiding;
