import { css } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";
import { BeatLoader } from "react-spinners";

function LoadingPage() {
  return (
    <Container fluid className="loading-spinner-container">
      <div className="inner-spinner">
        <BeatLoader color={"#1b9afa"}size={40}/>
      </div>
    </Container>
  );
}

export default LoadingPage;
