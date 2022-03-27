import { useEffect, useState } from "react";
import { Pagination, Row } from "react-bootstrap";

function PageBar({ currentPage, numberOfPages, updatePage }) {

  const [pageNumber, setPageNumber] = useState(numberOfPages)

  function handlePageChange() {
    return currentPage + 1 > pageNumber-1 ? (numberOfPages/2 + 1) : currentPage;
  }

  const updateCurrentPage = (pageNumber) => {
    const pageToUpdate = currentPage + pageNumber;
    if (pageToUpdate < 1 || pageToUpdate > numberOfPages) {
      return;
    }
    updatePage(pageToUpdate);
  };

  const createPaginationItems = () => {
    for(let i = 0; i < numberOfPages; i++){
      const index = i +1 ;
      return (
        <Pagination.Item onClick = {() => updatePage(index)}>{index} </Pagination.Item>
      )
    }
  }
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
