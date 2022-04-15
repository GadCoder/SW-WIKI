import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";
import InfoPage from "./components/Pages/InfoPage";

function App() {
  return ( 

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage content="people" key={"people"} />}>
          <Route index element={<MainPage content="people" key={"people"}/>} />
        </Route>
        <Route path="people" element={<MainPage content="people" key={"people"}/>} />
        <Route path="starships" element={<MainPage content="starships" key={"starships"}/>} />
        <Route path="planets" element={<MainPage content="planets" key={"planets"}/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
