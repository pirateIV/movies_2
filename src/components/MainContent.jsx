import Footer from "components/Footer";
import HeroMedia from "components/media/HeroMedia";
import { Outlet, useLocation } from "react-router-dom";

const MainContent = () => {
  const location = useLocation();

  const shouldShowComponent = (component) =>
    !location.pathname.includes("search") && component;

  return (
    <div className="container">
      {shouldShowComponent(<HeroMedia />)}
      <Outlet />
      {shouldShowComponent(<Footer />)}
    </div>
  );
};

export default MainContent;
