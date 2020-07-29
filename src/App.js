import React from 'react';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider>
    <div className="App">
      <PostForm/>
      <hr/>
        <Posts/>
    </div>
          </Provider>
  );
}

export default App;
