import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import HeroMedia from "./media/HeroMedia";
import MediaContainer from "./MediaContainer";
import { getMedia, listMedia } from "services/tmdbAPI";

const Container = ({ children }) => {
  return (
    <div className="relative w-full flex flex-col pb-[70px] lg:pb-0 items-end justify-end overflow-hidden">
      {children}
    </div>
  );
};

export const MainContent = () => {
  const { t } = useTranslation();

  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const asyncData = async () => {
      try {
        const [trendingMovies, trendingTvShows] = await Promise.all([
          listMedia("movie", "popular"),
          listMedia("tv", "popular"),
        ]);

        const movieResults = trendingMovies.data.results;
        const tvShowResults = trendingTvShows.data.results;

        setMovies(movieResults);
        setTvShows(tvShowResults);

        const allItems = [...movieResults, ...tvShowResults];
        const randomItem =
          allItems[Math.floor(Math.random() * allItems.length)];

        console.log(allItems);

        if (randomItem) {
          const item = await getMedia("movie", allItems[0]?.id);
          setFeatured(item.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    asyncData();
  }, []);

  return (
    <div className="min-h-screen w-full lg:max-w-[calc(100%-70px)]">
      <div className="min-h-screen">
        <HeroMedia item={featured} />

        <MediaContainer
          items={movies}
          itemType="movie"
          title={t("Popular Movies")}
          exploreLink="/movie/category/popular"
        />

        <MediaContainer
          items={tvShows}
          itemType="tv"
          title={t("Popular TV Shows")}
          exploreLink="/tv/category/popular"
        />
      </div>
    </div>
  );
};
export default Container;
