import { Nav, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"

function NavigationBar({ currentPage = 1, numberOfPages = 8 }) {
  return (
    <Row>
      <Col md={4}>
        <h3>
          Página: {currentPage}/{numberOfPages}
        </h3>
      </Col>
      <Col md={8}>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
              <Link to="/" className="nav-link">Personajes</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/planets" className="nav-link">Planetas</Link>
          </Nav.Item>
          <Nav.Item>
              <Link to="/starships" className="nav-link">Naves</Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
}

export default NavigationBar;
