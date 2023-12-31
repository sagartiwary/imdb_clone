
"use client"
import React, { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";
import {BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from 'next-themes';
export const DarkModeSwitch = () => {
    const {systemTheme,theme,setTheme}=useTheme();
    const [mounted,setMounted]=useState(false);
    const currentTheme=theme==="system"?systemTheme:theme;
    useEffect(()=>{
     setMounted(true)
    },[])
  return <>{mounted && currentTheme === "dark" ? <MdLightMode className='text-xl hover:text-amber-500 cursor-pointer' onClick={()=>setTheme("light")}/> : <BsFillMoonFill  className='text-xl hover:text-amber-500 cursor-pointer'onClick={()=>setTheme("dark")}/>}</>;
}
