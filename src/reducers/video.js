import { SEARCH_VIDEO, FETCH_VIDEO_ID, FETCH_NEXT_PAGE } from '../action/types';

const initialState = {
    text: '',
    list: [],
    likes: [],
    totalVideoCount: '',
    test: []
}


const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_VIDEO:
           return {
               ...state,
               text: action.payload
           }
        case FETCH_VIDEO_ID:
            return {
                ...state,
                likes: action.payload,
                list: action.newPayload,
                totalVideoCount: action.totalVideoCount
            }   
        case FETCH_NEXT_PAGE:
            return{
                ...state,
                test: action.payload
            }       
        default:
            return state
    }
}

export default videoReducer