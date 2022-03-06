import React, { useEffect, useState, useRef } from 'react';
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
// ref hook for comment text
const comment = useRef();
// pulling logged in user from authcontext
const { currentUser } = useAuth();



  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${apiUrl}/users?userId=${post.userId}`)
        setUser(res.data)
    }
    fetchUser();
    
  }, [post.userId])

  const submitComment = async (e) => {
    e.preventDefault()
    const newComment = {
      body: comment.current.value,
    }
    try {
        await axios.post(`${apiUrl}/posts/${post._id}/comments`, newComment)
        window.location.reload();
    } catch (err) {
      console.log(err)
    }

  }

  const deleteComment = async (e, c) => {
    e.peventDefault()
  try {
    e.peventDefault()
     await axios.delete(`${apiUrl}/post/$${post._id}/comments/${c._id}`)

  } catch (err) {
      console.log(err)
  }  
  }

  
 
  const likeHandler = () => {

  }

  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
          <Link to={"/profile/"+user.userName} >
            <img className='post-profile-img' 
            src="/assets/staticImages/no_pf_img.png" alt="" />
          </Link>
          <Link to={"/profile/"+user.userName} >
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
            <form className='comment-box' onSubmit={submitComment} >
            <input className='comment-input' type="text" placeholder='Add Comment' ref={comment} />
            <button className="comment=btn" type="submit">Add Comment</button>
            </form>
          </div>
        </div>
        <div className="post-comments">
          <ul className="comments-list">
            {post && post.comments.map((c) => (
              <li className="comments-list-item" key={c.id} >
                <div className='comment-left' key={c.id} >
                  <span className="comments-list-text" key={c.id} >{c.body}</span>
                  </div>
                  <div className='comment-right' key={c.id} >
                    <form action="" className="delete-comment" key={c.id} >
                  {currentUser._id === post.userId ? <button className="comment-delete-btn" onClick={deleteComment} >Delete</button>
                  : <p style={{display: 'none'}}></p>}
                  </form>
                  <span className="comment-time" key={c.id} >{c && format(c.createdAt)}</span>
                  </div>
                  <hr className="comment-border" key={c.id} />
              </li>
            ))}

          </ul>
        </div>
      </div>

    </div>
  )
}
