import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getDataAPI } from "../../api/swapi";
import ReactCardFlip from "react-card-flip";

function Card({ infoName, infoURL, contentType }) {
  //const [name, height, mass, birth_year, homeworld, films] = info
  const [cardInfo, setCardInfo] = useState({});
  useEffect(() => {
    getDataAPI(infoURL).then((info) => {
      setCardInfo(info);
    });
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);
  const name = infoName;
  const img_path = `./images/${contentType}/${name}.webp`;

  const getMoviesList = (movies) => {
    const movies_arr = []
    movies.forEach(movie => {
      getDataAPI(movie).then(info => {
        movies_arr.push(info.tittle)
      })
    })
    return movies_arr.map(movie => <li>movie</li>)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Container className="card" onClick={() => setIsFlipped(!isFlipped)}>
        <Row>
          <h3 className="card-tittle" >
            {name}
          </h3>
        </Row>
        <Row>
          <Col className="img-container">
            <img src={img_path} className="img" alt={name} />
          </Col>
        </Row>
      </Container>
      <Container className="card" onClick={() => setIsFlipped(!isFlipped)}>
        <Row>
          <h3 className="card-tittle ">
            {name}
          </h3>
        </Row>
        {contentType === "people" ? (
          <ul className="card-list-info">
            <li>Altura: { `${cardInfo.height / 100}m` } </li>
            <li>Peso: {`${cardInfo.mass}kg`}</li>
            <li>Nacimiento: {cardInfo.birth_year}</li>
          </ul>
        ) : contentType === "starships" ? (
          <ul className="card-list-info">
            <li>Modelo: {cardInfo.model} </li>
            <li>Hecha por: {cardInfo.manufacturer}</li>
            <li>Costo en créditos: {cardInfo.cost_in_credits}</li>
          </ul>
        ) : (
          <ul className="card-list-info">
            <li>Clima: {cardInfo.climate} </li>
            <li>Poblacion: {cardInfo.population}</li>

          </ul>
        )}
      </Container>
    </ReactCardFlip>
  );
}

export default Card;
