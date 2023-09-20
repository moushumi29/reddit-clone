import React, { useContext } from 'react'
import { ShowModalContext } from '../../App';

const FeedCard = (props) => {
  const { setShowLogInModal } = useContext(ShowModalContext)
  const { content, likeCount, author, channel, createdAt } = props;

  const handleClick = () =>{
    setShowLogInModal(true);
  }
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
        <p className='created-at'>{createdAt}</p>
      </div>
      <div className='button-wrapper'>
        <button className='button' onClick={handleClick}>vote {likeCount}</button>
        <button className='button' onClick={handleClick}>Comment</button>
        <button className='button' onClick={handleClick}>Share</button>
      </div>
    </div>
  )
}

export default FeedCard
