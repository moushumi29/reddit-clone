import React, { useContext, useState } from 'react'
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline, IoArrowUpCircleSharp } from 'react-icons/io5'
import { BsChat } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import Moment from 'react-moment'
import { ImArrowUp } from 'react-icons/im'
import { ImArrowDown } from 'react-icons/im'
import { DarkMode } from '../../App'

const HomePost = (props) => {
    const { darkMode } = useContext(DarkMode);
    const { content, likeCount, author, channel, createdAt, commentCount, _id } = props;
    const [like, setLike] = useState(likeCount);
    const [colorUp, setColorUp] = useState("#ddd");
    const [colorDown, setColorDown] = useState("#ddd");
    const [comments, setComments] = useState();

    const postId = _id
    const token = sessionStorage.getItem("authToken");
    const projectId = "dbt6ga9tkodz"

    const addLikeCount = async(postId, token, projectId) =>{
      try{
        const res = await fetch(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,
        {
          method: "POST",
          body: {
            postId: `${postId}`,
          },
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: `${projectId}`,
          }
        })
        const data = await res.json();
        if(data.status == "success"){
          setLike((prevState)=> prevState + 1 );
          setColorUp("#ff4500")
          setColorDown("#ddd")
        }
      }catch(err){
        console.log(err);
      }
    };

    const deleteLikeCount = async(postId, token, projectId) =>{
      try{
        const res = await fetch(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,
        {
          method: "DELETE",
          body: {
            postId: `${postId}`,
          },
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: `${projectId}`,
          }
        })
        const data = await res.json();
        if(data.status == "success"){
          setLike((prevState)=> prevState - 1 );
          setColorUp("#ddd");
          setColorDown("#ff4500")
        }
      }catch(err){
        console.log(err);
      }
    };

    const fetchingComment = async(postId, token, projectId) =>{
      try{
        const res = await fetch(`https://academics.newtonschool.co/api/v1/reddit/post/${postId}/comments`,
        {
          body: {
            postId: `${postId}`,
          },
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: `${projectId}`,
          }
        })
        const data = await res.json();
       
          // setComments(data);
          console.log(data);
      }catch(err){
        console.log(err);
      }
    };

    const onClickUpvote = () =>{
      addLikeCount(postId, token, projectId);
    }
    const onClickDownVote = () =>{
      deleteLikeCount(postId, token, projectId);
    }
    const showComment = () =>{
      fetchingComment(postId, token, projectId);
    }
  return (
    <div style={{padding:"12px 0px"}}>
    <div className={`post-conatiner-${darkMode?"dark":"light"}`}>
      <div className={`like-area-${darkMode?"dark":"light"}`}>
        <div className="post-icons"  style={{color: colorUp}} onClick={onClickUpvote}><ImArrowUp/></div>
        <div className={`like-${darkMode?"dark":"light"}`}>{like}</div>
        <div className='post-icons' style={{color: colorDown}} onClick={onClickDownVote}><ImArrowDown/> </div>
      </div>
      <div className={`content-container-${darkMode?"dark":"light"}`}>
        <div className={`content-wrapper-${darkMode?"dark":"light"}`}>
        <div className='profile-container'>
            <div className='channel-container'>
            <img src={channel.image} alt={channel.name}/>
            <span className={`channel-name-${darkMode?"dark":"light"}`}>r/{channel.name}</span>
            <span>Posted by u/{author.name}</span>
            <span><Moment fromNow>{createdAt}</Moment></span> 
            </div>
            </div>
        </div>
        {/* <div style={{fontSize:'16px', fontWeight:"600", paddingBottom:"8px"}}>{title}</div> */}
        <div className={`content-home-${darkMode?"light":"dark"}`}>{content}</div>
        <div>
            {/* <img src={images}/> */}
        </div>
        <div>
            <button className={`post-btn-${darkMode?"dark":"light"}`} onClick={showComment}><BsChat/> <span>{commentCount} comments</span></button>
            <button className={`post-btn-${darkMode?"dark":"light"}`}><AiOutlineDelete/> Delete</button>
        </div>
        <div>
          {comments && comments.map((comment, i)=>{
            <div key={i}>{comment}</div>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}


export default HomePost
