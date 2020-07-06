import axios from 'axios';
import { SEARCH_VIDEO, FETCH_VIDEO_ID } from './types'

const KEY = 'AIzaSyCJ0NFqqk17fyKKRXoZo2wqbxLXKyGbFgw'

export const searchVideo = text => dispatch => {
    dispatch(
        {
            type: SEARCH_VIDEO,
            payload: text
        }
    ) 
}

export const fetchVideoID = (text) => dispatch => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&maxResults=15&q=${text}`)
    .then(response => { const id = response.data.items.map(item => item.id.videoId)
        const list = response.data
    axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${KEY}&id=${id}&part=snippet,statistics`)
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
//AIzaSyAg5WYLZCOg8L3qSomP-A0Yg2HfhERRQ5k
//AIzaSyCw2xMMjdKhdspQHIXagirR5owQ-8aC5U4
//AIzaSyAc9x54irPlFX4exHp8stmVgOiM1VwOs9Q




