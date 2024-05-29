import { Link } from "react-router-dom";

const FeaturedMedia = ({ featured }) => {
  console.log(featured);
  return (
    <Link to={`movie/${featured?.id}`} id="featured">
      <div className="featured-container aspect-3/2 lg:aspect-25/9">
        <div className="featured-content absolute z-20 top-0 bottom-0 flex flex-col items-start justify-center ">
          <div className="absolute lg:hidden p-10 top-0 left-0">
            <button className="text-5xl text-white/50 hover:text-white">
              <div className="i-ph-play-circle-light"></div>
            </button>
          </div>

          <h1>{featured?.title}</h1>
          <p>{featured?.overview}</p>

          <button id="watch_trailer">
            <div className="i-ph-play"></div>
            Watch Trailer
          </button>
        </div>

        <div className="featured-image absolute w-full lg:w-2/3 inset-y-0 bottom-0 lg:right-0 z-10 h-2/3 lg:h-full">
          <img
            className="w-full h-full object-cover"
            // src={`https://image.tmdb.org/t/p/w1280/${featured?.backdrop_path}`}
            src={`https://image.tmdb.org/t/p/w780/${featured?.backdrop_path}`}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedMedia;
