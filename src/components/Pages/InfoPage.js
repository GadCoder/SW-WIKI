import { Container, Row, Col, ListGroup } from "react-bootstrap";
function InfoPage() {
  const img_path = `./images/people/Ben Quadinaros.webp`;

  return (
    <Container>
      <Row>
        <Col md={4} className="test-img">
            <img src={img_path} className="img" alt={"Ben Quadinaros"} />
        </Col>
        <Col md={8}>
          <Row>
            <h1>Nombre</h1>
          </Row>
          <Row>
            <ul>
              <li>Altura: </li>
              <li>Peso: </li>
              <li>Nacimiento: </li>
              <li>Planeta: </li>
            </ul>
          </Row>
          <Row>
            <h1>Películas</h1>
            <ul>
              <li>Altura: </li>
              <li>Peso: </li>
              <li>Nacimiento: </li>
              <li>Planeta: </li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoPage;
