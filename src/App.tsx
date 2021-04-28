import React, { useState } from 'react';
import codetestjson from './codetestjson.json';
import './App.css';
import Article from './Article'

function App() {
  const [story] = useState(codetestjson)
  return (
    <div className="App">
      <Article story={story}/>
    </div>
  );
}

export default App;
