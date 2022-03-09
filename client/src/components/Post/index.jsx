import React, { useEffect, useState, useRef } from 'react';
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { format } from 'timeago.js';
import axios from 'axios';

// BACKEND PUBLIC FOLDER UPLOADS
const POST_IMG = process.env.REACT_APP_POST_IMAGES;


// SERVER API URL
// const apiUrl = "http://localhost:4000/api"
const apiUrl = "https://bussin.herokuapp.com/api"



export const Post = ({ post }) => {
// state hooks for liked posts
const [like, setLike] = useState(post.likes.length);
const [isLiked, setIsLiked] = useState(false);
// state hook for edit input
const [editInput, setEditInput] = useState(false);
// input ref hook
const editRef = useRef()
const [user, setUser] = useState({});
// ref hook for comment text
const comment = useRef();
// pulling logged in user from authcontext
const { currentUser } = useAuth();

// Fetching user who created post
  useEffect(() => {
    const fetchUser = async () => {
      const userToken = JSON.parse(localStorage.getItem("userToken"))
      const res = await axios.get(`${apiUrl}/users?userId=${post.userId}`, {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${userToken}`
        }
      })
        setUser(res.data)
    }
    fetchUser();
    
  }, [post.userId])

  // Comment Submit Handler
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
// DELETE OR EDIT POSTS 
  const deletePost = async (e) => {
    e.preventDefault()
    try {
      await axios.delete(`${apiUrl}/posts/${post._id}`)
      
    } catch (err) {
      console.log(err)
    }
    window.location.reload();
  }

  const editPost = async (e) => {
    e.preventDefault()
    const updatedPost = {
      body: editRef.current.value,
    }
    try {
      await axios.put(`${apiUrl}/posts/${post._id}`, updatedPost)
      
    } catch (err) {
      console.log(err)
    }
    window.location.reload();
  }
  

  const PF_IMG = process.env.REACT_APP_PF_IMAGES;

 // LIKE OR UNLIKE CHECK & HANDLER
 useEffect(() => {
  setIsLiked(post.likes.includes(currentUser._id))
},[currentUser._id, post.likes])


  const likeHandler = () => {
    const likeUser = {
      userId: currentUser._id,
    }
    try {
      axios.put(`${apiUrl}/posts/${post._id}/like`, likeUser)
    } catch (err) {
      console.log(err)
    }
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
          <Link to={"/profile/"+user.userName} >
            <img className='post-profile-img' style={{position: "relative", left:"25px", top:"-30px", height: '65px', width: '65px', borderRadius: '150%', }}  src={user && user.profileImage 
              ? PF_IMG+user.profileImage : "/assets/staticImages/no_pf_img.png"} alt=""   />
          </Link>
          <Link to={"/profile/"+user.userName} style={{position: "relative", left:"-90px", top:"-50px", fontFamily: "Helvetica", fontSize: "24px"}} >
            <span className="post-username">{user && user.name}</span>
          </Link>
          </div>
          <div className="post-top-right">
          <span className="post-date">{post && format(post.createdAt)} </span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post && post.body}</span>
          <img className="post-img" src={post.img && POST_IMG+post.img} alt="" />
          {post && post.userId === currentUser._id ? <div className="edit-delete" style={{margin: 'auto', justifyContent: 'space-between'}} >
            <button onClick={deletePost} className="delete-post" style={{marginRight: '20px'}} >Delete</button>
            <button onClick={()=> setEditInput(!editInput)} className='edit-text'>Edit</button>
            {editInput && 
            <div className='edit-box'  > 
              <input className='edit-post-input' type='text' ref={editRef}  />
              <button onClick={editPost} className='edit-post'>Edit</button>
            </div>}
          </div> : <p></p>}
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
          <img className="like-icon" src="/assets/staticImages/like_icon.png" 
          alt="" onClick={likeHandler} />
          <span className="post-like-counter">{like} people like it</span>

          </div>
          <div className="post-bottom-right">
            <form className='comment-box' onSubmit={submitComment} >
            <input className='comment-input' type="text" placeholder='ADD COMMENT' ref={comment} style={{fontFamily:"helvetica"}} />
            <button className="comment-btn" type="submit" style={{fontFamily:"helvetica"}}>ADD COMMENT</button>
            </form>
          </div>
        </div>
        <div className="post-comments">
          <ul className="comments-list">
            {post && post.comments.map((c) => (
              <li style={{listStyle: 'none'}} className="comments-list-item" key={c._id+"-1"} >
                <div className='comment-left' key={c._id+"0"} >
                  <span className="comments-list-text" key={c._id} >{c.body}<br /> 
                  <small className="comment-time" key={c._id+"3"} >{c && format(c.createdAt)}</small> </span>
                  </div>
                  <div className='comment-right' key={c._id+"1"} >
                    <div className="delete-comment" key={c._id+"2"} >
                      {currentUser._id === post.userId ? <button className="delete-comment-btn" onClick={async () => (
                      await axios.delete(`${apiUrl}/posts/${post._id}/comments/${c._id}`), 
                      window.location.reload()
                      )} >Delete</button>
                      : <p style={{display: 'none'}}></p>}
                    </div>
                  </div>
                  <hr className="comment-border" key={c._id+"4"} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
