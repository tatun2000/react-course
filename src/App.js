import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'JavaScript',
      body: 'Description'
    },
    {
      id: 2,
      title: 'Java',
      body: 'Description'
    },
    {
      id: 3,
      title: 'Golang',
      body: 'Description'
    }
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
        <PostForm create={createPost} />
        <PostList posts={posts} title={'Список постов 1'} deletePost={deletePost}/>
    </div>
  );
}

export default App;
