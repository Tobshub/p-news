import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home/home";
import Explore from "@pages/Explore/explore";
import ThemeContext, { themes } from "@context/theme";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
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
  const [theme, setTheme] = useState<
    typeof themes.dark | typeof themes.light
  >(themes.dark);
  const toggleTheme = () => {
    if (theme.bg === "bg-dark") {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}
