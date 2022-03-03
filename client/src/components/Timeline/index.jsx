import React, { useState, useEffect } from 'react';
import { Post } from '../Post';
import { PostForm } from '../PostForm';
import axios from 'axios';
import './timeline.scss';

// SERVER API URL
const apiUrl = "http://localhost:4000/api"


export const Timeline = () => {
  const [posts, setPosts] = useState();


 useEffect(() => {
  const fetchPosts = async () => {
    const res = await axios.get(`${apiUrl}/posts`)
    setPosts(res.data.data.reverse())
  }
  fetchPosts()
  
}, [posts]) 
 


  return (
    <div className="timeline" >
      <PostForm />
      {posts && posts.map((p) => (   
      <Post  post={p} key={p._id} />
        
      ) )}

        
    
      
    </div>
  )
}


/*   {posts.map((p) => (   
        <div className="user">{}</div>
        
      ) )}    <Post  post={p} key={p._id} /> {posts.map((p) => (    ) )}  key={p._id} post={p} */