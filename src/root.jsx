import Navigation from "components/Navigation";
import MainContent from "components/MainContent";

const root = () => {
  return (
    <>
      <div className="relative">
        <Navigation />
        <MainContent />
      </div>
    </>
  );
};

export default root;
