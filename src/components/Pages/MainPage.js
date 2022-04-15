import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CardsContainer from "../InfoCards/CardsContainer";
import BottomBar from "../Bars/BottomBar";
import TopBar from "../Bars/TopBar";
import { getListOfData } from "../../api/swapi";
import SearchCardsContainer from "../InfoCards/SearchCardsContainer";
import {isMobile} from 'react-device-detect';
import LoadingPage from "./LoadingPage";

function MainPage({ content = "people" }) {
  const [listIndex, setListIndex] = useState(0);
  const [pageTheme, setPageTheme] = useState("sith");
  const [searchCards, setSearchCards] = useState(false);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [contentList, setContentList] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(12)
  const [loadingPage, setLoadingPage] = useState(true)


  const searchButtonPressed = (buttonPressed) => {
    setSearchCards(buttonPressed);
  };
  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const updatePageIndex = (index) => {
    window.scrollTo(0,0)
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
        setLoadingPage(false)
      }
    });
    return () => { infoToSet = false;};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return loadingPage ? <LoadingPage/>: 
  (
    <Container
      fluid
      className={`main-container-${pageTheme === "jedi" ? "jedi" : "sith"}`}
    >
      <TopBar
        theme={pageTheme}
        setTheme={setPageTheme}
        searchButton={searchButtonPressed}
        updateSearchTerm={updateSearchTerm}
        class
      />

      {searchCards ? (
        <SearchCardsContainer
          contentList={contentList}
          searchTerm={searchTerm}
          contentType={content}
          className="search-cards-container"
        />
      ) : (
        <div>
          <CardsContainer contentList={getInfoListSplitted()} contentType={content} />
          {!loadingPage ? (<BottomBar
            numberOfElements = {contentList.length}
            numberOfCards = {numberOfCards}
            currentPage={Math.round(listIndex/numberOfCards)+1}
            updatePage={updatePageIndex}
            theme={pageTheme}
          />) : null}
        </div>
      )}
    </Container>
  );
}

export default MainPage;
