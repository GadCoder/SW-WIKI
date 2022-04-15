import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";

function SearchCardsContainer({ contentList, searchTerm, contentType }) {
  const [searchFounds, setSearchFounds] = useState([]);


  useEffect(
    () => {
      const namesFounded = contentList.filter((value) => value.name.includes(searchTerm));
      setSearchFounds(namesFounded);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchTerm]
  );

  return (
    <Row>
      {searchFounds.map((data, id) => (
        <Col md={3} key={id}>
          <Card
            infoName={data.name}
            infoURL={data.url}
            contentType={contentType}
            searched={false}
          />
        </Col>
      ))}
    </Row>
  );
}

export default SearchCardsContainer;
