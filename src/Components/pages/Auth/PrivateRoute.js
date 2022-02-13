import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";

const PrivateRoute = ({ children }) => {
  //   const {stoken} = useContext(UserContext)
  const [stoken, setSToken] = useState(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    return token;
  });
  const location = useLocation();
  console.log(stoken);
  return stoken ? (
    children
  ) : (
    <Navigate to="/login" state={{ path: location }} />
  );
};

export default PrivateRoute;
