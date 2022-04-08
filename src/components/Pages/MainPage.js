import {  useRef, useState } from "react";
import { Container} from "react-bootstrap";
import CardsContainer from "../InfoCards/CardsContainer";
import BottomBar from "../Bars/BottomBar";
import TopBar from "../Bars/TopBar";


function CharactersPage({content="people"}){
    const [currentPage, setCurrentPage] = useState(1);
    const [pageTheme, setPageTheme] = useState("sith")

    const pageRef = useRef({});
    pageRef.current = currentPage;
    
    const updatePage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <Container fluid className={`main-container-${pageTheme ==="jedi" ? "jedi" : "sith" }`}>
        <TopBar theme={pageTheme} setTheme={setPageTheme}/>
        <CardsContainer currentPage={currentPage} contentType={content} />
        <BottomBar 
          content={content} 
          currentPage={currentPage}
          updatePage={updatePage}
          theme={pageTheme}
         />
      </Container>
    );

    
}

export default CharactersPage