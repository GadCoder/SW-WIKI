import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersPage from "./components/Pages/CharactersPage";
import PlanetsPage from "./components/Pages/PlanetsPage";
import StarshipsPage from "./components/Pages/StarshipsPage";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<CharactersPage/>}/>
        <Route path="/planets"element = {<PlanetsPage/>} />
        <Route path="/starships"element = {<StarshipsPage/>} />
       </Routes>
    </BrowserRouter>
  )

}

export default App;
