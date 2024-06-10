import { useTranslation } from "react-i18next";
import { QUERY_LIST } from "constants/lists";
import { Link } from "react-router-dom";

const queries = [QUERY_LIST.tv[0], QUERY_LIST.tv[1], QUERY_LIST.tv[2]];

const Movies = () => {
  const { t } = useTranslation();

  return (
    <div>
      {queries.map((media) => (
        <div className="popular">
          <div className="header">
            <h1>{media.title}</h1>
            <Link to={`category/${media.query}`}>{t("Explore more")}</Link>
          </div>
          <div className="relative">
            <div className="overflow-y-auto">
              <div className="content">
                <Link to={`category/${media.query}`}>
                  <div className="media-item flex items-center">
                    <div className="flex flex-col items-center justify-around opacity-45 translate-y-1/2">
                      <div className="i-ph-television-simple text-4xl"></div>
                      <div>{t("Explore more")}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
