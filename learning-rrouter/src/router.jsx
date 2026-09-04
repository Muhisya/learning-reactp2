// src/router.jsx
import { createBrowserRouter } from "react-router";
import AppUseContext from "./AppUseContext"; // Import tugas
import ProfileDetails from "./using-usecontext/ProfileDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <AppUseContext />, // Langsung tampilin tugas di home
      },
      {
        path: "profile",
        element: <ProfileDetails />,
      },
    ],
  },
]);