import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chapters from "./Chapters.json"
import DisplayList from "./Components/displayList";
import SelectedChapters from "./Pages/selectedChapters";
import AllChapters from "./Pages/allChapters";
import {ChapterProvider} from "./Context/chaptersContext"

function App() {

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   setData(Chapters[0])

  // }, [])

  return (
    <>
    <ChapterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/selectedChapters" element={<SelectedChapters />} />
          <Route path="/" element={<AllChapters  />} />
        </Routes>
      </BrowserRouter>
      </ChapterProvider>
    </>
  )

}

export default App;
