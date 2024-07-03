import MediaItemImage from "components/media/item/MediaItemImage";
import MediaItemRating from "components/media/item/MediaItemRating";
import MediaItemTitle from "components/media/item/MediaItemTitle";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const buttonTabs = ["Overview", "Videos", "Photos"];

export const TabButtons = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();
  return buttonTabs.map((button, i) => (
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
  ));
};

export const CastDetails = ({ mediaDetails }) =>
  mediaDetails?.credits?.cast.map((c, i) => (
    <Link
      key={i}
      to={`/person/${c.id}`}
      className="block flex-1 pb-2 w-36 sm:w-44 md:w-[12.5rem]"
    >
      {c.profile_path ? (
        <MediaItemImage imagePath={c.profile_path} />
      ) : (
        <div className="media-item">
          <div className="h-full opacity-10">
            <div className="i-ph:user m-auto text-4xl"></div>
          </div>{" "}
        </div>
      )}
      <div className="mt-2">{c.name}</div>
      <div className="opacity-50">{c.character}</div>
    </Link>
  ));

export const SimilarMovies = ({ similarMovies }) =>
  similarMovies.map((similar) => (
    <Link
      key={similar.id}
      to={`/movie/${similar.id}`}
      className="block flex-1 pb-2 w-36 sm:w-44 md:w-[12.5rem]"
    >
      {similar.poster_path ? (
        <MediaItemImage imagePath={similar.poster_path} title={similar.title} />
      ) : (
        <div className="media-item">
          <div className="h-full opacity-10">
            <div className="i-ph:film-strip m-auto text-4xl"></div>
          </div>{" "}
        </div>
      )}
      <MediaItemTitle title={similar.title} />
      <MediaItemRating voteAverage={similar.vote_average} />
    </Link>
  ));
