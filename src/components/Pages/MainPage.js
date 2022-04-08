import { useState, useEffect } from "react";
import { Container} from "react-bootstrap";
import CardsContainer from "../InfoCards/CardsContainer";
import BottomBar from "../Bars/BottomBar";
import TopBar from "../Bars/TopBar";
import { getListOfData } from "../../api/swapi";
import SearchCardsContainer from "../InfoCards/SearchCardsContainer";


function MainPage({content="people"}){
    const [currentPage, setCurrentPage] = useState(1);
    const [pageTheme, setPageTheme] = useState("sith")
    const [searchCards, setSearchCards] = useState(false)
    const [searchTerm, setSearchTerm] = useState(" ")
    const [contentList, setContentList] = useState({})
   
    const updatePage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    const searchButtonPressed = (buttonPressed) => {
      setSearchCards(buttonPressed)
    }
    const updateSearchTerm = (term) => {
      setSearchTerm(term)
    }

    useEffect( () => {
      let pageNumberToSet = true;
      getListOfData(content).then( (info) => {
        if(pageNumberToSet){
          console.log(Object.keys(info).length)
          setContentList(info)
        }
      })  
      return () => {
          pageNumberToSet = false;
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
    return (
      <Container fluid className={`main-container-${pageTheme ==="jedi" ? "jedi" : "sith" }`}>
        <TopBar 
          theme={pageTheme} 
          setTheme={setPageTheme}
          searchButton={searchButtonPressed}
          updateSearchTerm={updateSearchTerm}
          />
        
        {searchCards ? (
          <SearchCardsContainer contentList={contentList} searchTerm={searchTerm} contentType={content}/>

        ) : (
          <div>
            <CardsContainer currentPage={currentPage} contentType={content} />
          <BottomBar 
          content={content} 
          currentPage={currentPage}
          updatePage={updatePage}
          theme={pageTheme}
         />
          </div>
          
        )}
       
      </Container>
    );

}

export default MainPage