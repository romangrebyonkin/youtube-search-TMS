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

        let start = (pageNum - 1) * pageSize

        let end = start + pageSize

        let notes = totalVideoData.slice(start, end)

        dispatch({type: CHANGE_PAGE, payload: notes})
    } 
    return (
        <div className='list_count'>
            {/* <li onClick={myCount}></li> */}
            <div className='list_item' onClick={myCount}>{value}</div>
      </div>
    )
}