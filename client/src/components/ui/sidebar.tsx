import { NavLink } from "react-router-dom";

export default function Sidebar(props: { user: {} }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <h1 className="navbar-brand">Logo</h1>
      <div className="navbar-nav">
        <BootNavLink to="/">Home</BootNavLink>
        <BootNavLink to="/explore">Explore</BootNavLink>
        <BootNavLink to="/notifications">Notifications</BootNavLink>
        <BootNavLink to="/saved">Saved</BootNavLink>
        <BootNavLink to="my-profile">My Profile</BootNavLink>
      </div>
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
        `nav-item nav-link ${isActive ? "active" : ""}`
      }
      style={{ display: "block" }}
    >
      {props.children}
    </NavLink>
  );
}
