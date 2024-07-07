import React from "react";
import Image from "next/image";
import { PiGithubLogoDuotone } from "react-icons/pi";
import SyncodeImage from "../images/syncode.png";
import MovieHub from "../images/moviehub.png";
import Link from "next/link";

const Project = () => {
  return (
    <div id="project" className="w-full pt-10 flex justify-center">
      <div className="flex justify-center w-10/12  sm:w-8/12 items-center">
        <div data-aos="fade-up" className="flex flex-col gap-5 w-full">
          <div className="flex flex-row gap-2">
            <p className="text-lg lg:text-xl font-semibold text-slatelight">
              <span>. </span>Some Thing I have Built
            </p>
            <div className="flex items-center">
              <hr className="w-20 lg:w-80 text-slatelight2" />
            </div>
          </div>
          <div className="relative py-10 w-full flex">
            <Link
              target="_blank"
              className="w-full"
              href={"https://github.com/anuprajvarma/Sync_Code"}
            >
              <Image
                className="transition duration-700 box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px w-full lg:w-6/12 h-72"
                src={SyncodeImage}
                alt="mypic"
              ></Image>
            </Link>
            <Link
              href={"https://github.com/anuprajvarma/Sync_Code"}
              target="_blank"
              className="bg-teal opacity-20 w-full lg:w-6/12 h-72 absolute cursor-pointer hover:opacity-0 transition duration-500"
            ></Link>
            <div className="absolute lg:flex hidden w-10/12 py-5">
              <div className="flex items-end flex-col gap-3">
                <div className="flex flex-col">
                  <p className="text-xs text-teal">Featured project</p>
                  <p className="text-xl font-bold text-slatelight">Sync Code</p>
                </div>
                <div className="text-xs text-slatelight2 p-4 bg-slatelight3 box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px w-6/12">
                  <p>
                    Sync code is a Web Application where multiple users can do
                    code synchronously. First Create a room and Copy the room ID
                    then send the room ID which you want to call
                  </p>
                </div>
                <div className="cursor-pointer text-slatelight2">
                  <div className="flex gap-2 text-xs">
                    <p>React</p>
                    <p>javascript</p>
                    <p>CodeMirror</p>
                    <p>API</p>
                  </div>
                </div>
                <div className=" flex justify-center">
                  <Link
                    target="_blank"
                    href={"https://github.com/anuprajvarma/Sync_Code"}
                    className="cursor-pointer"
                  >
                    <PiGithubLogoDuotone className="h-6 w-6 text-slatelight hover:text-teal" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative py-10 w-full flex">
            <Link
              target="_blank"
              className="w-full"
              href={"https://github.com/anuprajvarma/Sync_Code"}
            >
              <Image
                className="transition  duration-700 box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px w-full lg:w-6/12 h-72"
                src={MovieHub}
                alt="mypic"
              ></Image>
            </Link>
            <Link
              href={"https://github.com/anuprajvarma/Sync_Code"}
              target="_blank"
              className="bg-teal opacity-20 w-full lg:w-6/12 h-72 absolute cursor-pointer hover:opacity-0 transition duration-500"
            ></Link>
            <div className="absolute lg:flex hidden w-10/12 py-5">
              <div className="flex items-end flex-col gap-3">
                <div className="flex flex-col">
                  <p className="text-xs text-teal">Featured project</p>
                  <p className="text-xl font-bold text-slatelight">Movie Hub</p>
                </div>
                <div className="text-xs text-slatelight2 p-4 bg-slatelight3 box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px w-6/12">
                  <p>
                    It is web application where people can search any movie and
                    they can see movies details such as Director name,Genre.
                  </p>
                </div>
                <div className="cursor-pointer text-slatelight2">
                  <div className="flex gap-2 text-xs">
                    <p>React</p>
                    <p>javascript</p>
                    <p>CSS</p>
                    <p>API</p>
                  </div>
                </div>
                <div className=" flex justify-center">
                  <Link
                    target="_blank"
                    href={"https://github.com/anuprajvarma/moviehub"}
                    className="cursor-pointer"
                  >
                    <PiGithubLogoDuotone className="h-6 w-6 text-slatelight hover:text-teal" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
