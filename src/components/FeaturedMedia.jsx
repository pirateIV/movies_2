import { Link } from "react-router-dom";
import Imgix from "react-imgix";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import stars from "../assets/images/stars.png";
import stars_filled from "../assets/images/stars-filled.png";

const FeaturedMedia = ({ item }) => {
  const [showContent, setShowContent] = useState(false);
  const contentAnimation = useAnimation();

  useEffect(() => {
    setShowContent(true);
    contentAnimation.start({ opacity: 1 });
  }, [contentAnimation]);

  const buildURL = (imagePath) =>
    `https://image.tmdb.org/t/p/w780/${imagePath}`;

  return (
    <Link to={`movie/${item?.id}`} id="featured">
      <motion.div
        className={`featured-container aspect-3/2 lg:aspect-25/9 ${
          showContent ? "fade-in" : ""
        }`}
        initial={{ opacity: 0 }}
        animate={contentAnimation}
        transition={{ duration: 0.5 }}
      >
        <div className="featured-content">
          <div className="absolute p-10 top-0 xs:left-0 right-0 lg:hidden max-w-[300px]:right-0">
            <button
              title="watchTrailer"
              className="text-5xl text-white/50 hover:text-white"
            >
              <div className="i-ph-play-circle-light"></div>
            </button>
          </div>

          <h1>{item?.title}</h1>
          {item && (
            <>
              <div className="flex items-center gap-2 *:opacity-60 *:inset-y-0">
                <div
                  className="relative aspect-11/2 w-[6.25rem] !opacity-100"
                  style={{
                    filter: "hue-rotate(320deg)",
                  }}
                >
                  <img className="absolute" src={stars} aria-hidden="true" />
                  <img
                    src={stars_filled}
                    className="absolute"
                    aria-hidden="true"
                    style={{
                      clipPath: `inset(0 ${
                        100 - item?.vote_average * 10
                      }% 0 0)`,
                    }}
                  />
                </div>
                <div className="" id="vote-average">
                  {item?.vote_average.toFixed(1)}
                </div>
                <span> · </span>
                <div id="reviews">{item?.vote_count} Reviews</div>
                <span> · </span>
                <div id="release-date">
                  {item?.release_date.substring(0, 4)}
                </div>
              </div>
              <p>{item?.overview}</p>

              <button id="watch_trailer">
                <div className="i-ph-play"></div>
                Watch Trailer
              </button>
            </>
          )}
        </div>

        <div className="featured-image">
          {item?.backdrop_path ? (
            <Imgix
              src={buildURL(item?.backdrop_path)}
              className="w-full h-full object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
              loading="lazy"
              imgixParams={{
                auto: "compress,format",
                fit: "crop",
                w: 800,
                q: 80,
              }}
              htmlAttributes={{
                width: 800,
                height: 450,
              }}
              alt={item?.title}
            />
          ) : null}
        </div>
      </motion.div>
    </Link>
  );
};

export default FeaturedMedia;
