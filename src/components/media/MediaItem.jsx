import React from "react";
import { Link } from "react-router-dom";

const MediaItem = ({ item, itemType }) => {
  const {
    poster_path: imagePath,
    title,
    name,
    vote_average: voteAverage,
    id,
  } = item;
  const displayTitle = title || name || "...";

  return (
    <Link
      to={`/${itemType}/${id}`}
      className="block flex-1 pb-2 w-28 sm:w-40 md:w-60"
    >
      <MediaItemImage imagePath={imagePath} title={displayTitle} />
      <MediaItemTitle title={displayTitle} />
      <MediaItemRating voteAverage={voteAverage} />
    </Link>
  );
};

export default MediaItem;
