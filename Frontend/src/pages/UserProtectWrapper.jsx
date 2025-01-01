import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setUser(response.data.user);
        setIsLoading(false);
      }
    }).catch(err =>{
      console.log(err);
      localStorage.removeItem('token');
      navigate("/login");
    })
  return isLoading ? (
    <h1 className="h-screen w-screen flex items-center justify-center font-medium">
      Loading...
    </h1>
  ) : (
    <>{children}</>
  );
};

export default UserProtectWrapper;
