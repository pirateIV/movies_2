import Footer from "components/Footer";
import HeroMedia from "components/media/HeroMedia";
import { Link, useLocation, useOutlet } from "react-router-dom";
import { QUERY_LIST } from "constants/lists";
import { useTranslation } from "react-i18next";

const media_list = [QUERY_LIST.movie[0], QUERY_LIST.tv[0]];

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
        ? media_list.map((media) => (
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
          ))
        : outlet}
      {shouldShowComponent(<Footer />)}
    </div>
  );
};

export default MainContent;
