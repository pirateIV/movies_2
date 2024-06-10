import Footer from "components/Footer";
import HeroMedia from "components/media/HeroMedia";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { QUERY_LIST } from "constants/lists";
import { useTranslation } from "react-i18next";

const queries = [QUERY_LIST.movie[0], QUERY_LIST.tv[0]];

const MainContent = () => {
  const outlet = useOutlet();
  const { t } = useTranslation();
  const location = useLocation();

  const shouldShowComponent = (component) =>
    !location.pathname.includes("search") && component;

  return (
    <div className="container">
      {shouldShowComponent(<HeroMedia />)}
      {!outlet
        ? queries.map((media) => (
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
                    <div className="flex flex-col items-center justify-around opacity-45 translate-y-1/2">
                      <div className="i-ph-film-strip text-4xl"></div>
                      <div>{t("Explore more")}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
        : outlet}
      {shouldShowComponent(<Footer />)}
    </div>
  );
};

export default MainContent;
