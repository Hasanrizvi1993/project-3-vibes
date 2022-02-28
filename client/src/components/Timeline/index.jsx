import React from 'react';
import { Post } from '../Post';
import { PostForm } from '../PostForm';
import './timeline.scss';

export const Timeline = () => {
  return (
    <div>
      <PostForm />
      <Post />
        Timeline Component
    </div>
  )
}
