import { useContext, createContext, useState } from 'react'
import Chapters from "../Chapters.json"

export const ChapterContext = createContext()

export const ChapterContextProvider = ({ children }) => {

    const [selectedChapters, setSelectedChapters] = useState([])
    const [data, setData] = useState([]);

    const backtrackDatraTree = (chapters)  => {
        chapters.forEach(chapter => {
            if()
        });
    }

    useEffect(() => {
        const auxArray = [];
        Chapters[0].map( (chapter)=>{
            auxArray
        })
    }, [])
    
    
    const addChapter = (chapter) => {
        const auxArray = [...selectedChapters];
        auxArray.push(chapter.chapterInfo.chapterId);
        setSelectedChapters(auxArray);
    }
    
}