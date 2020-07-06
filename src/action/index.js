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

export const fetchNextPage = (nextPage) => dispatch => {
    
    const a = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyB6LB1ifuKpJDlczaXCk5vRm4AXzULLRGo&part=snippet&pageToken=${nextPage}&maxResults=5`
    console.log(a)
    axios.get(a)
    .then(responce => {
        const data = responce.data.items
    
    dispatch(
        {
            type: FETCH_NEXT_PAGE,
            payload: data
        }
    )
     }
    )
}





export const fetchVideoID = (text) => dispatch => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB6LB1ifuKpJDlczaXCk5vRm4AXzULLRGo&part=snippet&maxResults=5&q=${text}`)
    .then(response => { const id = response.data.items.map(item => item.id.videoId)
        const list = response.data
        console.log(list.nextPageToken)
    axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB6LB1ifuKpJDlczaXCk5vRm4AXzULLRGo&id=${id}&part=snippet,statistics`)
    .then(response => dispatch({
        type: FETCH_VIDEO_ID,
        payload: response.data.items,
        newPayload: list,
        nextPageToken: list.nextPageToken,
        prevPageToken: list.prevPageToken
    }))
    }
    ) 
}

//AIzaSyCkATKGCBrPM1CVQmZP6FNQjLG2JIH1APM




