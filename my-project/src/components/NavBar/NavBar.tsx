const NavBar = () => {
  return (
    <nav className="w-full flex items-center ">
      <ul className="w-full flex justify-between m-0 p-0 list-none">
        <li className="w-45 "> 
          <div className="flex justify-center items-center h-full p-4 border border-black">
            <a href="/" className="w-full text-center">Shop</a>
          </div>
        </li>
        <li className="w-45"> 
          <div className="flex justify-center items-center h-full p-4 border border-black">
            <a href="/" className="w-full text-center">Contact</a>
          </div>
        </li>
        <li className="flex-1"> 
          <div className="flex justify-center items-center h-full p-4 border border-black">
           
          </div>
        </li>
        <li className="w-45"> 
          <div className="flex justify-center items-center h-full p-4 border border-black">
            <a href="/" className="w-full text-center">Sign in</a>
          </div>
        </li>
        <li className="w-45"> 
          <div className="flex justify-center items-center h-full p-4 border border-black">
            <a href="/" className="w-full text-center">Cart</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
