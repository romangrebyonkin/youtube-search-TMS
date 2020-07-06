import { SEARCH_VIDEO, FETCH_VIDEO_ID, CHANGE_PAGE} from '../action/types';

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
                test: action.payload.slice(0,4),
                totalVideoCount: action.totalVideoCount
            }  
        case CHANGE_PAGE:
            return {
                ...state,
                test: action.payload
            }      
        default:
            return state
    }
}

export default videoReducer