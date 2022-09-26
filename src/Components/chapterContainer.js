import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { ChapterContainer } from "./containers"

const Chapter = ({ isOpen, name, changeDropDownElement, index, handleCheckChapter, id, isChapterSelected, value }) => {
    
    return (

        <ChapterContainer>
            {

                isOpen ?
                    <BsArrowDownShort onClick={() => changeDropDownElement(index)} /> :
                    <BsArrowRightShort onClick={() => changeDropDownElement(index)} />

            }
            {
                !isChapterSelected &&
                <input type={"checkbox"} onClick={() => handleCheckChapter(id)} value={value} />
            }

            <h3>{name}</h3>
        </ChapterContainer>
    )
}

export default Chapter