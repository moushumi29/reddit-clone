import React from 'react'

const FeedCard = (props) => {
  const { content, likeCount, author, channel, createdAt, images } = props;
  return (
    <div className='feed-wrapper'>
      <div className='feed-container'>
        <div className='profile-container'>
          <div className='channel-container'>
            <img src={channel.image} alt={channel.name} />
            <div>{channel.name} </div>
          </div>
          <div>By {author.name}</div>
        </div>
        <p className='content'>{content}</p>
        <img src={images} className='feed-image' />
        <p className='created-at'>{createdAt}</p>
      </div>
      <div className='button-wrapper'>
        <button className='button'>vote {likeCount}</button>
        <button className='button'>Comment</button>
        <button className='button'>Share</button>
      </div>
    </div>
  )
}

export default FeedCard
