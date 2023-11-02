import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginRight: "5px",
        }}
        to="/"
      >
        Home
      </NavLink>
      |
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        Blog
      </NavLink>
      |
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        About
      </NavLink>

      |
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        Contact
      </NavLink>

      |
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        Login
      </NavLink>
      <p />
      <Outlet />
    </>
  );
}

export default RootLayout;
