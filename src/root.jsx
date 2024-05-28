import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTMDB } from "./utils/fetchTMDB";
import { getMovies, getTvShows } from "services/tmdbAPI";

const Root = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const requestMedia = async () => {
      const [m, t] = await Promise.all([
        getMovies("popular"),
        getTvShows("popular"),
      ]);
      setMovies(m.data.results);
      setTvShows(t.data.results);
      console.log(t.data.results);
    };
    requestMedia();
  }, []);

  const { id, title, overview } = movies[0] || {};

  return (
    <div className="min-h-screen w-full flex-1">
      {id && <MediaItem id={id} title={title} overview={overview} />}
      <MovieList
        title="Popular Movies"
        items={movies}
        itemType="movie"
        exploreLink="/movie/category/popular"
      />
      <MovieList
        title="Popular TV Shows"
        items={tvShows}
        itemType="tv"
        exploreLink="/tv/category/popular"
      />
    </div>
  );
};

const MediaItem = ({ id, title, overview }) => {
  return (
    <Link to={`movie/${id}`}>
      <div className="h-[60vh] flex items-center bg-black">
        <div className="px-[100px] space-y-2">
          <h1 className="text-5xl">{title}</h1>
          <p className="opacity-80">{overview}</p>
          <button className="inline-flex items-center gap-2.5 px-6 py-3 transition-colors bg-[#17181a] hover:bg-[#292a2d]">
            <div className="i-ph-play"></div>
            Watch Trailer
          </button>
        </div>
      </div>
    </Link>
  );
};

const MovieList = ({ title, items, itemType, exploreLink }) => {
  return (
    <div
      className="popular py-5"
      style={{ background: "linear-gradient(to right, #111, 60% #000)" }}
    >
      <div className="mt-4 px-10 flex items-center justify-between">
        <h1 className="text-2xl">{title}</h1>
        <Link
          to={exploreLink}
          className="text-[#777] opacity-95 hover:text-[#40c1ad]"
        >
          Explore more
        </Link>
      </div>
      <div className="w-full overflow-y-auto px-10">
        <ul className="flex my-5 justify-between flex-shrink-0 gap-1.5">
          {items.map((item) => (
            <Link key={item.id} to={`/${itemType}/${item.id}`}>
              <div className="p-1 w-40 md:w-60 bg-gray-800">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  className="object-cover"
                  alt={item.title || item.name || item.original_name}
                />
              </div>
              <div className="movie-title mt-2">
                {item.title || item.name || item.original_name}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Root;
