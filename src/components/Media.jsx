import { Link } from "react-router-dom";
import Imgix from "react-imgix";
import stars from "assets/images/stars.png";
import stars_filled from "assets/images/stars-filled.png";

const Media = ({ title, items, itemType, exploreLink }) => {
  const buildURL = (imagePath) =>
    `https://image.tmdb.org/t/p/w500/${imagePath}`;

  return (
    <div className="popular">
      <div className="header">
        <h1>{title}</h1>
        <Link to={exploreLink} className="explore-link">
          Explore more
        </Link>
      </div>
      <div className="content">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/${itemType}/${item.id}`}>
                <div className="media-item">
                  {item?.poster_path ? (
                    <Imgix
                      src={buildURL(item?.poster_path)}
                      sizes="(min-width: 960px) 400px, (min-width: 640px) 200px, 900px"
                      imgixParams={{
                        auto: "compress,format",
                        fit: "crop",
                        fm: "webp",
                      }}
                      htmlAttributes={{
                        width: 500,
                        height: 750,
                      }}
                      alt={`movie title: ${
                        item?.title || item?.name || "..."
                      } `}
                    />
                  ) : null}
                </div>
                <div className="movie-title">
                  {item?.title || item?.name || "..."}
                </div>
                <div className="flex items-center text-sm gap-2">
                  <div
                    className="relative aspect-11/2 w-20 *:inset-x-0"
                    style={{
                      filter: "hue-rotate(320deg)",
                    }}
                  >
                    <img className="absolute w-20" src={stars} aria-hidden="true" />
                    <img
                      src={stars_filled}
                      className="absolute w-20"
                      aria-hidden="true"
                      style={{
                        clipPath: `inset(0 ${
                          100 - item?.vote_average * 10
                        }% 0 0)`,
                      }}
                    />
                  </div>
                  <div className="opacity-60">
                    {item?.vote_average.toFixed(1)}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Media;
