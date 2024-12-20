import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain)
   
    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token)
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-24 mb-7 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form action="" onSubmit={submitHandler}>
          <h3 className="font-medium text-lg mb-2">What's your name</h3>
          <div className="flex gap-4">
            <input
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              type="text"
              required
              placeholder="firstname"
              className="border py-2 px-4 w-1/2 bg-[#eeeeee] rounded-md mb-5 placeholder:text-sm text-base"
            />
            <input
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              type="text"
              required
              placeholder="lastname"
              className="border py-2 px-4 w-1/2 mb-5 rounded-md bg-[#eeeeee] placeholder:text-sm text-base "
            />
          </div>
          <h3 className="text-lg mb-2 font-medium">What's you email Captain</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            placeholder="email@example.com"
            className="px-4 py-2 mb-5 border w-full rounded-md bg-[#eeeeee] placeholder:text-sm text-base "
          />
          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            type="password"
            placeholder="password"
            className="px-4 py-2 mb-5 w-full bg-[#eeeeee] rounded-md placeholder:text-sm text-base "
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-4">
            <input
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              value={vehicleColor}
              type="text"
              placeholder="Vehicle Color"
              className="px-4 py-2 w-1/2 rounded-md border bg-[#eeeeee] text-base placeholder:text-sm"
            />
            <input
              autoCapitalize="characters"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              type="text"
              placeholder="Vehicle Plate"
              className="px-4 py-2 w-1/2 border rounded-md bg-[#eeeeee] text-base placeholder:text-sm"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
              placeholder="Vehicle Capacity"
              required
              className="px-4 py-2 border rounded-md bg-[#eeeeee] w-1/2 "
            />
            <select
              value={vehicleType}
              className="w-1/2 border rounded-md px-4 py-2 bg-[#eeeeee]"
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="none">Select Option</option>
              <option value="car">Car</option>
              <option value="motorcycle">motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button className="w-full py-2 bg-[] text-lg font-medium border rounded-md text-white mb-2 bg-black">
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-xs leading-tight text-center mt-2">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
