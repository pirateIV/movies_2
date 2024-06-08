import { Link } from "react-router-dom";
import stars from "assets/images/stars.png";
import stars_filled from "assets/images/stars-filled.png";
import { useTranslation } from "react-i18next";
import StarsRate from "./StarsRate";
import { useEffect, useState } from "react";

const buildURL = (imagePath, size) =>
  `https://movies-proxy.vercel.app/ipx/f_webp&s_${size}/tmdb/${imagePath}`;

const MediaItem = ({ item, itemType }) => {
  const imagePath = item?.poster_path;

  // const [item, setItem] = useState(
  //   location.pathname.split("/")[2] || null,
  // );

  // useEffect(() => {
  //   localStorage.setItem("featured_item", item?.id);
  //   setItem(localStorage.getItem("featured_item"));
  // }, [item]);

  return (
    <>
      <li key={item.id} onClick={() => setItem(item?.id)}>
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
                onError={(e) => e.target.setAttribute("data-error", 1)}
                alt={`movie title: ${item?.title || item?.name || "..."}`}
                srcSet={`${buildURL(imagePath, "400x600")} 1x, ${buildURL(
                  imagePath,
                  "800x1200",
                )} 2x`}
              />
            )}
          </div>
          <div className="movie-title">
            {item?.title || item?.name || "..."}
          </div>
          <div className="flex items-center text-sm gap-5">
            <div className="w-16">
              <StarsRate votes={item?.vote_average} />
            </div>
            <div className="opacity-60">{item?.vote_average.toFixed(1)}</div>
          </div>
        </Link>
      </li>
    </>
  );
};

const MediaContainer = ({ title, items, itemType, exploreLink }) => {
  const { t } = useTranslation();

  return (
    <div className="popular">
      <div className="header">
        <h1>{title}</h1>
        <Link to={exploreLink} className="explore-link">
          {t("Explore more")}
        </Link>
      </div>
      <div className="content">
        <ul>
          {items.map((item) => (
            <MediaItem key={item.id} item={item} itemType={itemType} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MediaContainer;
