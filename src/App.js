import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chapters from "./Chapters.json"
import DisplayList from "./Components/displayList";
import SelectedChapters from "./Pages/selectedChapters";
import AllChapters from "./Pages/allChapters";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(Chapters[0])

  }, [])
  console.log(data);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/selectedChapters" element={<SelectedChapters />} />

          {/* <Route path="/" >
   
        </Route> */}
          <Route path="/" element={<AllChapters data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;
