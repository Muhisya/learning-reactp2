import { createBrowserRouter } from "react-router";
import Profile from "./components/Profile";
import Home from "./components/Home";
import About from "./components/About";
import ProfileDetails from "./components/ProfileDetails";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/ProfileDetail/:id",
    element: <ProfileDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);