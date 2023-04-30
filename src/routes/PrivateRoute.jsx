import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ Children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname;

  if (user) {
    return Children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
