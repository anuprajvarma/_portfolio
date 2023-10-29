import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div id="home" className="w-full flex justify-center ">
      <div className="flex justify-center w-3/4 items-center h-[35rem]">
        <div data-aos="fade-up" className="w-10/12">
          <p className="text-teal text-xs py-3">Hi, my name is</p>
          <p className="text-teallight text-6xl font-bold py-2">
            Anupraj Varma.
          </p>
          <p className="text-teallight2 text-6xl font-bold">
            I build things for the web.
          </p>
          <div className="w-6/12">
            <p className="py-5 text-slatelight2 text-sm">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
          <button className="px-10 py-2 text-lg text-teal border border-teal hover:-translate-x-1 hover:-translate-y-1 transition duration-700 hover:shadow-[4px_4px_0px_0px] hover:shadow-teal rounded">
            <p className="text-sm font-serif">Resume</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
