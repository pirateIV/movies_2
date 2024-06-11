import { createBrowserRouter } from "react-router-dom";

import Root from "root";
import TV from "@pages/tv/TV";
import Movies from "@pages/movies/Movies";
import Search from "@pages/search/Search";
import NotFound from "@pages/404/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/movie",
        element: <Movies />,
        children: [
          {
            path: "/movie/:movieId",
            element: <Movies />,
          },
          {
            path: "/movie/category/popular",
            element: null,
          },
          {
            path: "/movie/category/top_rated",
            element: null,
          },
          {
            path: "/movie/category/upcoming",
            element: null,
          },
          {
            path: "/movie/category/now_playing",
            element: null,
          },
        ],
      },
      {
        path: "/tv",
        element: <TV />,
        children: [
          {
            path: "/tv/:tvId",
            element: <Movies />,
          },
          {
            path: "/tv/category/popular",
            element: null,
          },
          {
            path: "/tv/category/top_rated",
            element: null,
          },
          {
            path: "/tv/category/airing_today",
            element: null,
          },
        ],
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
