import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../../public/profile-pic.png"

const Header = () => {
  return (
    <header className="bg-white px-10">
      <section className=" min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Andrew Adhikari</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Andrew Adhikari</h2>
          <h3 className="text-2xl py-2">Developer and Designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nam
            dolores sit fuga, asperiores eveniet sapiente vel ducimus voluptate
            optio cupiditate at quas molestias in perspiciatis debitis
            aspernatur unde accusantium?
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-10 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
          <Image src={profile} alt="Profile picture" layout="fill" objectFit="cover"/>
        </div>
      </section>
    </header>
  );
};

export default Header;
