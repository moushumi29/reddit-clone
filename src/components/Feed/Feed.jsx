import React, { useEffect, useState } from 'react'
import FeedCard from './FeedCard';


const Feed = () => {
    const proectId = "dbt6ga9tkodz";
    const [feedsList, setFeedsList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleInfiniteScroll = async() =>{
      console.log("scroll-height", document.documentElement.scrollHeight)
        try {
          if(window.innerHeight + document.documentElement.scrollTop + 1 >= 
            document.documentElement.scrollHeight){
              if(page <9){
              setPage((prev) => prev+1)
              }
            }
        }catch(err){
          console.log(err);
        }
    }

    useEffect(()=>{
      setIsLoading(true);
        fetch(`https://academics.newtonschool.co/api/v1/reddit/post?limit=10&page=${page}` , {
            method: "GET",
            headers:{
                projectId: proectId
            },
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
          console.log("Feeds Response", data.data);
          setFeedsList((prev)=> [...prev, ...data.data]);
            setIsLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setIsLoading(false);
        })
    }, [page]);

    useEffect(()=>{
      window.addEventListener("scroll", handleInfiniteScroll)
      return () => window.removeEventListener("scroll", handleInfiniteScroll)
    })
  return (
    //loading
    <div className='main-feed-container'>
    {isLoading ? <div>Loading...</div>:
      (feedsList.length && feedsList.map(({_id, ...feed})=>{
        return (
            <FeedCard key={_id} {...feed}/>
        )

      }))}
      </div>
   
  )
}

export default Feed
