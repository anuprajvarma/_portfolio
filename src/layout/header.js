import React, { useEffect, useState } from "react";
import AOS from "aos";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import "aos/dist/aos.css";
import Link from "next/link";

const Header = () => {
  const [menuButton, setMenuButton] = useState(true);

  function menuFunction(menucondition) {
    if (menucondition === true) {
      setMenuButton(false);
    }
    if (menucondition === false) {
      setMenuButton(true);
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="relative flex w-full justify-center">
      <div className="w-full lg:w-3/4  bg-slate">
        <div className="w-11/12">
          <div data-aos="fade-down" className="flex w-full justify-between p-7">
            <div className="text-slatelight font-bold pl-5 sm:pl-10 text-3xl hover:text-teal transition duration-500 cursor-pointer">
              <Link href="#home">A</Link>
            </div>
            <div className="">
              <BiMenuAltRight
                className={`text-teal ${
                  menuButton ? "" : "hidden"
                }  md:hidden text-4xl cursor-pointer`}
                onClick={() => menuFunction(true)}
              />
            </div>
            <div
              className={`fixed left-0 top-0 z-20 backdrop-blur-sm md:backdrop-blur-none h-screen w-full ${
                menuButton ? "hidden" : ""
              }`}
              onClick={() => menuFunction(false)}
            >
              <div
                className={` bg-slatelight3 fixed z-50 right-0 transition duration-500 top-0 w-6/12 ${
                  menuButton ? "-translate-x-0" : "translat"
                } md:hidden h-screen`}
                onClick={() => menuFunction(false)}
              >
                <div
                  className={`text-end text-3xl p-5 cursor-pointer  font-bold`}
                >
                  <RxCross2 className="text-teal" />
                </div>
                <div className="flex flex-col gap-5 font-semibold text-xl items-center text-slatelight cursor-pointer">
                  <Link
                    href={"#about"}
                    className="hover:text-teal transition duration-700"
                  >
                    About
                  </Link>
                  <Link
                    href={"#experience"}
                    className="hover:text-teal transition duration-700"
                  >
                    Experience
                  </Link>
                  <Link
                    href={"#project"}
                    className="hover:text-teal transition duration-700"
                  >
                    Project
                  </Link>
                  <Link
                    href={"#contact"}
                    className="hover:text-teal transition duration-700"
                  >
                    Contact
                  </Link>
                </div>
              </div>
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
