import React, { useState, useEffect } from 'react'
import Chapter from './chapterContainer';



const DisplayList = ({ data }) => {

  const [dropDown, setDropDown] = useState([])
  const [checked, setChecked] = useState([])

  useEffect(() => {
    const auxArray = [];
    data.map(() => {
      auxArray.push(false)
    });
    setDropDown(auxArray);
    setChecked(auxArray);

  }, [])

  const changeDropDownElement = index => {
    const auxArray = [...dropDown];
    auxArray[index] = !auxArray[index];
    setDropDown(auxArray);

  }

  const handleCheckChapter = (index) => {
    const auxArray = [...checked];
    auxArray[index] = !auxArray[index];
    setChecked(auxArray);
  }

  return (
    <>
      {
        data.map((chapter, index) => {

          return (
            <>

              <Chapter
                isOpen={dropDown[index]}
                name={chapter.chapterInfo.name}
                changeDropDownElement={changeDropDownElement}
                index={index}
                handleCheckChapter={handleCheckChapter}
                chapter = {chapter}
              />
              {
                dropDown[index] && chapter.subchapters &&
                <DisplayList data={chapter.subchapters} />
              }


            </>
          )
        })

      }

    </>
  )
}

export default DisplayList