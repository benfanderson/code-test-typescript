import React, { useState } from 'react';
import codetestjson from './codetestjson.json';
import './App.css';
import Child from './Child'


function App() {

  const [story] = useState(codetestjson)
  return (
    <div className="App">
      <Child story={story}/>
    </div>
  );
}

export default App;
