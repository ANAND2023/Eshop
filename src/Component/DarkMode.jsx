import React, { useEffect, useState } from 'react'
 import darkBtn from '../assets/dark-mode-button.png'
 import lightBtn from '../assets/light-mode-button.png'
const DarkMode = () => {
    const [theme,setTheme] =useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") :"light"
    )
    const element=document.documentElement;
    console.log(element)

    useEffect(()=>{
        localStorage.setItem("theme",theme)
        if(theme === "dark"){
            element.classList.add("dark");
            element.classList.add("dark");

        }
        else{
            element.classList.remove("light");
            element.classList.remove("dark")
        }
    })
  return (

    <div>
        <div className='relative'>
            <img onClick={()=>setTheme(theme==="dark" ? "light" : "dark")} src={lightBtn} alt="" className={`w-12 cursor-pointer absolute right-0 z-10 ${ theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-200`}/>
            <img onClick={()=>setTheme(theme==="light" ? "dark" : "light")} src={darkBtn} alt="" className={`w-12 cursor-pointer transition-all duration-200`} />
        </div>
    </div>
  )
}

export default DarkMode