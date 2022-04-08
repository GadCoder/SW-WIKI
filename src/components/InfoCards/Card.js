import { Container, Row, Col } from "react-bootstrap";

function Card({ info, contentType}) {
  //const [name, height, mass, birth_year, homeworld, films] = info

  const name = info.name;
  const img_path = `./images/${contentType}/${name}.webp`;

  return (
    <Container className="card">
      <Row>
        <h3 className="card-tittle">{name}</h3>
      </Row>
      <Row>
        <Col className="img-container">
          <img src={img_path} className="img" alt={name} />
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
