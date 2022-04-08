import { useEffect, useState } from "react";
import { Pagination, Row } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";
import {getNumberOfPages} from "../../api/swapi";


function BottomBar({content, currentPage, updatePage, theme}) {

  const [numberOfPages, setNumberOfPages] = useState(8)
  
  useEffect( () => {
      let pageNumberToSet = true;
      getNumberOfPages(content).then( (info) => {
        if(pageNumberToSet){
          setNumberOfPages(info)
        }
      })
      return () => {
          pageNumberToSet = false;
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row>
      <BrowserView>
        <Pagination size={"lg"} className="page-bottom-bar">
          {[...Array(numberOfPages)].map((x, i) => (
            <Pagination.Item
              key={i}
              active={i+1 === currentPage}
              onClick={() => updatePage(i + 1)}
              className={i+1 === currentPage? `pagination-item-${theme}` : null}
              
            >
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

export default BottomBar;
