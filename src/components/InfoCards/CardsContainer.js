import { Row, Col } from "react-bootstrap";
import Card from "./Card";

function CardsContainer({contentList,contentType,}) {

  return (
    <Row>
      {contentList.map((data, id) => (
        <Col xs={12} sm={6} md={4} lg={3} key={id}>
          <Card infoName = {data.name} infoURL={data.url} contentType={contentType} searched={false}/>
        </Col>
      ))}
    </Row>
  );
}

export default CardsContainer;
