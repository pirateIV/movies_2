import { Router, useRoutes } from "react-router-dom";

import Root from "root";
import Movies from "@pages/movies/Movies";
import Search from "@pages/search/Search";
import TvShow from "@pages/tv/TvShow";
import SidebarNav from "components/SidebarNav";
import routes from "@routes/routes";

const App = () => {
  const element = useRoutes(routes);

  return (
    <div>
      <div className="relative min-h-screen w-full flex flex-col lg:flex-row items-center">
        <SidebarNav />
        <div className="min-h-screen order-1 lg:order-2 w-full">
          {element}
        </div>
      </div>
    </div>
  );
};

export default App;
