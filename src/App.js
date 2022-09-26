import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Chapters from "./Chapters.json"
import ArrowDown from "./arrow-down.png"
import { ChapterContainer } from "./Components/containers"
import { SubChapterContainer } from "./Components/containers"
import { ShowChildDiv } from "./Components/containers"
import { ShowParentDiv } from "./Components/containers"
import { EmptyButton } from "./Components/containers"

function App() {


  const [chapters, setChapters] = useState([])
  const [selectedChapter, setSelectedChapter] = useState("")
  const [subChapters, setSubChapters] = useState([])



  useEffect(() => {
    Chapters.map((chaptersData) => {
      setChapters(chaptersData)
    })
    console.log(selectedChapter);
  }, [selectedChapter, chapters])

  function openChapter(e) {
    setSelectedChapter(e)
  }

  function selectedSubcharter() {

  }

  const PageContainer = styled.div`
display: flex;
flex-direction: column;
background-color: aliceblue;
height: 100%;
`

  return (
    <>
      <PageContainer>


        {
          chapters && chapters.map((chapter) => {
            // console.log(chapter);
            return (
              <>
                <br></br>
                <ChapterContainer>
                  <button onClick={() => openChapter(chapter.chapterId)}>
                    <img src={ArrowDown} style={{ width: "20px", height: "20px" }} />
                  </button>
                  <input type="checkBox"></input>
                  {
                    selectedChapter === chapter.chapterId ?
                      <>
                        <ShowParentDiv>
                          {chapter.chapterInfo.name}
                        </ShowParentDiv>
                        <ShowChildDiv>
                          <SubChapterContainer>
                            {
                              chapter.subchapters.map((subchapter) => {
                                console.log(subchapter, "sfddsd");

                                return (
                                  <>
                                    <br></br>
                                    {subchapter.chapterInfo.name}
                                    <br></br>
                                  </>
                                )
                              })
                            }
                          </SubChapterContainer>
                        </ShowChildDiv>
                      </> :
                      <>
                        {chapter.chapterInfo.name}
                      </>
                  }
                </ChapterContainer>
                <br></br>
              </>
            )
          })
        }
      </PageContainer>
    </>
  );
}

export default App;
