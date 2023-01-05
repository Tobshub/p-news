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
    <nav className="navbar navbar-expand-lg sidebar d-flex flex-column">
      <h1 className="navbar-brand">Logo</h1>
      <IconContext.Provider
        value={{
          size: 32,
          className: `sidebar-icons text-${theme.color}` /* icon color set with boostrap class */,
        }}
      >
        <div
          className={`navbar-nav d-flex flex-column text-${theme.color}`}
        >
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
          <BootNavLink to="my-profile">
            <BsPerson />
            My Profile
          </BootNavLink>
        </div>
      </IconContext.Provider>
    </nav>
  );
}

interface BootNavLinkProps extends React.PropsWithChildren {
  to: string;
}
function BootNavLink(props: BootNavLinkProps) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `nav-item nav-link sidebar-item ${
          isActive ? "text-warning active" : ""
        }`
      }
    >
      {props.children}
    </NavLink>
  );
}
