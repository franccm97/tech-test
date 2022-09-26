import React, { useState, useEffect } from 'react'
import Chapter from './chapterContainer';



const DisplayList = ({ data}) => {

  const [dropDown, setDropDown] = useState([])
  const [checked, setChecked] = useState(false)

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

  // const handleCheckChapter = () => {
  //   setChecked(!checked);
  // }




  return (
    <>
      {
        data.map((chapter, index) => {
          console.log(chapter.subchapters);
          return (
            <>

              <Chapter
                isOpen={dropDown[index]}
                name={chapter.chapterInfo.name}
                changeDropDownElement={changeDropDownElement}
                index={index} 
                />
                

              {
                dropDown[index] &&
                <DisplayList data={chapter.subchapters}  />
              }


            </>
          )
        })

      }

    </>
  )
}

export default DisplayList