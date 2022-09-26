import React, { useState, useEffect, useContext } from 'react'
import { ChapterContext } from '../Context/chaptersContext';
import Chapter from './chapterContainer';



const DisplayList = ({ data, isChapterSelected }) => {

  const { changeCheckBackTrack } = useContext(ChapterContext)
  const [dropDown, setDropDown] = useState([])


  useEffect(() => {
    const auxArray = [];
    data.map(() => {
      auxArray.push(false)
    });
    setDropDown(auxArray);
  }, [])

  const changeDropDownElement = index => {
    const auxArray = [...dropDown];
    auxArray[index] = !auxArray[index];
    setDropDown(auxArray);

  }



  return (
    <>
      {
        data.map((chapter, index) => {
          if ((isChapterSelected && chapter.checked) || !isChapterSelected) {
          return (
            <>

              <Chapter
                isOpen={dropDown[index]}
                name={chapter.chapterInfo.name}
                changeDropDownElement={changeDropDownElement}
                index={index}
                id={chapter.chapterId}
                handleCheckChapter={changeCheckBackTrack}
                isChapterSelected={isChapterSelected}
                value = {chapter.checked}
              />
              {
                dropDown[index] && chapter.subchapters &&
                <DisplayList data={chapter.subchapters} isChapterSelected={isChapterSelected} />
              }


            </>
          ) 
            }
        })

      }

    </>
  )
}

export default DisplayList