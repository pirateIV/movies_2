import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import { getHeroMedia } from "redux/slices/mediaSlice";
import { getMediaRecommended } from "services/tmdbAPI";
import "./movies.css";
import { CastDetails, SimilarMovies, TabButtons } from ".";

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
        const results = response?.data?.results || [];
        setSimilarMovies(results);
        console.log(similarMovies);
      } catch (error) {
        console.log("Error fetching recommended movies", error);
      }
    };
    fetchSimilarMovies();
  }, [movieId]);
  console.log(similarMovies);

  return (
    <>
      <header id="tabs-header">
        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
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
        </div>
      </div>

      <div className="overview">
        <div className="media-list">
          <div className="header">
            <h1>{t("Cast")}</h1>
          </div>
          <div className="overflow-y-auto">
            <div className="flex w-max gap-2 p-2 px-10 md:px-10">
              <CastDetails mediaDetails={mediaDetails} />
            </div>
          </div>
        </div>

        {similarMovies.length > 0 && (
          <div className="media-list">
            <div className="header">
              <h1>{t("More like this")}</h1>
            </div>
            <div className="overflow-y-auto">
              <div className="flex w-max gap-2 p-2 px-10 md:px-10">
                <SimilarMovies similarMovies={similarMovies} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Movie;
