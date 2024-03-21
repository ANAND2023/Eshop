// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import image1 from '../assets/hero/headphone.png'
// import image2 from '../assets/hero/watch.png'

// const CarouselBanner = () => {
//   const dataimg=[
//     {
//       img:image1,

//     },
//     {
//       img:image2
//     }
//   ]
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="relative">
//       <Slider {...settings}>
//         <div className="w-full h-64 md:h-96">
//           <img src={image1} alt="Banner 1" className="w-full h-full object-cover" />
//         </div>
//         <div className="w-full h-64 md:h-96">
//           <img src={image2} alt="Banner 2" className="w-full h-full object-cover" />
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>
//     </div>
//   );
// };

// export default CarouselBanner;



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/hero/headphone.png';
import image2 from '../assets/hero/watch.png';

const CarouselBanner = () => {
  const dataimg = [
    {
      img: image1,
    },
    {
      img: image2
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div >
      <Slider {...settings}>
        {dataimg.map((data, index) => (
          <div key={index} className="w-full h-64 md:h-96">
            <img src={data.img}
            //  alt={`Banner ${index + 1}`} 
            className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselBanner;
 