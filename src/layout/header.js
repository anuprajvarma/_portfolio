import React, { useEffect } from "react";
import AOS from "aos";
import Mypic from "../images/mypic.jpg";
import { Menu } from "@headlessui/react";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="flex w-full justify-center">
      <div className="w-full lg:w-3/4  bg-slate">
        <div className="w-11/12">
          <div data-aos="fade-down" className="flex justify-between p-7">
            <div className="text-slatelight font-bold pl-10 text-3xl hover:text-teal transition duration-500 cursor-pointer">
              <Link href="#home">A</Link>
            </div>

            <div className="md:flex hidden text-slatelight text-xs">
              <ul className="flex flex-row gap-12">
                <li className=" hover:text-teal transition duration-700">
                  <Link href="#about">About</Link>
                </li>
                <li className="hover:text-teal transition duration-700">
                  <Link href="#project">Project</Link>
                </li>
                <li className="hover:text-teal transition duration-700">
                  <Link href="#experience">Experience</Link>
                </li>
                <li className="hover:text-teal transition duration-700">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
