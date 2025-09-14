import React, { useMemo, useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

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

  const [filter, setFilter] = useState({sort: '', query: ''});

  function getSortedPosts(){
    console.log("GET SORTED POSTS");
    
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }

  const sortedPosts = useMemo(getSortedPosts, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
        <PostForm create={createPost} />
        {/* hr - это разделитель */}
        <hr style={{margin: '15px 0'}}/> 
        <PostFilter 
          filter={filter}
          setFilter={setFilter}
        />
        <PostList posts={sortedAndSearchedPosts} title={'Список постов'} remove={deletePost}/>    
    </div>
  );
}

export default App;
