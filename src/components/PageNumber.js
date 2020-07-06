import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


export const PageNum = ({value}) => {
    const pageSize = 3
    const totalVideoData = useSelector(state => state.video.likes)
    const a = {value}
    console.log(a)
    return(
        <div>
            <li onClick={() => {
                let pageNum = a.value
                console.log(pageNum)
                let start = (pageNum - 1) * pageSize
                let end = start + pageSize

                let notes = totalVideoData.slice(start, end)
                console.log(notes)
            }}>{value}</li>
        </div>        
    )
}