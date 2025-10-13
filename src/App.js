import React, { useEffect, useMemo, useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './UI/loader/Loader';
import { useFetching } from './hooks/useFetching';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(filter.sort, filter.query, posts);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
      const posts = await PostService.getAll();
      setPosts(posts);
  })

  useEffect(() => {
    // this function will run only once
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
        <button onClick={fetchPosts}>Получить посты</button>
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
          Создать пост
        </MyButton>

        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>

        {/* hr - это разделитель */}
        <hr style={{margin: '15px 0'}}/> 
        <PostFilter 
          filter={filter}
          setFilter={setFilter}
        />
        {postError && 
          <h1>Произошла ошибка ${postError}</h1>
        }
        {isPostsLoading
          ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
          : <PostList posts={sortedAndSearchedPosts} title={'Список постов'} remove={deletePost}/>    
        }
      </div>
  );
}

export default App;
