import React from 'react'
import DisplayList from '../Components/displayList'
import { EmptyButton } from '../Components/containers'
import { Link } from 'react-router-dom'


const AllChapters = ({ data }) => {

    return (
        <>
            {
                data.length > 0 &&
                <DisplayList data={data} />
            }
            <Link to={"/selectedChapters"} target={"_blank"} style={{ textDecoration: "none", color: "black" }}>
                <EmptyButton>
                    Select Chapters!
                </EmptyButton>
            </Link>

        </>
    )
}

export default AllChapters