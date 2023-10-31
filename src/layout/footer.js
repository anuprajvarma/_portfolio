import React from "react";
import { PiGithubLogoDuotone } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-3/4 flex justify-center">
        <div className=" flex flex-col gap-3 py-3">
          <p className="text-slatelight text-xs lg:text-sm">
            Design and build by anupraj varma
          </p>
          <div className=" flex justify-center">
            <Link
              target="_blank"
              href={"https://github.com/anuprajvarma"}
              className="cursor-pointer"
            >
              <PiGithubLogoDuotone className="h-6 w-6 text-slatelight hover:text-teal" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
