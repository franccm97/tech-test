import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ChapterContainer } from "./containers"

const Chapter = ({ isOpen, name, changeDropDownElement, index, isChecked  }) => {
    return (
        <ChapterContainer>
            {
                isOpen ?
                    <BsArrowDownShort onClick={() => changeDropDownElement(index)} /> :
                    <BsArrowRightShort onClick={() => changeDropDownElement(index)} />
            }
            {
                isChecked ?
                <input type={"checkbox"} checked />:
                <input type={"checkbox"}  />
            }
            <h3>{name}</h3>
        </ChapterContainer>
    )
}

export default Chapter