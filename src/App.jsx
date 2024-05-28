import { useRoutes } from "react-router-dom";

import routes from "routes/routes";
import SidebarNav from "components/SidebarNav";
import Container, { MainContent } from "components/Container";

const App = () => {
  const element = useRoutes(routes);

  return (
    <Container>
      <SidebarNav />
      <MainContent>{element}</MainContent>
    </Container>
  );
};

export default App;
