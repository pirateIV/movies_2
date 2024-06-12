import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { QUERY_LIST } from "constants/lists";
import { listMedia } from "services/tmdbAPI";
import HeroMedia from "./media/HeroMedia";
import MediaList from "./media/MediaList";
import Footer from "./Footer";

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

  const [mediaItems, setMediaItems] = useState({ movies: [], tv: [] });

  useEffect(() => {
    const getMedia = async () => {
      try {
        const [movies, tv] = await Promise.all([
          listMedia(queries[0].type, "popular"),
          listMedia(queries[1].type, "popular"),
        ]);
        setMediaItems({
          movies: movies?.data?.results || [],
          tv: tv?.data?.results || [],
        });
      } catch (error) {
        console.error("Error fetching media: ", error);
      }
    };
    getMedia();
  }, []);

  return (
    <div id="app-scroller">
      <div>
        {removeOnSearch(<HeroMedia item={mediaItems?.movies[0]} />)}
        {removeOnSearch(
          <MediaList mediaItems={mediaItems} mediaList={filteredQueries} />,
        )}
        {children}
        {removeOnSearch(<Footer />)}
      </div>
    </div>
  );
};

export default Container;
