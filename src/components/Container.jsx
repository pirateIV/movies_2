import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { QUERY_LIST } from "constants/lists";
import {
  listMedia,
  getMedia as getHeroMedia,
  getMedia,
} from "services/tmdbAPI";
import HeroMedia from "./media/HeroMedia";
import MediaList from "./media/MediaList";
import Footer from "./Footer";

const initialQueries = [QUERY_LIST.movie[0], QUERY_LIST.tv[0]];

const Container = ({ children }) => {
  const location = useLocation();
  const { movieId, tvId } = useParams();

  const determineQueries = () => {
    if (location.pathname.includes("movie")) {
      return [initialQueries[0]];
    } else if (location.pathname.includes("tv")) {
      return [initialQueries[1]];
    }
    return initialQueries;
  };

  const currentQueries = determineQueries();

  const [selectedMedia, setSelectedMedia] = useState({ movieId, tvId });
  const [mediaCollection, setMediaCollection] = useState({
    movies: [],
    tv: [],
  });

  useEffect(() => {
    const getMediaCollection = async () => {
      const [movieData, tvData] = await Promise.all([
        listMedia("movie", QUERY_LIST.movie[0].query),
        listMedia("tv", QUERY_LIST.tv[0].query),
      ]);

      const movieList = movieData?.data?.results || [];
      const tvList = tvData?.data?.results || [];

      setMediaCollection({ movies: movieList, tv: tvList });
    };
    getMediaCollection();
  }, []);

  useEffect(() => {
    const getHeroMedia = async () => {
      if (!location.pathname.includes("tv")) {
        const selectedMovieId = movieId
          ? movieId
          : mediaCollection?.movies[0]?.id;

        const heroMediaData = await getMedia("movie", selectedMovieId);
        setSelectedMedia(heroMediaData?.data);
      } else if (location.pathname.includes("tv")) {
        const selectedTvId = tvId ? tvId : mediaCollection?.tv[0]?.id;

        const heroMediaData = await getMedia("tv", selectedTvId);
        setSelectedMedia(heroMediaData?.data);
      }
    };
    getHeroMedia();
  }, [mediaCollection, location]);

  return (
    <div id="app-scroller">
      <div>
        {!location.pathname.includes("search") && (
          <HeroMedia item={selectedMedia} />
        )}
        {!location.pathname.includes("search") &&
          !location.pathname.includes(movieId || tvId) && (
            <MediaList
              mediaItems={mediaCollection}
              mediaList={currentQueries}
            />
          )}{" "}
        {children}
        {!location.pathname.includes("search") && <Footer />}
      </div>
    </div>
  );
};

export default Container;
