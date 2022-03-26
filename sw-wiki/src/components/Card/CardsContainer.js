import { Row, Col } from "react-bootstrap";
import Card from "./Card";

function CardsContainer({ charactersInfo }) {
  return (
    <Row>
      {charactersInfo.map((character, id) => (
        <Col md={4} key={id}>
          <Card info={character} />
        </Col>
      ))}
    </Row>
  );
}

export default CardsContainer;
