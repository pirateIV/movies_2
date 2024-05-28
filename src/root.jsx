import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTMDB } from "./utils/fetchTMDB";
import { getMovies } from "services/tmdbAPI";

const Root = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await getMovies("popular");
        console.log(response);
        setMovies(response.data.results);
      } catch (error) {
        console.log("Error fetching popular movies ", error);
      }
    };
    fetchPopularMovies();
  }, []);

  const { id, title, overview, original_title, vote_average } = movies[0] || {};

  return (
    <div className="min-h-screen w-full flex-1">
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
      <div
        className="popular py-5"
        style={{ background: "linear-gradient(to right, #111, 60% #000)" }}
      >
        <div className="mt-4 px-10 flex items-center justify-between">
          <h1 className="text-2xl">Popular Movies</h1>
          <Link
            to="/movie/catgory/popular"
            className="text-[#777] opacity-95 hover:text-[#40c1ad]"
          >
            Explore more
          </Link>
        </div>
        <div className="w-full overflow-y-auto px-10">
          <ul className="flex my-5 justify-between flex-shrink-0 gap-1.5">
            {movies.map((movie) => (
              <Link
                key={movie.id}
                to={`movie/${movie.id}`}
                // className="p-1"
              >
                <div className="p-1 w-40 md:w-60 bg-gray-800">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="object-cover"
                    alt={movie.title}
                  />
                </div>
                <div className="movie-title mt-2">{movie.title}</div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Root;
