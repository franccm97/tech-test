import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Chapters from "./Chapters.json"
import { ChapterContainer } from "./Components/containers"

function App() {


  const [chapters, setChapters] = useState([])
  const [chapter, setChapter] = useState({})




  useEffect(() => {
    Chapters.map((chaptersData) => {
      setChapters(chaptersData)
    })
    // chapters?.subchapters.map((subchapter) => {
    //   setSelectedSubChapters(subchapter)
    // })
    console.log(chapters);
    console.log(chapter);
    // console.log(subChapters);

  }, [chapter,chapters])



  return (
    <>
     
      {
        chapters&&chapters.map((chapter)=>{
return(
  <>
  <br></br>
  <div onClick={()=>console.log("hola")}>
{
  <>

{chapter.chapterId}
  </>
}
  </div>
  <br></br>
  </>
)
        })
      }
    </>
  );
}

export default App;
