import axios from 'axios';
import {SEARCH_VIDEO, FETCH_VIDEO_ID, FETCH_NEXT_PAGE } from './types'

export const searchVideo = text => dispatch => {
    dispatch(
        {
            type: SEARCH_VIDEO,
            payload: text
        }
    ) 
}




export const fetchVideoID = (text) => dispatch => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB6LB1ifuKpJDlczaXCk5vRm4AXzULLRGo&part=snippet&maxResults=10&q=${text}`)
    .then(response => { const id = response.data.items.map(item => item.id.videoId)
        const list = response.data
        console.log(list.pageInfo.resultsPerPage)
    axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB6LB1ifuKpJDlczaXCk5vRm4AXzULLRGo&id=${id}&part=snippet,statistics`)
    .then(response => dispatch({
        type: FETCH_VIDEO_ID,
        payload: response.data.items,
        newPayload: list,
        totalVideoCount: list.pageInfo.resultsPerPage
    }))
    }
    ) 
}

//AIzaSyCkATKGCBrPM1CVQmZP6FNQjLG2JIH1APM




