import Home from "@pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <>Explore</>,
  },
  {
    path: "/notifications",
    element: <>Notifications</>,
  },
  {
    path: "/saved",
    element: <>Saved</>,
  },
  {
    path: "/my-profile",
    element: <>My profile</>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
