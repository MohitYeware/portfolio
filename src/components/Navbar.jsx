import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 md:h-16 text-white bg-black px-4 fixed">
      <div>
        <h2 className="text-4xl font-bold ml-48 md:ml-4 text-gray-400 hover:scale-110 duration-300">
          Mohit Yeware
        </h2>
      </div>
      <ul className="hidden md:flex mx-12">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-gray-500 text-2xl hover:scale-110 duration-300">
            <Link
              to={link}
              smooth
              duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-16 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl capitalize cursor-pointer">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
