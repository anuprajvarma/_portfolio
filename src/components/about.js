import React from "react";
import Image from "next/image";

import MyPic from "../images/mypic.jpg";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-center w-3/4 h-[35rem]">
        <div className=" flex flex-col gap-10 w-10/12">
          <div className="flex flex-row gap-2">
            <p className="text-2xl font-semibold text-slatelight">
              <span>. </span>About Me
            </p>
            <div className="flex items-center">
              <hr className="w-80 text-slatelight2" />
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="w-2/4 text-sm">
              <div>
                <p className="text-slatelight2">
                  Hello! My name is Brittany and I enjoy creating things that
                  live on the internet. My interest in web development started
                  back in 2012 when I decided to try editing custom Tumblr
                  themes — turns out hacking together a custom reblog button
                  taught me a lot about HTML & CSS! <br /> <br />
                  Fast-forward to today, and I’ve had the privilege of working
                  at
                  <br />
                  <span className="text-teal cursor-pointer">
                    an advertising agency, a start-up, a huge corporation, and a
                    student-led design studio
                  </span>
                  . My main focus these days is building accessible, inclusive
                  products and digital experiences at Upstatement for a variety
                  of clients.I also recently launched a course that covers
                  everything you need to build a web app with the Spotify API
                  using Node & React.
                  <br />
                  <br />I also recently launched a course that covers everything
                  you need to build a web app with the Spotify API using Node &
                  React.
                  <br />
                  <br /> Here are a few technologies I’ve been working with
                  recently:
                </p>
              </div>
              <div className="flex flex-row text-teallight2 gap-20 my-3 text-xs">
                <div>
                  <ul>
                    <li className="my-2">Nextjs</li>
                    <li className="my-2">Talwind</li>
                    <li className="my-2">javascript</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="my-2">Trpc</li>
                    <li className="my-2">prisma</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-2/4 flex justify-center">
              <Image
                className="w-60 h-60 rounded-lg hover:-translate-x-1 hover:-translate-y-1 transition duration-700 hover:shadow-[4px_4px_0px_0px] hover:shadow-teal"
                src={MyPic}
                alt="mypic"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
