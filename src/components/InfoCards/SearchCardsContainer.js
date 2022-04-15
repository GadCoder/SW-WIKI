import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";

function SearchCardsContainer({ contentList, searchTerm, contentType, theme }) {
  const [searchFounds, setSearchFounds] = useState([]);
  const [searchExist, setSearchExists] = useState(false);


  useEffect(() => {
      const namesFounded = contentList.filter((value) => value.name.includes(searchTerm));
      setSearchExists( namesFounded.length > 0 ? true : false)
      setSearchFounds(namesFounded);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchTerm]
  );

  return (
    searchExist ? (
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
    ) :
    (
      <div className={`failed-search failed-search-${theme}`}>
        <h1> No se encontraron resultados :(</h1>
      </div>
    )
    
  );
}

export default SearchCardsContainer;
