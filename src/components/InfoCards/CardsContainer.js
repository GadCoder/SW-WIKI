import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import {getDataAPI} from "../../api/swapi";
import Card from "./Card";



function CardsContainer({currentPage,contentType}) {
  const [charactersInfo, setCharactersInfo] = useState([]);

  useEffect(() => {
    getDataAPI(contentType,currentPage).then((info) =>
    setCharactersInfo(info)
  );
  }, [currentPage]);

  return (
    <Row>
      {charactersInfo.map((character, id) => (
        <Col md={3} key={id}>
          <Card info={character} contentType={contentType}/>
        </Col>
      ))}
    </Row>
  );
}

export default CardsContainer;
