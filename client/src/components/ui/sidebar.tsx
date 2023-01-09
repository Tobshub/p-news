import { NavLink } from "react-router-dom";
import {
  BsHouse,
  BsGlobe,
  BsBell,
  BsBookmarkPlus,
  BsPerson,
} from "react-icons/bs";
import "@styles/sidebar.scss";
import { useContext } from "react";
import ThemeContext from "@context/theme";
import { IconContext } from "react-icons";

export default function Sidebar(props: { user: {} }) {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg sidebar d-flex flex-column ${theme.middleground} ${theme.foreground}`}
    >
      <h1 className="navbar-brand">Logo</h1>
      <IconContext.Provider
        value={{
          style: { verticalAlign: "middle" },
          size: "32px",
          className: `sidebar-icons ${theme.foreground}` /* icon color set with boostrap class */,
        }}
      >
        <div className={`navbar-nav d-flex flex-column`}>
          <BootNavLink to="/">
            <BsHouse />
            Home
          </BootNavLink>
          <BootNavLink to="/explore">
            <BsGlobe />
            Explore
          </BootNavLink>
          <BootNavLink to="/notifications">
            <BsBell />
            Notifications
          </BootNavLink>
          <BootNavLink to="/saved">
            <BsBookmarkPlus />
            Saved
          </BootNavLink>
          <BootNavLink to="/my-profile">
            <BsPerson />
            My Profile
          </BootNavLink>
        </div>
      </IconContext.Provider>
    </nav>
  );
}

function BootNavLink(props: React.PropsWithChildren & { to: string }) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `nav-item nav-link sidebar-item ${
          isActive ? "active-item text-warning" : ""
        }`
      }
    >
      {props.children}
    </NavLink>
  );
}
