import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "../Shared/ProductCard";
import img1 from "../../assets/product/p-1.jpg";
import img2 from "../../assets/product/p-2.jpg";
import img3 from "../../assets/product/p-3.jpg";
import img4 from "../../assets/product/p-4.jpg";
import img5 from "../../assets/product/p-5.jpg";
import img6 from "../../assets/product/p-9.jpg";
import img7 from "../../assets/product/p-7.jpg";

const Products = () => {
  const ProductData = [
    {
      id: 1,
      img: img1,
      title: "Boat HeadPhone",
      price: "120",
      aosDelay: "0",
    },
    {
      id: 2,
      img: img2,
      title: "Rocky Muntain",
      price: "420",
      aosDelay: "200",
    },
    {
      id: 3,
      img: img3,
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      id: 4,
      img: img4,
      title: "Printed",
      price: "220",
      aosDelay: "600",
    },
  ];
  const ProductData2 = [
    {
      id: 5,
      img: img5,
      title: "Boat HeadPhone",
      price: "120",
      aosDelay: "0",
    },
    {
      id: 6,
      img: img6,
      title: "Rocky Muntain",
      price: "420",
      aosDelay: "200",
    },
    {
      id: 7,
      img: img7,
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      id: 8,
      img: img7,
      title: "Printed",
      price: "220",
      aosDelay: "600",
    },
  ];
  return (
    <div>
      <div className="container">
        {/* heading Section */}
        <Heading title="Our Products" subtitle="ExploreOur Products" />
        {/* Body section  */}
        <ProductCard data={ProductData} />
        <ProductCard data={ProductData2} />
      </div>
    </div>
  );
};

export default Products;
