import { useState } from "react";
import { Pagination, Row } from "react-bootstrap";

function PageBar({numberOfPages, updatePage }) {

  return (
    <Row>
      <Pagination
        size={"lg"}
        className="d-flex justify-content-center page-bar"
      >
      {[...Array(numberOfPages)].map((x,i) =>  
        <Pagination.Item onClick = {() => updatePage(i+1)}>{i+1} </Pagination.Item>
      )}
      </Pagination>
    </Row>
  );
}

export default PageBar;
