import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FinishRide = ({setFinishRidePanel}) => {
  return (
    <div className="w-full ">
      <i onClick={()=>setFinishRidePanel(false)} className="ri-arrow-down-wide-line text-4xl block text-center font-bold text-gray-400 hover:text-gray-500 "></i>
      <h1 className="text-xl font-medium mb-5 text-center">Finish This Ride</h1>

      <div className="w-full flex items-center rounded-md bg-gray-200 py-3 px-2 border-2 border-yellow-300">
        <div className="w-3/4 flex gap-4 ">
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
        <div className="w-1/4 flex flex-col items-end ">
          {/* <h1 className="text-lg font-medium">₹399.20</h1> */}
          <h1 className="font-medium text-lg">2.2KM</h1>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center py-4">
        <div className="flex gap-5 w-full items-center">
          <i className="ri-map-pin-range-fill text-xl"></i>
          <div className="w-full">
            <h1 className="font-medium text-lg">562/11-A</h1>
            <p className="text-sm mb-4">Kaikondrahalli, Bengaluru, Karnataka</p>
            <hr />
          </div>
        </div>
        <div className="w-full flex gap-5 items-center">
          <i className="ri-map-pin-range-fill text-xl"></i>
          <div className="w-full">
            <h1 className="text-lg font-medium">562/11-A</h1>
            <p className="text-sm  mb-4">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
            <hr />
          </div>
        </div>
        <div className="flex gap-5 w-full items-center">
        <i className="ri-wallet-fill"></i>
        <div className="w-full">
          <h1 className="text-lg font-medium">₹350.20</h1>
          <p className="text-sm mb-4">cash cash</p>
          <hr />
        </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-6 pt-8">
        <Link to='/captain-home' className="px-8 py-2 w-full text-center bg-green-500 rounded-md text-white font-medium text-xl">Finish Ride</Link>
        <p className="text-xs  text-center">click on finish ride button if you have completed the payment.</p>
      </div>
    </div>
  );
};

export default FinishRide;
