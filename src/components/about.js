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
      <div className="flex justify-center w-8/12 h-[25rem]">
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
                  Hello! My name is Anupraj Varma and I enjoy creating things
                  that live on the internet. My interest in web development
                  started back in 2020 when I come collage I can choose coding
                  or Master degree <br /> <br />
                  but I have interest in coding then I started coding in my
                  first year.
                  <br />
                  <Link
                    href={"https://www.kroto.in/"}
                    target="_blank"
                    className="text-teal cursor-pointer"
                  >
                    Currently, I’m working in kroto startup.
                  </Link>
                  My main focus these days is building interactive and useable
                  website which people can use easily.
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
                      <li>Tailwind</li>
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
                      <li>Javascript</li>
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
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-2/4 flex justify-center">
              <Image
                className=" w-40 h-36 lg:w-4l4 lg:h-44 rounded-full lg:rounded-lg hover:-translate-x-1 hover:-translate-y-1 transition duration-700 hover:shadow-[4px_4px_0px_0px] hover:shadow-teal"
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
