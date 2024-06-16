import MediaItem from "components/media/Item";
import MediaList from "components/media/List";
import MediaItemImage from "components/media/item/MediaItemImage";
import MediaItemRating from "components/media/item/MediaItemRating";
import MediaItemTitle from "components/media/item/MediaItemTitle";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getHeroMedia } from "redux/slices/mediaSlice";
import { getMediaRecommended } from "services/tmdbAPI";
import { twMerge } from "tailwind-merge";

const buttonTabs = ["Overview", "Videos", "Photos"];

const Movie = () => {
  const { t } = useTranslation();
  const { movieId } = useParams();
  const mediaDetails = useSelector(getHeroMedia);
  const [activeTab, setActiveTab] = useState(buttonTabs[0]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getSimilarMovies = async () => {
      const response = await getMediaRecommended("movie", movieId);
      setSimilarMovies(response?.data?.results);
    };
    getSimilarMovies();
  }, []);

  return (
    <>
      <header className="flex items-center justify-center gap-8 py-6 *:uppercase">
        {buttonTabs.map((button, i) => (
          <button
            key={i}
            className={twMerge(
              "text-xl",
              activeTab === button ? "n-tab n-tab-active" : "n-tab",
            )}
            onClick={() => setActiveTab(button)}
          >
            {t(button)}
          </button>
        ))}
      </header>

      <div className="p-4 grid grid-cols-2 gap-8 max-w-[75rem]">
        <MediaItemImage
          className="w-[19.75rem] hidden border-4 border-gray-400/5 md:block !aspect-[10/16] *:h-full"
          imagePath={mediaDetails?.poster_path}
          title={mediaDetails?.name || mediaDetails?.title}
        />

        <div>
          <h2 className="text-3xl mb-4">Storyline</h2>
          <div className="opacity-80">{mediaDetails?.overview}</div>
        </div>

        <div className="text-sm opacity-80"></div>
      </div>

      <div className="overview">
        <div className="media-list">
          <div className="header">
            <h1>{t("Cast")}</h1>
          </div>
          <div className="overflow-y-auto">
            <div className="flex w-max gap-2 p-2 px-10 md:px-10">
              {mediaDetails?.credits?.cast.map((c, i) => (
                <div key={i}>
                  <Link to={`/person/${c.id}`} className="flex-1">
                    {c.profile_path ? (
                      <MediaItemImage
                        imagePath={c.profile_path}
                        className="block w-[12.5rem] *:h-full"
                      />
                    ) : (
                      <div className="media-item block w-[12.5rem]">
                        <div className="h-full opacity-10">
                          <div className="i-ph:user m-auto text-4xl"></div>
                        </div>
                      </div>
                    )}
                  </Link>
                  <div className="mt-2">{c.name}</div>
                  <div className="opacity-50">{c.character}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="media-list">
          <div className="header">
            <h1>More like this</h1>
          </div>

          <div className="overflow-y-auto">
            <div className="flex w-max gap-2 p-2 px-10 md:px-10">
              {similarMovies.map((similar) => (
                <div>
                  <Link to={`/movie/${similar.id}`} className="flex-1">
                    <MediaItemImage
                      className="block w-[12.5rem] *:h-full"
                      imagePath={similar.poster_path}
                      title={similar.title}
                    />
                  </Link>
                  <MediaItemTitle title={similar.title} />
                  <MediaItemRating voteAverage={similar.vote_average} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;