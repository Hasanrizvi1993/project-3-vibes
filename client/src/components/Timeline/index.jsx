import React, { useState, useEffect } from 'react';
import { Post } from '../Post';
import { PostForm } from '../PostForm';
import axios from 'axios';
import './timeline.scss';

// SERVER API URL
const apiUrl = "http://localhost:4000/api"


export const Timeline = ({ userName }) => {
  const [posts, setPosts] = useState([]);


 useEffect(() => {
  const fetchPosts = async () => {
    const res = userName ? await axios.get(`${apiUrl}/posts/profile/${userName}`) : await axios.get(`${apiUrl}/posts`)
    setPosts(res.data.data.reverse())
  }
  fetchPosts()
  
}, [posts, userName]) 
 


  return (
    <div className="timeline" >
      <div className="timeline-wrapper">
      <PostForm />
      {posts && posts.map((p) => (   
      <Post  post={p} key={p._id} />
        
      ) )}
      </div>
    </div>
  )
}


/*   {posts.map((p) => (   
        <div className="user">{}</div>
        
      ) )}    <Post  post={p} key={p._id} /> {posts.map((p) => (    ) )}  key={p._id} post={p} */