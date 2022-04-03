import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar({ currentPage = 1, numberOfPages = 8 }) {
  return (
    <Navbar bg="light" collapseOnSelect expand="lg" className="page-top-bar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Brand>
            <Link to="/" className="page-tittle">
              SW-Wiki
            </Link>
          </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">
                Personajes
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/planets" className="nav-link">
                Planetas
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/starships" className="nav-link">
                Naves
              </Link>
            </Nav.Item>
          </Nav>
          <Form>
              <Form.Check type="switch" id="theme-switch" label="Jedi" className = "page-theme-switch"/>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
