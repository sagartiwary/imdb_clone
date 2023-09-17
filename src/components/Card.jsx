import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ data }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 group-[]:">
      <Link href={`/movie/${data.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "200px",
            objectFit:"cover"
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not avilable"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{data.overview}</p>
          <h2 className="font-bold truncate text-lg">
            {data.title || data.name}
          </h2>
          <p className="flex items-center">
            {data.release_date || data.first_air_date}{" "}
            <FiThumbsUp className="h-16 ml-3 mr-1" /> {data.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
