import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div id="home" className="w-full flex justify-center ">
      <div className="flex justify-center w-10/12  sm:w-8/12 items-center h-[35rem]">
        <div data-aos="fade-up" className="w-full lg:w-10/12">
          <p className="text-teal text-xs py-3">Hi, my name is</p>
          <p className="text-teallight text-4xl lg:text-6xl font-bold py-2">
            Anupraj Varma.
          </p>
          <p className="text-teallight2 text-4xl lg:text-5xl font-bold">
            I build things for the web.
          </p>
          <div className="w-6/12">
            <p className="py-5 text-slatelight2 text-xs lg:text-sm">
              A full-stack software engineer who developed cool websites which
              can people use in real life. Currently looking for full-time
              software engineering opportunities
            </p>
          </div>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1vNeq5tVz_-g33luN3d3fSjztww66aPwX/view?usp=drive_link"
            }
          >
            <button className="px-6 py-1 lg:px-10 lg:py-2 text-lg text-teal border border-teal hover:-translate-x-1 hover:-translate-y-1 transition duration-700 hover:shadow-[4px_4px_0px_0px] hover:shadow-teal rounded">
              <p className="text-xs lg:text-sm font-serif">Resume</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
