import React from "react";
import Image from "next/image";
import SyncodeImage from "../images/syncode.png";
import MovieHub from "../images/moviehub.png";
import Link from "next/link";

const Project = () => {
  return (
    <div className="w-full py-20 flex justify-center">
      <div className="flex justify-center w-3/4 items-center">
        <div data-aos="fade-up" className="flex flex-col gap-10 w-10/12">
          <div className="flex flex-row gap-2">
            <p className="text-2xl font-semibold text-slatelight">
              <span>. </span>Some Thing I have Built
            </p>
            <div className="flex items-center">
              <hr className="w-80 text-slatelight2" />
            </div>
          </div>
          <div className="relative w-full flex">
            <Link
              target="_blank"
              className="h-80 w-7/12"
              href={"https://github.com/anuprajvarma/Sync_Code"}
            >
              <Image
                className="transition duration-700 box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px rounded"
                src={SyncodeImage}
                alt="mypic"
              ></Image>
            </Link>
            <div className="flex w-7/12 flex-col">
              <div className="flex w-10/12 flex-col text-sm text-teal">
                <div>
                  <p>Featured project</p>
                </div>
                <div>
                  <p>Sync Code</p>
                </div>
              </div>
              <div className="absolute right-20 top-14 text-xs  text-background p-5 bg-slatelight box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; rounded-sm w-6/12 z-10">
                <p>
                  Sync code is a Web Application where multiple users can do
                  code synchronously.First Create a room and Copy the room ID
                  then send the room ID which you want to call.
                </p>
              </div>
              <div className="flex flex-row gap-2 text-xs absolute top-40 right-20 cursor-pointer text-teal">
                <p>React</p>
                <p>javascript</p>
                <p>CSS</p>
                <p>CodeMirror</p>
                <p>Express</p>
                <p>Socket</p>
              </div>
            </div>
          </div>
          <div className="relative w-full flex">
            <Link
              className="h-80 w-7/12"
              target="_blank"
              href={"https://github.com/anuprajvarma/moviehub"}
            >
              <Image
                className="cursor-pointer transition duration-700 box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px rounded"
                src={MovieHub}
                alt="movieHub"
              ></Image>
            </Link>
            <div className="flex w-7/12 flex-col">
              <div className="flex w-10/12 flex-col text-sm text-teal">
                <div>
                  <p>Featured project</p>
                </div>
                <div>
                  <p>Movie Hub</p>
                </div>
              </div>
              <div className="absolute right-20 top-14 text-xs  text-background p-5 bg-slatelight box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; rounded-sm w-6/12 z-10">
                <p>
                  It is web application where people can search any movie and
                  they can see movies details such as Director name,Genre.
                </p>
              </div>
              <div className="flex flex-row gap-2 text-xs absolute top-36 right-20 cursor-pointer text-teal">
                <p>React</p>
                <p>javascript</p>
                <p>CSS</p>
                <p>API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
