import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@pages/Home/home";
import ExplorePage from "@pages/Explore/explore";
import ThemeContext, { themes } from "@context/theme";
import { useState } from "react";
import MyProfilePage from "@pages/My-Profile/my-profile";
import NotificationsPage from "@pages/Notifications/notifications";
import SavedPage from "@pages/Saved/saved";
import HomeIndex from "@pages/Home/home-index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
    ],
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
  },
  {
    path: "/saved",
    element: <SavedPage />,
  },
  {
    path: "/my-profile",
    element: <MyProfilePage />,
  },
]);

export default function App() {
  const [theme, setTheme] = useState<
    typeof themes.dark | typeof themes.light
  >(themes.dark);
  const toggleTheme = () => {
    if (theme.background === "bg-dark") {
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
