import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex justify-center pt-28">
      <div className="flex justify-center w-10/12  sm:w-8/12">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center text-center gap-10 w-full lg:w-6/12"
        >
          <div>
            <p className="text-xl lg:text-3xl text-slatelight font-extrabold">
              Get In Touch
            </p>
            <p className="text-slatelight2 py-5 text-xs lg:text-sm">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
            <button className="px-4 py-1 lg:px-10 lg:py-2 text-lg text-teal border border-teal hover:-translate-x-1 hover:-translate-y-1 transition duration-700 hover:shadow-[4px_4px_0px_0px] hover:shadow-teal rounded">
              <a className="text-sm" href="mailto: anupraj1854@gmail.com">
                Say Hello
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
