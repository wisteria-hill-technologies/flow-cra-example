// @flow
import React, { Component } from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

class App extends Component<{}> {
  content = "This is my article...";

  items = [
    { id: 'abc1', title: 'Flow', description: 'Flow is a static type checker for javascript.', published: true },
    { id: 'abc2', title: 'Typescript', description: 'Do you want to learn typescript?', published: false },
    { id: 'abc3', title: 'React JS', description: 'It is a library not a framework...', published: true },
  ]

  people = [
    { id: 1, firstName: 'John', lastName: 'Davis', age: 26 },
    { id: 2, firstName: 'Kate', lastName: 'Williams', age: 46 },
    { id: 3, firstName: 'Ben', lastName: 'Adams', age: 32 }
  ];

  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <FunctionalComponent
          title="Hello, world!!"
          description="I am using flow to type check this App."
          items={this.items}
        />
        <ClassComponent
          header="People"
          articleNo={120}
          content={this.content}
          myNumArr={[2,3,4,23,45]}
          people={this.people}
        />
      </div>
    );
  }
}

export default App;
