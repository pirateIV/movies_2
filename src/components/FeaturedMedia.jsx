import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Imgix from "react-imgix";
import stars from "../assets/images/stars.png";
import stars_filled from "../assets/images/stars-filled.png";

const FeaturedMedia = ({ item }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buildURL = (imagePath) =>
    `https://image.tmdb.org/t/p/w780/${imagePath}`;

  return (
    <Link to={`movie/${item?.id}`} id="featured">
      <div className="featured-container aspect-3/2 lg:aspect-25/9">
        <motion.div
          className="featured-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="absolute p-10 top-0 xs:left-0 right-0 lg:hidden max-w-[300px]:right-0"
            variants={itemVariants}
          >
            <button
              title="watchTrailer"
              className="text-5xl text-white/50 hover:text-white"
            >
              <div className="i-ph-play-circle-light"></div>
            </button>
          </motion.div>

          <motion.h1 variants={itemVariants}>{item?.title}</motion.h1>
          {item && (
            <>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 *:opacity-60 *:inset-y-0"
              >
                <div className="relative aspect-[11/2] w-[6.25rem]">
                  <img className="absolute" src={stars} aria-hidden="true" />
                  <img
                    className="absolute"
                    src={stars_filled}
                    aria-hidden="true"
                  />
                </div>
                <div className="" id="vote-average">
                  {Math.round(item?.vote_average).toFixed(0)}
                </div>
                <span> · </span>
                <div id="reviews">{item?.vote_count} Reviews</div>
                <span> · </span>
                <div id="release-date">
                  {item?.release_date.substring(0, 4)}
                </div>
              </motion.div>
              <motion.p variants={itemVariants}>{item?.overview}</motion.p>

              <motion.button id="watch_trailer" variants={itemVariants}>
                <div className="i-ph-play"></div>
                Watch Trailer
              </motion.button>
            </>
          )}
        </motion.div>

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
              width={800}
              height={450}
              alt={item?.title}
            />
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedMedia;
