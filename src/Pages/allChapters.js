import {useContext} from 'react'
import DisplayList from '../Components/displayList'
import { EmptyButton } from '../Components/containers'
import { Link } from 'react-router-dom'
import { ChapterContext } from '../Context/chaptersContext';


const AllChapters = () => {
    const { data } = useContext(ChapterContext)
    return (
        <>
            {
                data.length > 0 &&
                <DisplayList data={data} />
            }
            <Link to={"/selectedChapters"}  style={{ textDecoration: "none", color: "black" }}>
                <EmptyButton>
                    Select Chapters!
                </EmptyButton>
            </Link>

        </>
    )
}

export default AllChapters