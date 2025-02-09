import React from 'react'
import { Link } from 'react-router-dom'

const RidePopUp = ({setRiderPopUpPanel,setConfirmRiderPanel}) => {
  return (
    <div>
        <h1 className='text-xl font-medium text-center my-4 '>New Ride Available</h1>
        <div className='w-full  py-2 flex bg-gray-200 rounded-lg px-2 '>
            <div className='flex gap-4 w-3/4  '>
                <div className='w-12 h-12 rounded-lg overflow-hidden '>
                    <img className='object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_F-MiVEXM6EIsoHiODyoMDE45q45IGc_62g&s"/>
                </div>
                <div>
                    <h1 className='text-lg font-medium  '>Kimber Day</h1>
                    <div className='flex'>
                        <p className='text-xs bg-yellow-400 text-center px-2 rounded-full '>AutoPay</p>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-end w-1/4' >
                <h1 className='text-lg font-medium '>₹350.20</h1>
                <p className='text-base leading-3 text-gray-400'>14.8 km</p>
            </div>
        </div>
        <div className='w-full flex flex-col items-center gap-2 py-2 '>
            <div className='w-full flex items-center gap-5'>
              <i className="ri-map-pin-range-fill text-xl"></i>
                <div className='w-full '>
                    <h1 className='text-lg font-medium mb-1'>562/11-A</h1>
                     <p className="mb-4 leading-4 text-sm">Kaikondrahalli, Bengaluru, Karnataka</p>
                     <hr />
                </div>
            </div>
            <div className='w-full flex items-center gap-5'>
              <i className="ri-map-pin-range-fill text-xl"></i>
                <div className='w-full '>
                    <h1 className='text-lg font-medium mb-1'>562/11-A</h1>
                     <p className="mb-4 leading-4 text-sm">Kaikondrahalli, Bengaluru, Karnataka</p>
                     <hr />
                </div>
            </div>
            <div className='w-full flex items-center gap-5'>
            <i className="ri-wallet-fill"></i>
                <div className='w-full '>
                    <h1 className='text-lg font-medium mb-1'>₹350.20</h1>
                     <p className="mb-4 leading-4 text-sm">Cash Cash</p>
                     <hr />
                </div>
            </div>
        </div>
        <div className='w-full flex gap-3 py-5 pb-7'>
            <Link className='py-2 w-1/2 bg-green-500 text-lg font-medium text-center rounded-lg ' onClick={()=> {setConfirmRiderPanel(true),setRiderPopUpPanel(false)}}>Accept</Link>
            <Link className='py-2 w-1/2 bg-gray-300 text-lg font-medium text-center rounded-lg ' onClick={()=>setRiderPopUpPanel(false)}>Ignore</Link>
        </div>
    </div>
  )
}

export default RidePopUp
