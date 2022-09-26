import { useEffect, createContext, useState } from 'react'
import Chapters from "../Chapters.json"

export const ChapterContext = createContext()

 const ChapterProvider = ({ children }) => {

    
    const [selectedChapters, setSelectedChapters] = useState([])
    const [data, setData] = useState([]);

    const backtrackDatraTreeChecks = (chapters)  => {
        chapters.forEach(chapter=> {
            if(!chapter.subchapters || chapter.subchapters.length === 0) return;
            chapter.checked = false;
            let s = chapter.subchapters;
            while (s) {
                 backtrackDatraTreeChecks(s);
                 s = s.subchapters;
            }
        });

    }

    useEffect(() => {
       backtrackDatraTreeChecks(Chapters[0]);
       setData(Chapters[0]);
        console.log(data,"sdfsds");
       
    }, [data])
    
    // const addChapter = (chapter) => {
    //     const auxArray = [...selectedChapters];
    //     auxArray.push(chapter.chapterInfo.chapterId);
    //     setSelectedChapters(auxArray);
    // }
    return (
    <ChapterContext.Provider value={{selectedChapters}}>
        {children}
    </ChapterContext.Provider>
    )
}
export { ChapterProvider}