import { useLocation, useOutlet } from "react-router-dom";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import Container, { MainContent } from "components/Container";
import { useEffect, useState } from "react";
import HeroMedia from "components/media/HeroMedia";
import { getMedia, listMedia } from "services/tmdbAPI";

const Root = () => {
  const outlet = useOutlet();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [featuredPath, setFeaturedPath] = useState(
    Number(location.pathname.split("/")[2]),
  );

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

        // if (randomItem) {
        // const item = await getMedia("movie", featuredPath || allItems[0]?.id);
        setFeaturedPath(await getMedia(featuredPath));
        setFeatured(item.data);
        // }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    asyncData();
  }, []);

  return (
    <Container>
      <Navigation />
      {!location.pathname.includes("search") && <HeroMedia item={featured} />}
      {!outlet && <MainContent movies={movies} tvShows={tvShows} />}
      {outlet}
      <Footer />
    </Container>
  );
};

export default Root;
