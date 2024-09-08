import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-normal items-center py-4 px-6 bg-white shadow">
      <div className="flex items-center ">
        <img
          src="./logo.png" 
          alt="Logo"
          className="h-12 w-12"
        />
      </div>
      <div className="space-x-6 ml-16 flex ">
        <Link to="/"><h1 className="text-black text-lg font-semibold">
          Home
        </h1></Link>
        <h1 href="/categories" className="text-black text-lg font-semibold">
          Categories
        </h1>
        <Link to="/about"><h1 className="text-black text-lg font-semibold">
          About Us
        </h1></Link>
        <div className='translate-x-[35rem] '>
          <Link to="/signup"><button className='border rounded-md p-2 mr-4 items-center hover:scale-110 bg-orange-300 text-white '>Sign Up</button></Link>
          <Link to="/login"><button className='border rounded-md p-2 items-center hover:scale-110 bg-orange-300 text-white'>LogIn</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
