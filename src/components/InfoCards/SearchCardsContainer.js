
import { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";
import Card from "./Card";


function SearchCardsContainer({contentList, searchTerm, contentType}) {
    const [searchFounds, setSearchFounds] = useState([])
    const [contentValues, setContentValues] = useState(Object.keys(contentList))

    useEffect(()=>{
        const namesFounded = contentValues.filter(value => value.includes(searchTerm))
        setSearchFounds(namesFounded)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchTerm])

  
  return (
    <Row>
      {searchFounds.map((character, id) => (
        <Col md={3} key={id}>
            {console.log(character)}
          <Card info={character} contentType={contentType}/>
        </Col>
      ))}
    </Row>
  );
}

export default SearchCardsContainer;