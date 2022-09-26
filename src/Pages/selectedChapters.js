import React, { useState, useEffect, useContext } from 'react'
import { ChapterContext } from '../Context/chaptersContext';
import DisplayList from '../Components/displayList';



const SelectedChapters = () => {

  const { data } = useContext(ChapterContext)
  console.log(data, "data context in all");

  return (
    <>

      {data.length > 0 &&
        <DisplayList data={data} isChapterSelected={true} />
      }

    </>
  )
}

export default SelectedChapters