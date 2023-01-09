import ThemeContext from "@context/theme";
import SideBarLayout from "@layouts/sidebar-layout";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export default function MyProfilePage() {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={`page home ${themeContext.theme.background} ${themeContext.theme.foreground}`}
    >
      <SideBarLayout user={{}}>
        <Outlet />
      </SideBarLayout>
    </div>
  );
}
