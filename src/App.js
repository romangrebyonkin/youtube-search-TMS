import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { VideoBox } from './components/VideoItem';
import { Input } from './components/Input';
import { Pagination } from './components/Pagination'


function App() {
  const video = useSelector(state => state.video)

  // const nextPage = (pageNumber) => {

  // }

  return (
    <div className="container">
      <Input />
      <div className='wrapper'>
        { video.likes.map((item, index) => (
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
    <Pagination />
    </div>
  );
}

export default App;
