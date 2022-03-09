import React, { useState, useEffect } from 'react';
import { Post } from '../Post';
import { PostForm } from '../PostForm';
import axios from 'axios';
import '../../stylesheets/index.scss';

// SERVER API URL
// const apiUrl = "http://localhost:4000/api"
const apiUrl = "https://bussin.herokuapp.com/api"


export const Timeline = ({ userName }) => {
  const [posts, setPosts] = useState([]);


 useEffect(() => {
  const fetchPosts = async () => {
    const res = userName ? await axios.get(`${apiUrl}/posts/profile/${userName}`) : await axios.get(`${apiUrl}/posts`)
    setPosts(res.data.data.reverse())
  }
  fetchPosts()
  
}, [userName]) 
 


  return (
    <div className="timeline" >
      <PostForm />
      {posts && posts.map((p) => (   
      <Post  post={p} key={p._id} />
      ) )}
    </div>
  )
}

