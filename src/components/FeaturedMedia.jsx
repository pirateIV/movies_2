import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedMedia = ({ item }) => {
  console.log(item);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const truncate = (string, maxLength) => {
    if (string && string.length > maxLength) {
      return string.substring(0, maxLength) + "...";
    }
    return string;
  };

  return (
    <Link to={`movie/${item?.id}`} id="featured">
      <div className="featured-container aspect-3/2 lg:aspect-25/9">
        <motion.div
          className="featured-content absolute z-20 top-0 bottom-0 flex flex-col items-start justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="absolute lg:hidden p-10 top-0 left-0"
            variants={itemVariants}
          >
            <button className="text-5xl text-white/50 hover:text-white">
              <div className="i-ph-play-circle-light"></div>
            </button>
          </motion.div>

          <motion.h1 variants={itemVariants}>{item?.title}</motion.h1>
          <motion.p variants={itemVariants}>
            {truncate(item?.overview, 150)}{" "}
          </motion.p>

          <motion.button id="watch_trailer" variants={itemVariants}>
            <div className="i-ph-play"></div>
            Watch Trailer
          </motion.button>
        </motion.div>

        <div className="featured-image absolute w-full lg:w-2/3 inset-y-0 bottom-0 lg:right-0 z-10 h-2/3 lg:h-full">
          <img
            className="w-full h-full object-cover"
            // src={`https://image.tmdb.org/t/p/w1280/${item?.backdrop_path}`}
            src={`https://image.tmdb.org/t/p/w780/${item?.backdrop_path}`}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedMedia;
