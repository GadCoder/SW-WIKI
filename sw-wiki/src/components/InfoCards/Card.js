import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function Card({ info, contentType }) {
  //const [name, height, mass, birth_year, homeworld, films] = info

  const img_path = `./${contentType}/${info.name}.jpeg`;
  return (
    <Container className="card">
      <Row>
        <h1 className="card-tittle">{info.name}</h1>
      </Row>
      <Row >
          <Col className="img-container">
                <img src={img_path} className="img" />
          </Col>
      </Row>
    </Container>
  );
}

export default Card;
