import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit=(e)=>{
    e.preventDefault();
    setUserData({email :email, password:password})
    setEmail('')
    setPassword('')
  }

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
            className="bg-[#eeeeee] text-lg rounded-md px-4 py-2 border w-full mb-7 placeholder:text-base"
            type="email"
            name="email"
            value={email}
            required
            placeholder="email@example.com"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium">Enter Password</h3>
          <input
            className="py-2 px-4 text-lg border rounded-md w-full mb-7 bg-[#eeeeee] placeholder:text-base "
            type="password"
            name="password"
            value={password }
            required
            placeholder="password"
            onChange={(e)=> setPassword(e.target.value)}
          />
          <button className="w-full font-semibold mb-3 rounded-md bg-[#111] text-[#fff] py-2 text-xl">
            Login
          </button>
        </form>
        <p className="text-center">New Here? <Link className="text-blue-600" to={`/signup`}>Create New Account</Link></p>
      </div>
      <div>
        <Link to={`/captain-login`} className="bg-[#10b461] flex justify-center text-white font-semibold mb-5 py-2 text-lg rounded-md ">Login in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;