import { useEffect, useRef, useState } from "react";
import { Container} from "react-bootstrap";
import {getNumberOfPages} from "../../api/swapi";
import CardsContainer from "../InfoCards/CardsContainer";
import BottomBar from "../Bars/BottomBar";
import TopBar from "../Bars/TopBar";


function CharactersPage({content="people"}){
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(8)
    const pageRef = useRef({});
    pageRef.current = currentPage;
  
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


    const updatePage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <Container fluid>
        <TopBar
            currentPage={currentPage}
            numberOfPages={numberOfPages}>
        </TopBar>
        <CardsContainer currentPage={currentPage} contentType={content} />
        <BottomBar numberOfPages={numberOfPages} currentPage={currentPage} updatePage={updatePage}></BottomBar>
      </Container>
    );

    
}

export default CharactersPage