import { QUERY_LIST } from "constants/lists";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const queries = [
  QUERY_LIST.movie[0],
  QUERY_LIST.movie[1],
  QUERY_LIST.movie[2],
  QUERY_LIST.movie[3],
];

const Movies = () => {
  const { t } = useTranslation();

  return (
    <div>
      {queries.map((media) => (
        <div className="popular">
          <div className="header">
            <h1>{media.title}</h1>
            <Link to={media.exploreLink} className="explore-link">
              {t("Explore more")}
            </Link>
          </div>
          <div className="content">
            <Link to={`category/${media.query}`}>
              <div className="media-item flex items-center">
                <div className="flex flex-col h-full w-full items-center justify-around opacity-45 translate-y-1/2">
                  <div className="i-ph-film-strip text-4xl"></div>
                  <div>{t("Explore more")}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
