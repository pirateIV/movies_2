import { Link } from "react-router-dom";

const Media = ({ title, items, itemType, exploreLink }) => {
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
            <Link key={item.id} to={`/${itemType}/${item.id}`}>
              <div className="media-item">
                <img
                  width="400"
                  height="600"
                  alt={item.title || item.name || item.original_name}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              </div>
              <div className="movie-title">
                {item.title || item.name || item.original_name}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Media;
