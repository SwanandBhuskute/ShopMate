import React from "react";

const Navbar: React.FC = () => {
  return (
    // <div className="navbar bg-gradient-to-r from-teal-800 via-teal-900 to-gray-900 text-white px-4 border-b-1 shadow-lg">
    // <div className="navbar bg-gradient-to-r from-gray-900 via-teal-800 to-teal-600 text-white px-4 border-b-1 shadow-lg">
    <div className="navbar w-full bg-black text-white px-4 shadow-lg border-b-1">
      {/* Logo / Brand */}
      <div className="flex-1">
        <a className="text-2xl font-bold" href="/">
          ShopMate
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-lg">
          {/* <li>
            <a href="/">Home</a>
          </li> */}
          {/* <li>
            <a href="/categories">Categories</a>
          </li> */}
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 text-white"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
