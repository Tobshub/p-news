import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Hello world</>,
  },
  {
    path: "/explore",
    element: <>Explore</>,
  },
  {
    path: "/notifications",
    element: <>Explore</>,
  },
  {
    path: "/saved",
    element: <>Explore</>,
  },
  {
    path: "/my-profile",
    element: <>My profile</>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
