"use client"

import React, { useReducer, useState } from 'react'
import { useRouter } from 'next/navigation';
export default function SearchBox() {
    const [search,setSearch]=useState("");
    const router=useRouter()
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`)
    }
  return (
    <form onSubmit={handleSubmit} className='max-w-6xl px-5  mx-auto flex items-center justify-between'>
        <input className='flex-1 w-full h-14 rounded-lg placeholder:gray-500 bg-transparent outline-none' 
        type="text" placeholder='Search keywords' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button disabled={!search} type="submit" className='text-amber-600  disabled:text-gray-400 '>Search...</button>
    </form>
  )
}
