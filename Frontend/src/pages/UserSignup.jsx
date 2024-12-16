import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    
    setUserData({
      fullname: {
        firstname: firstname,
        lastname:lastname
      },
      email:email,
      password:password,
    })

    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-24 mb-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form action="" onSubmit={submitHandler}>
          <h3 className="text-lg font-semibold mb-2">What's your name</h3>
          <div className="flex gap-4 ">
            <input
              onChange={(e)=> setFirstname(e.target.value)}
              type="text"
              placeholder="first name"
              required
              name="firstname"
              value={firstname}
              className="bg-[#eeeeee] py-2 w-1/2 border rounded-md px-4 mb-5 placeholder:text-sm text-base"
            />
            <input
              onChange={(e)=> setLastname(e.target.value)}
              type="text"
              placeholder="last name"
              required
              name="lastname"
              value={lastname}
              className="bg-[#eeeeee] py-2 w-1/2  border rounded-md px-4 mb-5 placeholder:text-sm text-base"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">What's your email</h3>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            required
            placeholder="email@example.com"
            name="email"
            value={email}
            className="px-4 py-2 border w-full rounded-md placeholder:text-sm text-base mb-5 bg-[#eeeeee]"
          />
          <h3 className="text-lg font-semibold mb-2">Password</h3>
          <input
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            required
            name="password"
            value={password}
            placeholder="password"
            className="px-4 py-2 border w-full rounded-md placeholder:text-sm text-base mb-5 bg-[#eeeeee] "
          />
          <button className="w-full mb-3 py-2 text-lg font-semibold bg-black text-white rounded-md">
            Signup
          </button>
        </form>
        <p className="text-center ">
          Already have a account?
          <Link to="/login" className="text-blue-600 ">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px] leading-4">
          By proceeding, you consent to get calls, whatsApp SMS message,
          including by automated means, from Uber and its affiliates to the
          number provided
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
