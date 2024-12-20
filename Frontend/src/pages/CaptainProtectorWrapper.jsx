import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";

const CaptainProtectorWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainContext);
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    }).catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate(`/captain-login`);
    });

  return isLoading ? (
    <h1 className="h-screen w-screen flex items-center justify-center font-medium">
      Loading...
    </h1>
  ) : (
    <>{children}</>
  );
};

export default CaptainProtectorWrapper;
