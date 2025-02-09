import React from "react";

const LocationSearchPanel = ({setVehiclePanelOpen,setPanelOpen}) => {
  const locations = [
    "24B, Main Street, Sunshine Academy, Delhi",
    "1A, Near Kapoor's cafe, Greenwood High School, Bhopal",
    "35C, Elm Street, Tech Valley School, Chennai",
    "50E, Maple Lane, Riverdale Institute, Mumbai",
    "42D, Second Avenue, Sheryians Coding School, Kolkata"
]
  return (
   <div>
    {locations.map((el,i)=>{
      return  <div key={i}>
      <div className=" flex items-center gap-4 py-2 active:bg-[#eeeeee] rounded-xl my-2" onClick={()=>{setVehiclePanelOpen(true), setPanelOpen(false) }}  >
        <i className="ri-map-pin-2-fill text-lg bg-[#e1dedeee] py-2 px-3 rounded-full"></i>
        <h4 className="font-medium ">
          {el}
        </h4>
      </div>
      <hr />
    </div>
    })}
   </div>
  );
};

export default LocationSearchPanel;
