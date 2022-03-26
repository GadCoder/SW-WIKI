import { useState } from "react";
import { Pagination, Row } from "react-bootstrap";

function PageBar({ currentPage, updatePage }) {
  function handlePageChange() {
    return currentPage + 1 > 5 ? 5 : currentPage;
  }

  const updateCurrentPage = (pageNumber) => {
    const pageToUpdate = currentPage + pageNumber;

    if (pageToUpdate < 1 || pageToUpdate > 8) {
      return;
    }
    updatePage(pageToUpdate);
  };

  return (
    <Row>
      <Pagination
        size={"lg"}
        className="d-flex justify-content-center page-bar"
      >
        <Pagination.First onClick={() => updatePage(1)} />
        <Pagination.Prev onClick={() => updateCurrentPage(-1)} />
        <Pagination.Item onClick={() => updatePage(handlePageChange())}>
          {handlePageChange()}
        </Pagination.Item>
        <Pagination.Item onClick={() => updatePage(handlePageChange() + 1)}>
          {handlePageChange() + 1}
        </Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item onClick={() => updatePage(7)}>{7}</Pagination.Item>
        <Pagination.Item onClick={() => updatePage(8)}>{8}</Pagination.Item>
        <Pagination.Next onClick={() => updateCurrentPage(1)} />
        <Pagination.Last onClick={() => updatePage(8)} />
      </Pagination>
    </Row>
  );
}

export default PageBar;
