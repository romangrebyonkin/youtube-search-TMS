import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './components.css'
import { PageNum } from './PageNumber'

export const Pagination = () => {
    const totalVideoCount = useSelector(state => state.video.totalVideoCount)
    

    const pageSize = 3
    let pagesCount = totalVideoCount / pageSize
    let pages = []

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    // const myEvent = () => {
    //     let pageNum
        
    //     console.log(pageNum)

    //     let start = (pageNum - 1) * pageSize
    //     let end = start + pageSize

    //     let notes = totalVideoData.slice(start, end)
    //     console.log(notes)
    // }
    //const dispatch = useDispatch() 
    return (
        <div className='wrapper'>
        { pages.map((item, index) => (
            <PageNum 
            key={index}
            value={item}
            //   key={index}
            //   title={item.snippet.title}
            //   image={item.snippet.thumbnails.medium.url}
            //   chanelName={item.snippet.channelTitle}
            //   view={item.statistics.viewCount}
            //   date={item.snippet.publishedAt}
            //   likes={item.statistics.likeCount}
            //   dislikes={item.statistics.dislikeCount}
            //   link={'https://www.youtube.com/watch?v='}
            //   id={item.id}
            //   description={item.snippet.description}
            />
          )
          )}
      </div>
    )
}