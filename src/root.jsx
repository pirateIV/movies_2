import { useEffect, useState } from "react";
import { getMovie, getMovies, getTvShows } from "services/tmdbAPI";
import { useOutlet } from "react-router-dom";
import Container, { MainContent } from "components/Container";
import SidebarNav from "components/SidebarNav";

const Root = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [featured, setFeatured] = useState(null);
  const outlet = useOutlet();

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
          // const item = await getMovie(allItems[0]);
          setFeatured(allItems[0]);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    asyncData();
  }, []);

  return (
    <Container>
      <SidebarNav />
      {!outlet && (
        <MainContent featured={featured} movies={movies} tvShows={tvShows} />
      )}
      {outlet}
    </Container>
  );
};

export default Root;
