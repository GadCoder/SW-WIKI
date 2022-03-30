import { Container, Row, Col } from "react-bootstrap";

function Card({ info, contentType }) {
  //const [name, height, mass, birth_year, homeworld, films] = info

  const img_path = `./images/${contentType}/${info.name}.jpeg`;
  const name = info.name
  return (
    <Container className="card">
      <Row>
        <h1 className="card-tittle">{name}</h1>
      </Row>
      <Row >
          <Col className="img-container">
                <img src={img_path} className="img" alt={name} />
          </Col>
      </Row>
    </Container>
  );
}

export default Card;
