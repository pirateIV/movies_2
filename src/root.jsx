import { useLocation } from "react-router-dom";
import Navigation from "components/Navigation";
import MainContent from "components/MainContent";

const root = () => {
  return (
    <main className="relative">
      <Navigation />
      <MainContent />
    </main>
  );
};

export default root;
