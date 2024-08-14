import React from "react";

const NavBar = () => {
  return (
    <nav className="sticky top-0 min-w-screen align-top justify-center text-white">
      <ul className="flex flex-row justify-end space-x-5 p-5">
        <li className="cursor-pointer ">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
