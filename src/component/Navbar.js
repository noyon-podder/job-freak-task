import React from 'react';
import { BiAlignRight } from "react-icons/bi";

const Navbar = () => {
    return (
      
         <div className='w-100 bg-indigo-700 py-5 px-3 lg:hidden flex items-center justify-between'>
            <h3 className='text-white text-2xl font-bold'>JOB<span className='italic'>Freak</span></h3>
            
            <label
            htmlFor="navbar-drawer"
            className="drawer-button text-white text-2xl pointer lg:hidden"
          >
            <BiAlignRight/>
          </label>
            </div>
      
    );
};

export default Navbar;