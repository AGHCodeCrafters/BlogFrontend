import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const Topbar = () => {
  const { pathname } = useLocation();

  const iconStyle = {
    fontSize: "30px",
    color: "#444444",
  };

  return (
    <header className="h-[10vh] md:h-[80px] p-[20px] flex items-center justify-between shadow-md">
      <h1 className="text-[24px] font-bold text-gray_300 cursor-pointer">
        Crypto <span className="text-blue">Blog</span>
      </h1>
      <Link
        to={pathname === "/" ? "/login/signin" : "/"}
        className="flex cursor-pointer"
      >
        {pathname.includes("login") ? (
          <KeyboardBackspaceIcon style={iconStyle} />
        ) : pathname === "/" ? (
          <LoginIcon style={iconStyle} />
        ) : (
          <LogoutIcon style={iconStyle} />
        )}
        <p className="ml-[5px] text-[18px] font-medium text-gray_500">
          {pathname.includes("login")
            ? "Go back"
            : pathname === "/"
            ? "Login"
            : "Logout"}
        </p>
      </Link>
    </header>
  );
};

export default Topbar;
