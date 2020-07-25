// @flow
import React from 'react';
import './App.css';
import Greetings from './Greetings';

function App() {
  return (
    <div className="App">
      <Greetings
        title="Hello, world!!"
        description="I am just testing flow."
      />
    </div>
  );
}

export default App;
