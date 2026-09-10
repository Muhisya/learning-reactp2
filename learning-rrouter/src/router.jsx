import { createBrowserRouter } from "react-router";
import Example from "./learn-reducer/Example";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "example",
        element: <Example />,
      },
    ],
  },
]);