import { useEffect, createContext, useState } from 'react'
import Chapters from "../Chapters.json"

export const ChapterContext = createContext()

 const ChapterProvider = ({ children }) => {

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
        if(data.length === 0) {
            backtrackDatraTreeChecks(Chapters[0]);
            setData(Chapters[0]);
        }
        console.log(data,"sdfsds");
       
    }, [data])
    
    const changeCheckBackTrack = (id) => {
        console.log(id,"id");
        let auxData = [...data]
        const backtrack = (chapters) => {
            chapters.map(chapter=> {
                console.log(chapter.chapterId,"id2")
                if(!chapter.subchapters || chapter.subchapters.length === 0) return;
                if(chapter.chapterId === id) chapter.checked = !chapter.checked;
                let s = chapter.subchapters;
                while (s) {
                    backtrack(s);
                    s = s.subchapters;
                }
            })
        }
        backtrack(auxData);
        setData(auxData);
    }
    
    return (
    <ChapterContext.Provider value={{data, changeCheckBackTrack}}>
        {children}
    </ChapterContext.Provider>
    )
}
export { ChapterProvider}