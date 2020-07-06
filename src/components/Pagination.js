import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchNextPage } from '../action'
import './components.css'

export const Pagination = () => {
    const nextPage = useSelector(state => state.video.nextPage)
    // const prevPage = useSelector(state => state.video.prevPage)
    const dispatch = useDispatch()

    const put = () => {
        dispatch(fetchNextPage(nextPage))
    }

    // const back = () => {
    //     dispatch(fetchPrevVideo(prevPage))
    // }



    return (
        
        <div className='next_page_button' >
            {/* <a className='link' href='!#' onClick={back}>Prev page</a> */}
            <a className='link' href='!#' onClick={put}>Next page</a>
        </div>
    )
}