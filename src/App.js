import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Chapters from "./Chapters.json"
import { ChapterContainer } from "./Components/containers"

function App() {


  const [chapters, setChapters] = useState([])
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [selectedSubChapters, setSelectedSubChapters] = useState(null)



  useEffect(() => {
    Chapters.map((chapters) => {
      setChapters(chapters)
    })
    // chapters?.subchapters.map((subchapter) => {
    //   setSelectedSubChapters(subchapter)
    // })

  }, [selectedChapter, selectedSubChapters])


  function handleChapter(e) {
    setSelectedChapter(e)
  }

  return (
    <>
      {
        chapters && chapters.map((chapter, index) => {
          console.log(chapter.subchapters,"im this one");
          return <>
            <div onClick={() => handleChapter(chapter.chapterInfo.name)}>
              {
                <>
                  {chapter.chapterInfo.name === selectedChapter ?
                    <div>
                      <h3>
                        {chapter.chapterInfo.name}
                      </h3>
                      {/* {
                        chapter.subchapters.map((subchapter) => {
                          return (

                            console.log(subchapter)
                          )
                        })
                      } */}
                    </div>
                    : <h3>
                      {chapter.chapterInfo.name}
                    </h3>}
                </>
              }

            </div>
          </>
        })
      }
    </>
  );
}

export default App;
