import { QUERY_LIST } from "constants/lists";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const media_list = [
  QUERY_LIST.movie[0],
  QUERY_LIST.movie[1],
  QUERY_LIST.movie[2],
  QUERY_LIST.movie[3],
];

const Movies = () => {
  const { t } = useTranslation();

  return (
    <div>
      {media_list.map((media) => (
        <div className="popular">
          <div className="header">
            <h1>{media.title}</h1>
            <Link to={media.exploreLink} className="explore-link">
              {t("Explore more")}
            </Link>
          </div>
          <div className="content">
            <ul></ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
