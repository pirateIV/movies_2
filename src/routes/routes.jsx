import { createBrowserRouter } from "react-router-dom";

import Root from "root";
import TV from "@pages/tv/TV";
import Movies from "@pages/movies/Movies";
import Search from "@pages/search/Search";

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
        ],
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
