import { useContext, createContext, useState } from 'react'
import Chapters from "../Chapters.json"

export const ChapterContext = createContext()

export const ChapterContextProvider = ({ children }) => {
    const data = Chapter[0]
    const [selectedChapters, setSelectedChapters] = useState([])
    const addChapter = (chapter, isChild) => {
        if (!isChild) {
            let newArr = [...selectedChapters]
            selectedChapters.push(chapter)
            
        }
    }
}