import React, { useEffect, useState } from 'react';
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { format } from 'timeago.js';
import axios from 'axios';

// BACKEND PUBLIC FOLDER UPLOADS
const POST_IMG = process.env.REACT_APP_POST_IMAGES;


// SERVER API URL
const apiUrl = "http://localhost:4000/api"



export const Post = ({ post }) => {
const [user, setUser] = useState({});
  const { currentUser } = useAuth();


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${apiUrl}/users?userId=${post.userId}`)
        setUser(res.data)
    }
    fetchUser();
  }, [post.userId])

 
  const likeHandler = () => {

  }

  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
          <Link to={"/profile/"+user.userName} style={{textDecoration: 'none'}} >
            <img className='post-profile-img' 
            src="/assets/staticImages/no_pf_img.png" alt="" />
          </Link>
          <Link to={"/profile/"+user.userName} style={{textDecoration: 'none'}} >
            <span className="post-username">{user && user.name}</span>
          </Link>
          </div>
          <div className="post-top-right">
          <span className="post-date">{post && format(post.createdAt)}</span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post && post.body}</span>
          <img className="post-img" src={post.img && POST_IMG+post.img} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
          <img className="like-icon" src="/assets/staticImages/like_icon.png" 
          alt="" onClick={likeHandler} />
          </div>
          <div className="post-bottom-right">
            <span className="post-comment">Comment</span>
          </div>
        </div>

      </div>

    </div>
  )
}

/*   
{format(post.createdAt)}
{post.body}
*/