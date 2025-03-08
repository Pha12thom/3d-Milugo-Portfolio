import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo  from "../assets/logo.jpg";
import { styles } from "../styles";
import { navLinks } from "../constants";
import {  menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("..");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }
        }>    

          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">Milugo &nbsp; <span className="sm:block hidden"> | Software engineer</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">

          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" :"text-secondary"} hover:text-white text-[18px] font-bold cursor-pointer`}> 
            <a href={`#${link.id}`} className="text-white text-[18px] font-bold cursor-pointer">
              {link.title}
              </a>
            </li>
        
          ))}
        </ul>


      
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-[28px] h-[28px] object-contain cursor-pointer" 
          onClick={() => setToggle(!toggle)} />
          <div className={`fixed p-6 black-gradient top-20 right-0 mx-4 my-2 rounded-xl left-0 min-w-[140px] bg-primary bg-opacity-100 z-10 ${toggle ? "flex" : "hidden"} flex-col items-center justify-center gap-10 w-120px `}>



            
            {navLinks.map((link) => (
              <Link to={`#${link.id}`} key={link.id} className="text-white text-[18px] font-bold cursor-pointer" onClick={() => {
                setActive(link.title);
                setToggle(false);
                window.scrollTo(0, 0);
              }}>
                {link.title}
              </Link>
            ))}
        </div>
      </div>
      {/*<p className="text-red-500"> asdac</p>*/}
        {/* Add other elements here, such as menu items */}
      </div>
    </nav>
  );
};

export default Navbar;