import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import MyPic from "../images/mypic.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div id="about" className="w-full flex justify-center">
      <div className="flex justify-center w-10/12  sm:w-8/12 h-[25rem]">
        <div
          data-aos="fade-up"
          className=" flex flex-col gap-10 w-full lg:w-10/12"
        >
          <div className="flex flex-row gap-2">
            <p className=" text-lg lg:text-2xl font-semibold text-slatelight">
              <span>. </span>About Me
            </p>
            <div className="flex items-center">
              <hr className="w-40 lg:w-80 text-slatelight2" />
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="w-2/4 text-xs lg:text-sm">
              <div>
                <p className="text-slatelight2">
                  I&apos;m currently a fourth-year student. The universe has
                  always fascinated me, but there&apos;s another world that
                  equally captures my interest — the digital realm. I&apos;ve
                  been immersing myself in coding, first playing around with
                  C++, and then getting into web development, learning about web
                  technologies such as NextJS, Redux, and TypeScript. Nowadays,
                  I spend most of my coding time crafting applications on the
                  web.
                  <br></br>
                  <br></br>
                  Some Technical Skills
                </p>
              </div>
              <div className="flex flex-row text-teallight2 gap-20 my-3 text-xs">
                <div>
                  <ul>
                    <div className="flex flex-row">
                      <div className="p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-2 text-teal"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <li>Nextjs</li>
                    </div>
                    <div className="flex flex-row">
                      <div className="p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-2 text-teal"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <li>TailwindCSS</li>
                    </div>
                    <div className="flex flex-row">
                      <div className="p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-2 text-teal"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <li>TypeScript</li>
                    </div>
                    <div className="flex flex-row">
                      <div className="p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-2 text-teal"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <li>Redux</li>
                    </div>
                  </ul>
                </div>
                <div>
                  <ul>
                    <div className="flex flex-row">
                      <div className="p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-2 text-teal"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <li>TRPC</li>
                    </div>
                    <div className="flex flex-row">
                      <div className="p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-2 text-teal"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <li>Prisma</li>
                    </div>
                    <div className="flex flex-row">
                      <div className="p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-2 text-teal"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <li>ExpressJS</li>
                    </div>
                    <div className="flex flex-row">
                      <div className="p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-2 text-teal"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                          />
                        </svg>
                      </div>
                      <li>MongoDB</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-2/4 flex justify-center">
              <Image
                className=" w-40 h-36 lg:w-48 lg:h-48 rounded-full lg:rounded-lg hover:-translate-x-1 hover:-translate-y-1 transition duration-700 hover:shadow-[4px_4px_0px_0px] hover:shadow-teal"
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
