import { useEffect, useRef, useState } from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import CardsContainer from "../InfoCards/CardsContainer";
import {getNumberOfPages} from "../../api/swapi";
import PageBar from "../Bars/PageBar";
import NavigationBar from "../Bars/NavigationBar";


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
            console.log("Number of pages: " + numberOfPages)
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
      <Container>
        <Navbar className="nav-bar">
          <Container>
            <Navbar.Brand href="#"> SW-Wiki</Navbar.Brand>
            <Form>
              <Form.Check type="switch" id="theme-switch" label="Jedi" />
            </Form>
          </Container>
        </Navbar>
        <NavigationBar
            currentPage={currentPage}
            numberOfPages={numberOfPages}>
        </NavigationBar>
        <CardsContainer currentPage={currentPage} contentType={"people"} />
        <PageBar numberOfPages={numberOfPages} updatePage={updatePage}></PageBar>
      </Container>
    );

    
}

export default CharactersPage