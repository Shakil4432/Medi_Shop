import React from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const { loading, user } = useAuth();
  if (loading) {
    return <div className="text-4xl text-center font-bold">Loading...</div>;
  }
  if (!user) {
    return (
      <Navigate
        to="/signIn"
        state={location?.pathname || "/"}
        replace={true}
      ></Navigate>
    );
  }
  return <div>{children}</div>;
}
