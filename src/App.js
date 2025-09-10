import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

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

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) =>{
    e.preventDefault();

    const lastID = posts[posts.length - 1].id;

    const newPost = {
      id: lastID + 1,
      title: title,
      body: body
    }

    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  }

  return (
    <div className="App">
        <form>
            {/* Управляемый компонент */}
            <MyInput 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название поста"/>

            {/* Управляемый компонент */}
            <MyInput 
              type="text" 
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Описание поста"/>
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>

        <PostList posts={posts} title={'Список постов 1'} />
    </div>
  );
}

export default App;
