import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {

   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e)=>{
      e.preventDefault();
      
      setCaptainData({
        fullname:{
          firstname:firstname,
          lastname:lastname
        },
        email:email,
        password:password
      })

      setEmail('')
      setPassword('')
      setFirstname('')
      setLastname('')
      setPassword('')
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-24 mb-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form action="" onSubmit={submitHandler}>
          <h3 className="font-medium text-lg mb-2">What's your name</h3>
          <div className="flex gap-4">
            <input
              onChange={(e)=> setFirstname(e.target.value)}
              value={firstname}
              type="text"
              required
              name="firstname"
              placeholder="firstname"
              className="border py-2 px-4 w-1/2 bg-[#eeeeee] rounded-md mb-5 placeholder:text-sm text-base"
            />
            <input
            onChange={(e)=> setLastname(e.target.value)}
            value={lastname}
              type="text"
              required
              name="lastname"
              placeholder="lastname"
              className="border py-2 px-4 w-1/2 mb-5 rounded-md bg-[#eeeeee] placeholder:text-sm text-base "
            />
          </div>
          <h3 className="text-lg mb-2 font-medium">What's you email</h3>
          <input
          onChange={(e)=>setEmail(e.target.value)}
          value={email} 
            type="email"
            required
            placeholder="email@example.com"
            name="email"
            className="px-4 py-2 mb-5 border w-full rounded-md bg-[#eeeeee] placeholder:text-sm text-base "
          />
          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
            required
            type="password"
            placeholder="password"
            name="password"
            className="px-4 py-2 mb-5 w-full bg-[#eeeeee] rounded-md placeholder:text-sm text-base "
          />
          <button className="w-full py-2 bg-[] text-lg font-medium border rounded-md text-white mb-2 bg-black">Signup</button>
        </form>
        <p className="text-center">Already have a account? <Link to='/captain-login' className="text-blue-600">Login here</Link></p>
      </div>
      <div><p className="text-sm leading-tight text-center">This site is protected by reCAPTCHA and the <span className="underline">Google Policy</span> and <span className="underline">Terms of Service apply</span></p></div>
    </div>
  );
};

export default CaptainSignup;
