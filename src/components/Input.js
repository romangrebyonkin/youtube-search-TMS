import React from 'react'
import './components.css'
import {useSelector, useDispatch} from 'react-redux'
import { searchVideo, fetchVideoID } from '../action'




export const Input = () => {
    const text = useSelector(state => state.video.text)

    const dispatch = useDispatch()

    const formSubmit = e => {
        e.preventDefault()
        dispatch(fetchVideoID(text))
    }

    const inputChange = e => dispatch(searchVideo(e.target.value))

    return (
        <form onSubmit={formSubmit}>
            <input  type='text' onChange={inputChange} placeholder='Enter video title'></input>
            <button type='submit'>Search</button>
        </form>
    )
}