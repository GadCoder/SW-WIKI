import { Row, Col } from "react-bootstrap";
import Card from "./Card";

function CardsContainer({contentList,contentType,}) {

  return (
    <Row>
      {contentList.map((data, id) => (
        <Col md={3} key={id}>
          <Card infoName = {data.name} infoURL={data.url} contentType={contentType} searched={false}/>
        </Col>
      ))}
    </Row>
  );
}

export default CardsContainer;
