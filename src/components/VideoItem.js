import React, {useState} from 'react'
import './components.css'
import { Transition } from 'react-spring/renderprops'
import ChevronUp from '../icons/Icons'
import Heart from '../icons/Like'
import Calendar from '../icons/Date'
import Eye from '../icons/View'
import ThumbsDown from '../icons/Dislike'

export const VideoBox = ({image, title, chanelName, link, id, view, date, likes, dislikes, description}) => {
    const [isVisible, SetIsVisible] = useState(false)
  
    return (
        <div className='video_box'>
            <div className='title_box'>
                <a href={link + id}>
                <h1>{title}</h1>
                </a>
            </div>
            <div className='video_statistics'>
                <img src={image} alt=''></img>
                <h2>{chanelName}</h2>
                <p><Eye /> : {view}</p>
                <p><Calendar /> : {date}</p>
                <p><Heart /> : {likes}</p>
                <p><ThumbsDown /> : {dislikes}</p>
            </div>
            <div className='video_discription_click' onClick={() => {SetIsVisible(!isVisible)}}>Discription <ChevronUp /></div>
            <Transition
            items={isVisible}
            enter={{opacity: 1, height: 360}}
            leave={{opacity: 0, height: 0}}
            from={{opacity: 0, height: 0, position: 'absolute', bottom: 48}}
            >
                {item => item && (props =>(
                    <div style={props} className='video_discription'>
                        <p>{description}</p>
                    </div>
                ))}   
            </Transition>
        </div>
    )
}