import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full justify-center ">
      <div className="w-3/4 bg-slate">
        <div className="w-11/12">
          <div className="flex justify-between p-7">
            <div className="text-slatelight font-bold px-5 text-3xl hover:text-teal transition duration-500 cursor-pointer">
              A
            </div>
            <div className="text-slatelight text-xs">
              <ul className="flex flex-row gap-12">
                <li className=" hover:text-teal transition duration-700">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:text-teal transition duration-700">
                  <Link href="/about">Project</Link>
                </li>
                <li className="hover:text-teal transition duration-700">
                  <Link href="/about">Blog</Link>
                </li>
                <li className="hover:text-teal transition duration-700">
                  <Link href="/about">Contact</Link>
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
