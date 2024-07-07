import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="w-full flex justify-center py-20 lg:py-10">
      <div className="flex justify-center w-10/12  sm:w-8/12">
        <div
          data-aos="fade-up"
          className=" flex flex-col gap-10 w-full lg:w-8/12"
        >
          <div className="flex flex-row gap-2">
            <p className="text-lg lg:text-xl font-semibold text-slatelight">
              <span>. </span>Where I have worked
            </p>
            <div className="flex items-center">
              <hr className="w-20 lg:w-40 text-slatelight2" />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="text-teal cursor-pointer">
              <p>Kroto</p>
            </div>
            <div className="flex flex-col gap-5 list-none  text-teallight2 text-sm">
              <div className="flex flex-row">
                <div className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-3 text-teal"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
                <li>
                  Added ask-query feature on the landing page, enhancing team
                  communication for 300+ users
                </li>
              </div>
              <div className="flex flex-row">
                <div className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-3 text-teal"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
                <li>
                  Implemented lazy loading on 70+ files which save developers
                  time by ~80%
                </li>
              </div>
              <div className="flex flex-row">
                <div className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-3 text-teal"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
                <li>
                  Create an "Audience" section on the page to facilitate sending
                  event emails to all registered users efficiently
                </li>
              </div>
              <div className="flex flex-row">
                <div className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-3 text-teal"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
                <li>Used React Query, improved invoke time by ~40%</li>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="text-teal cursor-pointer">
              <p>Material Depot(YC W22)</p>
            </div>
            <div className="flex flex-col gap-5 list-none  text-teallight2 text-sm">
              <div className="flex flex-row">
                <div className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-3 text-teal"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
                <li>
                  Integrated Mix Panel Analytics tool for various functions,
                  which highly impacted the product launch analysis
                </li>
              </div>
              <div className="flex flex-row">
                <div className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-3 text-teal"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
                <li>
                  Worked on two project on ReactJS and delivered their MVP
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
