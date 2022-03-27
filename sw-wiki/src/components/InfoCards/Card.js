import {Container, Row} from "react-bootstrap";
import {  useState } from "react"

function Card({info}){
    //const [name, height, mass, birth_year, homeworld, films] = info
    
    return (
        <Container className="card">
            <Row>
                <h1>{info.name}</h1>
            </Row>
            <Row>
                <p> Descripcioon owo</p>
            </Row>
        </Container>
    )
}

export default Card
