import { Nav, Row, Col } from "react-bootstrap"


function NavigationBar(){
    return (
        <Row>
            <Col md={4}>
            <h3>Página: 1/8</h3>
            </Col>
            <Col md={8}>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Personajes</Nav.Link>

                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/planetas">Planetas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="Naves">Naves</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            
        </Row>
    )
}

export default NavigationBar