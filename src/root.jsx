import Navigation from "components/Navigation";
import MainContent from "components/MainContent";

const root = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <Navigation />
        <MainContent />
      </div>
    </>
  );
};

export default root;
