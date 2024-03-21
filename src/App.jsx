import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero'
import Category from './Component/Category/Category'
import Category2 from './Component/Category/Category2'
import Services from './Component/Services/Services'
import Banner from './Component/Banner/Banner'
import image1 from './assets/hero/headphone.png'
import smartWatch from './assets/category/smartwatch2-removebg-preview.png'
import Products from './Component/Products/Products'
import Blogs from './Component/Blogs/Blogs'
import Partner from './Component/Partner/Partner'
import Footer from './Component/Footer/Footer'
import Popup from './Component/Popup/Popup'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {

  const [orderPopup,setOrderPopup]=useState(false);
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup)
  }
  const bannerData=
    {
discount:"30% OFF",
title:"Fine Smile",
date:"10 Mar to 25 Mar",
image:image1,
title2:"Air Solo Bass",
title3:"Winter Sale",
title4:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
bgColor:"#f42c37"

    }
  const bannerData2=
    {
discount:"30% OFF",
title:"Happy Hours",
date:"10 Mar to 25 Mar",
image:smartWatch,
title2:"Smart Solo",
title3:"Winter Sale",
title4:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
bgColor:"#2dcc6f"

    }
  
    useEffect(()=>{
      AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100
        // once:true,
        // mirror:false,
        // anchorPlacement:"top-bottom"
      }
      )
      AOS.refresh()
    },[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup} />
     <Category/>
     <Category2/>
     <Services/>
     <Banner data={bannerData}/>
     <Products/>
     <Banner data={bannerData2}/>
     <Blogs/>
     <Partner/>
     <Footer/>  
     <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>                
    </div>
  )
}

export default App