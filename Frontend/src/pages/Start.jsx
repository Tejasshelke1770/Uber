import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="h-screen pt-8  w-full flex flex-col justify-between bg-[url(https://plus.unsplash.com/premium_photo-1682834983265-27a10ba5232c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] bg-cover bg-center">
        <img className="w-24 ml-8 invert "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <div className="bg-white py-4 pb-7 px-4 ">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className=" flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
