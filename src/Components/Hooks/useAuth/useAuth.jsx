import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

export default function useAuth() {
  const Auth = useContext(authContext);
  return Auth;
}
