import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  const FooterLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              quidem.
            </p>
            <p className="text-gray-500 mt-4">Made by Anand </p>
            <a
              href="/"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit our Youtube Channel
            </a>
          </div>
          {/* Footer Links  */}

          <div className="col-span-2 grid drid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="px-8 py-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Importent Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second link  */}
            <div className="px-8 py-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address  */}
            <div className="px-8 py-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left ">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida , Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  {/* <p>India</p> */}
                  <p>+ 91 123456789</p>
                </div>
              </div>
              <div className="flex item-center gap-3 mt-6">
                <a href="/">
                    <FaInstagram className="text-3xl hover:text-primary duration-200"/>
                </a>
                <a href="/">
                    <FaFacebook className="text-3xl hover:text-primary duration-200"/>
                </a>
                <a href="/">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200"/>
                </a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
