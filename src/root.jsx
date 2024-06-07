import { useOutlet } from "react-router-dom";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import Container, { MainContent } from "components/Container";

const Root = () => {
  const outlet = useOutlet();

  return (
    <Container>
      <Navigation />
      {!outlet && <MainContent />}
      {outlet}
      <Footer />
    </Container>
  );
};

export default Root;
