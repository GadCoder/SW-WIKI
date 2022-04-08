import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function TopBar({theme, setTheme}) {
  
  const navBarTheme = theme === "jedi" ? "navbar-light bg-light" : "navbar-dark bg-dark"

  

  const handleThemeChange = () => {
    const themeChanged = theme === "jedi" ? "sith" : "jedi"
    console.log("Currente theme: " + themeChanged)
    setTheme(themeChanged)
  };


  return (
    <Navbar collapseOnSelect expand="lg" className={`page-top-bar ${navBarTheme}`}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Brand>
          <Link to="/" className={`page-tittle-${theme} page-tittle`}>
            SW-Wiki
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Ben Quadinaros"
              className="me-2"
              aria-label="Search"
            />
            <Button variant={`outline-${theme === "jedi" ? "primary" : "danger"}`}>Buscar</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Item>
              <Link to="/" className={`nav-link nav-link-${theme}`}>
                Personajes
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/planets" className={`nav-link nav-link-${theme}`}>
                Planetas
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/starships" className={`nav-link nav-link-${theme}`}>
                Naves
              </Link>
            </Nav.Item>
          </Nav>
          <Form>
            <Form.Check
              type="switch"
              id="theme-switch"
              label={theme.charAt(0).toUpperCase() + theme.slice(1)}
              className={`page-theme-switch nav-link-${theme}`}
              onChange={handleThemeChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
