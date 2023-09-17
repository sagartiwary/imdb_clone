import React from 'react'
import { MenuItems } from './MenuItems'
import {AiFillHome} from "react-icons/ai";
// import {FaCircleInfo} from 'react-icons/fa'
import {BsFillInfoCircleFill} from "react-icons/bs"
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { DarkModeSwitch } from './DarkModeSwitch';
export const Header = () => {
  return (
    <div className="flex justify-between max-w-6xl items-center sm:mx-auto mx-2 py-6">
      <div className="flex">
        <MenuItems title="HOME" address={"/"} Icon={AiFillHome} />
        <MenuItems
          title="ABOUT"
          address={"/about"}
          Icon={BsFillInfoCircleFill}
        />
      </div>

      <div className="flex items-center space-x-5">
        <DarkModeSwitch/>
        <Link href={"/"}>
          <h2>
            <span className="text-2xl bg-amber-500 rounded-lg py-1 px-2">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
