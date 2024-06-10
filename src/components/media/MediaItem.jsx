import StarsRate from "components/StarsRate";
import React from "react";
import { Link } from "react-router-dom";

const buildURL = (imagePath, size) =>
  `https://movies-proxy.vercel.app/ipx/f_webp&s_${size}/tmdb/${imagePath}`;

const MediaItem = ({ item, itemType }) => {
  const imagePath = item?.poster_path;

  return (
    <>
      <Link
        to={`/${itemType}/${item.id}`}
        className="block flex-1 pb-2 w-28 sm:w-40 md:w-60"
      >
        <div className="media-item">
          {imagePath && (
            <img
              width="400"
              height="600"
              src={buildURL(imagePath, "400x600")}
              srcSet={`${buildURL(imagePath, "400x600")} 1x, ${buildURL(
                imagePath,
                "800x1200",
              )} 2x`}
              alt={`movie title: ${item?.title || item?.name || "..."}`}
            />
          )}
        </div>
        <div className="movie-title">{item?.title || item?.name || "..."}</div>
        <div className="flex items-center text-sm gap-5">
          <StarsRate votes={item?.vote_average} />{" "}
          <div className="opacity-60">{item?.vote_average.toFixed(1)}</div>
        </div>
      </Link>
    </>
  );
};

export default MediaItem;
