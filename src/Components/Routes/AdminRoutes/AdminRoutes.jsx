import React from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import { useLocation } from "react-router-dom";

export default function AdminRoutes({ children }) {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={location?.pathname || "/"} replace></Navigate>;
}
