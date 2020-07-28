import React from 'react';
import './App.css';
import Posts from './components/Posts'
function App() {
  return (
    <div className="App">   
        <Posts/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
