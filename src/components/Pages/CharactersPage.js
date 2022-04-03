import { useEffect, useRef, useState } from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import {Link} from "react-router-dom"
import CardsContainer from "../InfoCards/CardsContainer";
import {getNumberOfPages} from "../../api/swapi";
import BottomBar from "../Bars/BottomBar";
import TopBar from "../Bars/TopBar";


function CharactersPage(){
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(8)
    const pageRef = useRef({});
    pageRef.current = currentPage;
  
    useEffect( () => {
        let pageNumberToSet = true;
        getNumberOfPages("people").then( (info) => {
          if(pageNumberToSet){
            setNumberOfPages(info)
          }
        })
        return () => {
            pageNumberToSet = false;
        }
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
        <CardsContainer currentPage={currentPage} contentType={"people"} />
        <BottomBar numberOfPages={numberOfPages} currentPage={currentPage} updatePage={updatePage}></BottomBar>
      </Container>
    );

    
}

export default CharactersPage