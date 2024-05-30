import { useEffect, useState } from "react";
import { getMovie, getMovies, getTvShows } from "services/tmdbAPI";
import Media from "components/Media";
import FeaturedMedia from "components/FeaturedMedia";

const Root = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const asyncData = async () => {
      try {
        const [trendingMovies, trendingTvShows] = await Promise.all([
          getMovies("popular"),
          getTvShows("popular"),
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
          const item = await getMovie(randomItem?.id);
          setFeatured(item.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    asyncData();
  }, []);

  return (
    <div className="min-h-screen max-w-[100vw]">
      <FeaturedMedia item={featured} />

      <Media
        items={movies}
        itemType="movie"
        title="Popular Movies"
        exploreLink="/movie/category/popular"
      />

      <Media
        items={tvShows}
        itemType="tv"
        title="Popular TV Shows"
        exploreLink="/tv/category/popular"
      />
    </div>
  );
};

export default Root;
