import { useEffect, useRef, useState } from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import CardsContainer from "../InfoCards/CardsContainer";
import {Link} from "react-router-dom"

import { getNumberOfPages } from "../../api/swapi";
import BottomBar from "../Bars/BottomBar";
import TopBar from "../Bars/TopBar";

function PlanetsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(8);
  const pageRef = useRef({});
  pageRef.current = currentPage;

  useEffect(() => {
    let pageNumberToSet = true;
    getNumberOfPages("planets").then((info) => {
      if (pageNumberToSet) {
        setNumberOfPages(info);
        console.log("Number of pages in page: " + info);
      }
    });
    return () => {
      pageNumberToSet = false;
    };
  }, []);

  const updatePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>

      <TopBar
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      ></TopBar>
      <CardsContainer currentPage={currentPage} contentType={"planets"} />
      <BottomBar
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        updatePage={updatePage}
      ></BottomBar>
    </Container>
  );
}

export default PlanetsPage;
