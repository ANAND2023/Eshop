import React from "react";
import Slider from "react-slick";
import image1 from "../assets/hero/headphone.png";
import image2 from "../assets/hero/watch.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Shared/Button";

const Hero = ({ handleOrderPopup }) => {
  const HeroData = [
    {
      id: 1,
      img: image1,
      title: "Wireless",
      subtitle: "Beats Solo",
      title2: "Headphones",
      description: "lorem100",
    },
    {
      id: 2,
      img: image2,
      title: "Wireless",
      subtitle: "Beats Solo",
      title2: "Virtual",
      description: "lorem100",
    },
  ];
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    // slidesToShow: 1,
    // slidesToScroll: 1
  };
  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:p-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt:12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"

                    className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div 
                     data-aos="fade-up"
                     data-aos-offset="0"
                     data-aos-duration="500"
                     data-aos-delay="300"
                    >
                      <Button
                        handler={handleOrderPopup}
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]  relative z-40 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
