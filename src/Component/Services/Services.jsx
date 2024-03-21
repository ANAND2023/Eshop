import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
const Services = () => {
  const ServiceData = [
    {
      id: 1,
      icone: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
      title: "Free Shipping",
      decription: "Free Shipping On All Order",
    },
    {
      id: 2,
      icone: <FaCircle className="text-4xl md:text-5xl text-primary" />,
      title: "Safe Money",
      decription: "30 Days Money Back",
    },
    {
      id: 3,
      icone: <FaWallet className="text-4xl md:text-5xl text-primary" />,
      title: "Secure Payment",
      decription: "All Payment Secure",
    },
    {
      id: 4,
      icone: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
      title: "Online Support 24/7",
      decription: "Technical support 24/7",
    },
  ];
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div className="flex flex-col items-start sm:flex-row gap-4">
              {data.icone}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 tex-sm">{data.decription}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
