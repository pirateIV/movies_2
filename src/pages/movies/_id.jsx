import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import MediaItem from "components/media/Item";
import MediaList from "components/media/List";
import MediaItemImage from "components/media/item/MediaItemImage";
import MediaItemRating from "components/media/item/MediaItemRating";
import MediaItemTitle from "components/media/item/MediaItemTitle";

import { getHeroMedia } from "redux/slices/mediaSlice";
import { getMediaRecommended } from "services/tmdbAPI";
import {
  formatDate,
  formatNumber,
  formatTime,
  numberWithCommas,
} from "utils/filters";

const buttonTabs = ["Overview", "Videos", "Photos"];

const buildURL = (imagePath, size) =>
  `https://movies-proxy.vercel.app/ipx/f_webp&s_${size}/tmdb/${imagePath}`;

const Movie = () => {
  const { t } = useTranslation();
  const { movieId } = useParams();
  const mediaDetails = useSelector(getHeroMedia);
  const [activeTab, setActiveTab] = useState(buttonTabs[0]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        const response = await getMediaRecommended("movie", movieId);
        setSimilarMovies(response?.data?.results || []);
      } catch (error) {
        console.log("Error fetching recommended movies", error);
      }
    };
    fetchSimilarMovies();
  }, [movieId]);

  console.log(mediaDetails);

  const director = mediaDetails?.credits?.crew?.filter(
    (c) => c.department === "Directing",
  );

  const _runtime = useMemo(
    () => formatTime(mediaDetails?.runtime),
    [mediaDetails?.runtime],
  );
  // const _release_date = useMemo(
  //   () => formatDate(mediaDetails?.release_date),
  //   [mediaDetails?.release_date],
  // );
  // const _budget = useMemo(
  //   () => numberWithCommas(mediaDetails?.budget),
  //   [mediaDetails?.budget],
  // );
  // const _revenue = useMemo(
  //   () => numberWithCommas(mediaDetails?.revenue),
  //   [mediaDetails?.revenue],
  // );

  const renderGenre = () =>
    mediaDetails?.genres.map((g, index) => (
      <Link
        key={index}
        to={`genre/${g.id}`}
        className="text-xs bg-gray-100 p-2"
      >
        {g.name}
      </Link>
    ));

  const renderTabs = () =>
    buttonTabs.map((button, i) => (
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

  const renderCast = () =>
    mediaDetails?.credits?.cast.map((c, i) => (
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
    ));

  const renderSimilarMovies = () =>
    similarMovies.map((similar) => (
      <div key={similar.id}>
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
    ));

  return (
    <>
      <header className="flex items-center justify-center gap-8 py-6 *:uppercase">
        {renderTabs()}
      </header>

      <div className="p-4 grid grid-cols-[auto,auto] place-items-center m-auto gap-8 max-w-[75rem]">
        <img
          width="400"
          height="600"
          className="hidden md:block w-[19.75rem] aspect-[10/16] border-4 border-gray-100/10 object-cover h-full"
          src={buildURL(mediaDetails?.poster_path, "400x600")}
          srcSet={`${buildURL(mediaDetails?.poster_path, "400x600")} 1x,
           ${buildURL(mediaDetails?.poster_path, "800x1200")} 2x`}
          alt={`movie title: ${mediaDetails?.title}`}
          loading="lazy"
        />

        <div className="flex flex-col gap-6 px-6">
          <div>
            <h2 className="text-3xl mb-4">Storyline</h2>
            <div className="opacity-80">{mediaDetails?.overview}</div>
          </div>
          <div className="text-sm opacity-80">
            {/* <div>Released</div>
            <div>{_release_date}</div>

            <div>Runtime</div>
            <div>{_runtime}</div>

            <div>Director</div>

            <div>Budget</div>
            <div>${_budget}</div>

            <div>Revenue</div>
            <div>${_revenue}</div>

            <div>Genre</div> */}
            {/* <div>{renderGenre()}</div> */}
          </div>
        </div>
      </div>

      <div className="overview">
        <div className="media-list">
          <div className="header">
            <h1>{t("Cast")}</h1>
          </div>
          <div className="overflow-y-auto">
            <div className="flex w-max gap-2 p-2 px-10 md:px-10">
              {renderCast()}
            </div>
          </div>
        </div>

        <div className="media-list">
          <div className="header">
            <h1>{t("More like this")}</h1>
          </div>
          <div className="overflow-y-auto">
            <div className="flex w-max gap-2 p-2 px-10 md:px-10">
              {renderSimilarMovies()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
