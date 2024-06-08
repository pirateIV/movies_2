// import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import HeroMedia from "./media/HeroMedia";
// import MediaContainer from "./MediaContainer";
// import { getMedia, listMedia } from "services/tmdbAPI";

// const Container = ({ children }) => {
//   return (
//     <div className="relative w-full flex flex-col pb-[70px] lg:pb-0 items-end justify-end overflow-hidden">
//       {children}
//     </div>
//   );
// };

// export const MainContent = ({ movies, tvShows }) => {
//   const { t } = useTranslation();

//   return (
//     <div className="min-h-screen w-full lg:max-w-[calc(100%-70px)]">
//       <div className="min-h-screen">
//         <MediaContainer
//           items={movies}
//           itemType="movie"
//           title={t("Popular Movies")}
//           exploreLink="/movie/category/popular"
//         />

//         <MediaContainer
//           items={tvShows}
//           itemType="tv"
//           title={t("Popular TV Shows")}
//           exploreLink="/tv/category/popular"
//         />
//       </div>
//     </div>
//   );
// };
// export default Container;
