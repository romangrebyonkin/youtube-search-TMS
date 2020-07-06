import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { VideoBox } from './components/VideoItem';
import { Input } from './components/Input';
import { Pagination } from './components/Pagination'


function App() {
  const videoData = useSelector(state => state.video.test)

  const totalVideoCount = useSelector(state => state.video.totalVideoCount)
  const pageSize = 4

  let pagesCount = Math.ceil(totalVideoCount / pageSize)
  let pages = []

  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className="container">
      <Input />
      <div className='wrapper'>
        { videoData.map((item, index) => (
            <VideoBox 
              key={index}
              title={item.snippet.title}
              image={item.snippet.thumbnails.medium.url}
              chanelName={item.snippet.channelTitle}
              view={item.statistics.viewCount}
              date={item.snippet.publishedAt}
              likes={item.statistics.likeCount}
              dislikes={item.statistics.dislikeCount}
              link={'https://www.youtube.com/watch?v='}
              id={item.id}
              description={item.snippet.description}
            />
          )
          )}
      </div>
      <div className='count_box'>
      { pages.map((item, index) => (<Pagination value={item} key={index}/>))}
      </div>
    </div>
  );
}

export default App;
