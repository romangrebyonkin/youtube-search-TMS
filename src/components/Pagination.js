import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { CHANGE_PAGE } from '../action/types'
import './components.css'

export const Pagination = ({value}) => {
    const totalVideoData = useSelector(state => state.video.likes)
    const a = {value}

    const dispatch = useDispatch()

    const pageSize = 4

    const myCount = () => {
        let pageNum = a.value
        console.log(pageNum)
        let start = (pageNum - 1) * pageSize
        let end = start + pageSize

        let notes = totalVideoData.slice(start, end)
        console.log(notes)
        dispatch({type: CHANGE_PAGE, payload: notes})
    } 
    return (
        <div className='list_count'>
            <li onClick={myCount}>{value}</li>
      </div>
    )
}