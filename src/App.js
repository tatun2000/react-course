import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './UI/select/MySelect';

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

  const sortPosts = (sort) =>{
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
        <PostForm create={createPost} />

        {/* hr - это разделитель */}
        <hr style={{margin: '15px 0'}}/> 
        <div>
          <MySelect
            option={[
              {id: 1, value: 'title', name: 'По названию'},
              {id: 2, value: 'body', name: 'По описанию'}
            ]}
            defaultValue="Сортировка"
            onChange={sortPosts}
          />
        </div>
        {
            posts.length
            ? <PostList posts={posts} title={'Список постов'} remove={deletePost}/>
            : <h1 style={{textAlign: 'center'}}>
                Посты не найдены
              </h1>
        }
    </div>
  );
}

export default App;
