import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import HeroMedia from "./media/HeroMedia";
import MediaList from "./media/MediaList";
import { QUERY_LIST } from "constants/lists";

const queries = [QUERY_LIST.movie[0], QUERY_LIST.tv[0]];

const Container = ({ children }) => {
  const location = useLocation();

  const removeOnSearch = (component) =>
    !location.pathname.includes("search") && component;

  const getFilteredQueries = () => {
    if (location.pathname.includes("movie")) {
      return [queries[0]];
    } else if (location.pathname.includes("tv")) {
      return [queries[1]];
    }
    return queries;
  };

  const filteredQueries = getFilteredQueries();

  return (
    <div className="movie_container">
      {removeOnSearch(<HeroMedia />)}
      {removeOnSearch(<MediaList mediaList={filteredQueries} />)}
      {children}
      {removeOnSearch(<Footer />)}
    </div>
  );
};

export default Container;
