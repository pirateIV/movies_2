import Media from "./Media";
import FeaturedMedia from "./FeaturedMedia";

const Container = ({ children }) => {
  return (
    <div className="relative w-full flex flex-col pb-[70px] lg:pb-0 items-end justify-end overflow-hidden">
      {children}
    </div>
  );
};

export const MainContent = ({ featured, movies, tvShows }) => {
  return (
    <div className="min-h-screen w-full lg:max-w-[calc(100%-70px)]">
      <div className="min-h-screen">
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
    </div>
  );
};
export default Container;
