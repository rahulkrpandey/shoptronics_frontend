import SearchIcon from "@mui/icons-material/Search";
import { Link as A } from "react-router-dom";

export const Container = ({ children }) => {
  return (
    <div className="container flex justify-between items-center px-4 bg-bgc">
      {children}
    </div>
  );
};

export const Input = ({ children }) => {
  return (
    <div className="sm:hidden md:block lg:block bg-orange-400 rounded-md">
      <input
        className="outline-none inline-block p-2 rounded-l-md"
        placeholder="Search here"
      />
      <button className="bg-orange-400 px-2">
        <SearchIcon />
        {/* <SearchIcon style={{ fill: "#6366f1" }} /> */}
      </button>
    </div>
  );
};

export const Logo = () => {
  return (
    <img
      src={require("../../assets/images/logo.png")}
      className="max-h-28"
      alt="company logo"
    />
  );
};

export const Nav = ({ children }) => {
  return <nav className="flex-auto max-w-sm">{children}</nav>;
};

export const NavList = ({ children }) => {
  return (
    <ul className="flex justify-between items-center hover:cursor-pointer  	">
      {children}
    </ul>
    // <ul className="flex-auto w-64 hover:cursor-pointer max-w-md ">
    //   {children}
    // </ul>
  );
};

export const Link = ({ children }) => {
  return (
    <A to="/cart">
      <li className="uppercase">{children}</li>
    </A>
  );
};
