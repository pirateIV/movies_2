import { Link } from "react-router-dom";
import Imgix from "react-imgix";

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
                        fm: "jpg",
                      }}
                      loading="lazy"
                      width={500}
                      height={750}
                      alt={`movie title: ${
                        item?.title || item?.name || "..."
                      } `}
                    />
                  ) : null}
                </div>
                <div className="movie-title">
                  {item?.title || item?.name || "..."}
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
