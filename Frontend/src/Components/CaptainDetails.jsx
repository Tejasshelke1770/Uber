import React from 'react'

const CaptainDetails = () => {
  return (
  <>    
    <div className="w-10 h-1.5 bg-gray-300 rounded-full"></div>

    <div className="flex px-3 py-4 w-full"> 
      <div className="w-3/4 flex gap-3 items-center ">
        <div className="image w-12  h-12 rounded-full overflow-hidden flex items-center justify-center bg-red-700">
          <img
            className="w-full object-cover h-full "
            src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          />
        </div>
        <div>
          <h1 className="font-medium text-lg ">Jeremiah Curtis</h1>
          <p className="text-xs text-gray-400">Basic level</p>
        </div>
      </div>
      <div className=" w-1/4 flex flex-col items-end justify-center ">
        <h1 className="text-lg font-medium ">₹380.20 </h1>
        <p className="text-xs text-gray-400 ">Earned</p>
      </div>
    </div>

    <div className="px-3 w-full">
      <div className="bg-yellow-400 rounded-md w-full flex items-center justify-center py-4  ">
        <div className="w-1/3  flex flex-col items-center ">
          <i className="ri-time-line text-2xl text-gray-400"></i>
          <h1 className="text-lg font-medium">10.2</h1>
          <p className="text-gray-400 text-xs">HOURS ONLINE </p>
        </div>
        <div className="w-1/3 flex flex-col items-center ">
          <i className="ri-speed-up-line text-2xl text-gray-400"></i>
          <h1 className="text-lg font-medium">30KM</h1>
          <p className="text-xs text-gray-400">TOTAL DISTANCE</p>
        </div>
        <div className="w-1/3  flex flex-col items-center">
          <i className="ri-file-list-line text-2xl text-gray-400"></i>
          <h1 className="text-lg font-medium">20</h1>
          <p className="text-xs text-gray-400">TOTAL JOBS</p>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default CaptainDetails
