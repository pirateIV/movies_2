import { Link } from "react-router-dom";

const FeaturedMedia = ({ featured }) => {
  console.log(featured);
  return (
    <Link to={`movie/${featured?.id}`} className="h-full" id="featured">
      <div className="featured-container sm:min-h-[400px]">
        {/* <div>
          <button>
            <div className="i-ph-play-circle-light"></div>
          </button>
        </div> */}

        <div className="featured-content absolute z-20 top-0 bottom-0 flex flex-col items-start justify-center ">
          <h1>{featured?.title}</h1>
          <p>{featured?.overview}</p>
          <button>
            <div className="i-ph-play"></div>
            Watch Trailer
          </button>
        </div>
        <div className="featured-image static lg:absolute w-full lg:w-2/3 inset-y-0 bottom-0 lg:right-0 z-10 lg:h-full">
          <img
            className="h-auto lg:h-full w-full object-cover"
            src={`https://image.tmdb.org/t/p/w780/${featured?.backdrop_path}`}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedMedia;
