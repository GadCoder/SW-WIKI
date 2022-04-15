import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CardsContainer from "../InfoCards/CardsContainer";
import BottomBar from "../Bars/BottomBar";
import TopBar from "../Bars/TopBar";
import { getListOfData } from "../../api/swapi";
import SearchCardsContainer from "../InfoCards/SearchCardsContainer";
import {isMobile} from 'react-device-detect';

function MainPage({ content = "people" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [listIndex, setListIndex] = useState(0);
  const [pageTheme, setPageTheme] = useState("sith");
  const [searchCards, setSearchCards] = useState(false);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [contentList, setContentList] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(12)


  const updatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const searchButtonPressed = (buttonPressed) => {
    setSearchCards(buttonPressed);
  };
  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const updatePageIndex = (index) => {
    setListIndex((index-1)*numberOfCards)
  }
  const getInfoListSplitted = () => {
    const listSize = contentList.length;
    return contentList.slice(listIndex, listIndex + numberOfCards > listSize ? listSize : listIndex + numberOfCards )
  }
 
  useEffect(() => {
    let infoToSet = true;
    getListOfData(content).then((info) => {
      if (infoToSet) {
        setNumberOfCards(isMobile ? 6 : numberOfCards )
        setContentList(info);
      }
    });
    return () => { infoToSet = false;};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Container
      fluid
      className={`main-container-${pageTheme === "jedi" ? "jedi" : "sith"}`}
    >
      <TopBar
        theme={pageTheme}
        setTheme={setPageTheme}
        searchButton={searchButtonPressed}
        updateSearchTerm={updateSearchTerm}
      />

      {searchCards ? (
        <SearchCardsContainer
          contentList={contentList}
          searchTerm={searchTerm}
          contentType={content}
        />
      ) : (
        <div>
          <CardsContainer contentList={getInfoListSplitted()} contentType={content} />
          <BottomBar
            numberOfElements = {contentList.length}
            numberOfCards = {numberOfCards}
            currentPage={Math.round(listIndex/numberOfCards)+1}
            updatePage={updatePageIndex}
            theme={pageTheme}
          />
        </div>
      )}
    </Container>
  );
}

export default MainPage;
