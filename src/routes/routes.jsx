import { createBrowserRouter } from "react-router-dom";

import Root from "root";
import TvShow from "@pages/tv/TvShow";
import Movies from "@pages/movies/Movies";
import Search from "@pages/search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/movies",
    element: <Movies />,
    children: [
      {
        path: "/movies/:movieId",
        element: <Movies />,
      },
    ],
  },
  {
    path: "/tv",
    element: <TvShow />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default router;
