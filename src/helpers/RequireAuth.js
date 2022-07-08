import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { isUserLoggedIn } = useSelector((state) => state.user);
  if (!isUserLoggedIn) {
    return <Navigate to="/auth/signin" replace={true} />;
  }
  return children;
};
