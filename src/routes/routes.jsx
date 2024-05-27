import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Movies from "@pages/movies/Movies";
import Search from "@pages/search/Search";
import TvShow from "@pages/tv/TvShow";
import Root from "root";

const routes = [
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tv",
    element: <TvShow />,
  },
  {
    path: "/search",
    element: <Search />,
  },
];

export default routes;
