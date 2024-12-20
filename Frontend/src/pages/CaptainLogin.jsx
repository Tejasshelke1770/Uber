import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setCaptain} = useContext(CaptainContext)

  const handleSubmit =async (e) => {
    e.preventDefault();
    const newLogin = { email: email, password: password }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,newLogin)

    if(response.status === 200){
      const data= response.data;
      setCaptain(data.captain)
      localStorage.setItem('token', data.token);
      navigate('/captain-home')
      }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-24 mb-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form action="" onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium">What's your email</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            value={email}
            placeholder="email@example.com"
            className="py-2 px-4 w-full border rounded-md bg-[#eeeeee] mb-7 placeholder:text-base text-lg"
          />
          <h3 className="text-lg font-semibold">Enter Password</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
            name="password"
            value={password}
            className="py-2 px-4 border rounded-md w-full bg-[#eeeeee] text-lg mb-7 placeholder:text-base "
          />
          <button className="w-full bg-black mb-3 text-white py-2 rounded-md text-lg font-semibold">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to={`/captain-signup`} className="text-blue-600 ">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={`/login`}
          className="flex py-2 justify-center text-lg mb-5 font-semibold border rounded-md bg-[#f3c164] "
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
