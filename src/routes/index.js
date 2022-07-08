import { Navigate, useRoutes } from "react-router-dom";
import { RequireAuth } from "../helpers/RequireAuth";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NotFound from "../pages/Page404";
import LogoOnlyLayout from "../helpers/LogoOnlyLayout";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/",
      element: (
        <RequireAuth>
          <Layout />
        </RequireAuth>
      ),
      children: [
        { path: "", element: <Navigate to="/app" replace={true} /> },
        { path: "app", element: <Home /> },
        { path: "profile", element: <Profile /> },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/app" replace={true} />,
    },
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
