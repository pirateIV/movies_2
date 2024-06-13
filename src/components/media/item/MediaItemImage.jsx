import React from "react";
import { motion } from "framer-motion";

const buildURL = (imagePath, size) =>
  `https://movies-proxy.vercel.app/ipx/f_webp&s_${size}/tmdb/${imagePath}`;

const MediaItemImage = ({ imagePath, title }) => (
  <div className="media-item">
    {imagePath && (
      <motion.img
        width="400"
        height="600"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        src={buildURL(imagePath, "400x600")}
        srcSet={`${buildURL(imagePath, "400x600")} 1x, ${buildURL(imagePath, "800x1200")} 2x`}
        loading="lazy"
        alt={`movie title: ${title}`}
      />
    )}
  </div>
);

export default MediaItemImage;
