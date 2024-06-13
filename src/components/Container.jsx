import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { QUERY_LIST } from "constants/lists";
import { listMedia, getMedia as getHeroMedia } from "services/tmdbAPI";
import HeroMedia from "./media/HeroMedia";
import MediaList from "./media/MediaList";
import Footer from "./Footer";
import useLocalStorage from "hooks/useLocalStorage";

const queries = [QUERY_LIST.movie[0], QUERY_LIST.tv[0]];

const Container = ({ children }) => {
  const location = useLocation();
  const { movieId } = useParams();

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
  const [heroMedia, setHeroMedia] = useState(null);
  const [heroMediaId, setHeroMediaId] = useLocalStorage("hero_media_id", null);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const [movies, tv] = await Promise.all([
          listMedia(queries[0].type, "popular"),
          listMedia(queries[1].type, "popular"),
        ]);
        const moviesData = movies?.data?.results || [];
        const tvData = tv?.data?.results || [];

        setMediaItems({ movies: moviesData, tv: tvData });

        if (moviesData.length > 0) {
          setHeroMediaId(moviesData[0].id);
        }
      } catch (error) {
        console.error("Error fetching media: ", error);
      }
    };

    getMedia();
  }, [setHeroMediaId]);

  useEffect(() => {
    const getHeroMediaDetails = async () => {
      if (heroMediaId) {
        try {
          const heroMediaDetails = await getHeroMedia("movie", heroMediaId);
          setHeroMedia(heroMediaDetails?.data);
        } catch (error) {
          console.error("Error fetching hero media: ", error);
        }
      }
    };

    getHeroMediaDetails();
  }, [heroMediaId]);

  return (
    <div id="app-scroller">
      <div>
        {!location.pathname.includes("search") && (
          <HeroMedia item={heroMedia} />
        )}
        {!location.pathname.includes("search") &&
          !location.pathname.includes(movieId) && (
            <MediaList mediaItems={mediaItems} mediaList={filteredQueries} />
          )}{" "}
        {children}
        {!location.pathname.includes("search") && <Footer />}
      </div>
    </div>
  );
};

export default Container;
