import { Pagination, Row } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";

function PageBar({ numberOfPages, currentPage,  updatePage }) {


  return (
    <Row>
      <BrowserView>
        <Pagination size={"lg"} className="page-bottom-bar">
          {[...Array(numberOfPages)].map((x, i) => (
            <Pagination.Item onClick={() => updatePage(i + 1)} key={i}>
              {i + 1}{" "}
            </Pagination.Item>
          ))}
        </Pagination>
      </BrowserView>
      <MobileView>
        <Pagination size={"lg"} className="page-bottom-bar">
          <Pagination.Prev onClick={() => currentPage - 1 < 1 ? null : updatePage(currentPage-1)} />
          <Pagination.Next onClick={() => currentPage + 1 > numberOfPages ? null : updatePage(currentPage+1)} />
        </Pagination>
      </MobileView>
    </Row>
  );
}

export default PageBar;
