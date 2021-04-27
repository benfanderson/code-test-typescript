import React from 'react';
import codetestjson from './codetestjson.json';
import './App.css';
import Child from './Child'

// const StoryObject = {
//   headline: "Miracle cure kills fifth patient",
//   source: "The West Australian"
// }

function App() {
  return (
    <div className="App">
      <Child story={codetestjson}/>
    </div>
  );
}

export default App;
