import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex justify-between ">
        <li>
          <div className="p-2 border border-black ">
            <a href="/" >Shop</a>
          </div>
        </li>
        <li>
          <div className="p-2 border border-black ">
            <a href="/" >Contact</a>
          </div>
        </li>
        <li>
          <div className="p-2 border border-black ">
            <a href="/" >Sign in</a>
          </div>
        </li>
        <li>
          <div className="p-2 border border-black ">
            <a href="/" >Cart</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
