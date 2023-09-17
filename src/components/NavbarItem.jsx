
"use client"
import Link from "next/link";
import {useSearchParams} from "next/navigation"
export default function NavbarItem({ title, params }) {
    const searchParam=useSearchParams();
    const genre=searchParam.get("genre")
  return (
    <div className="">
      <Link
      className={`m-4 p-2 text-semibold ${
        genre && genre===params && "underline    underline-offset-8 decoration-4 rounded-lg decoration decoration-amber-500 decoration"
      } `}
      href={`/?genre=${params}`}>{title}</Link>
    </div>
  );
}
