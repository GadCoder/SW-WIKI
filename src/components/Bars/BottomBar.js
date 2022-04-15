import { useEffect, useState } from "react";
import { Pagination, Row } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";


function BottomBar({numberOfElements, numberOfCards, currentPage, updatePage, theme}) {

  const [numberOfPages, setNumberOfPages] = useState(8)
  
  useEffect( () => {
      let pageNumberToSet = true;
      if(pageNumberToSet){
        const pageNumber =  Math.ceil(numberOfElements/numberOfCards);
        setNumberOfPages(pageNumber)
      }
   
      return () => {
          pageNumberToSet = false;
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfElements])

  return (
    <Row>
      <BrowserView>
        <Pagination size={"lg"} className="page-bottom-bar">
          {[...Array(numberOfPages)].map((x, i) => (
            <Pagination.Item
              key={i}
              active={i+1 === currentPage}
              onClick={() => updatePage(i+1)}
              className={i+1 === currentPage? `pagination-item-${theme}` : null}
              
            >
              {i + 1}{" "}
            </Pagination.Item>
          ))}
        </Pagination>
      </BrowserView>
      <MobileView>
        <Pagination size={"lg"} className="page-bottom-bar">
          <Pagination.Prev onClick={() => currentPage - 1 < 1 ? updatePage(numberOfPages) : updatePage(currentPage-1)} />
          <Pagination.Next onClick={() => currentPage + 1 > numberOfPages ? updatePage(1) : updatePage(currentPage+1)} />
        </Pagination>
      </MobileView>
    </Row>
  );
}

export default BottomBar;
