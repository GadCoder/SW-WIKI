import { useEffect, useRef, useState } from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import CardsContainer from "./components/Card/CardsContainer";
import getDataAPI from "./api/swapi";
import PageBar from "./components/Bars/PageBar";
import NavigationBar from "./components/Bars/NavigationBar";

function App() {
  const [charactersInfo, setCharactersInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageRef = useRef({});
  pageRef.current = currentPage;

  useEffect(() => {
    console.log(`"Updating page with index: "${pageRef.current}`);
    getDataAPI(pageRef.current).then((info) => setCharactersInfo(info.results));
  }, [currentPage]);

  const updatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand href="#"> SW-Wiki</Navbar.Brand>
          <Form>
            <Form.Check type="switch" id="theme-switch" label="Jedi" />
          </Form>
        </Container>
      </Navbar>
      <NavigationBar></NavigationBar>
      <CardsContainer charactersInfo={charactersInfo} />
      <PageBar currentPage={currentPage} updatePage={updatePage}></PageBar>
    </Container>
  );
}

export default App;
