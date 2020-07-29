// @flow
import React, { Component } from 'react';

// class component example
type People = {
  id: number,
  firstName: string,
  lastName: string,
  age: number
}

type Props = {
  header: string,
  articleNo: number,
  content: string,
  myNumArr: Array<number>,
  people: Array<People>
};

type State = {
  term: string
}

class ClassComponent extends Component<Props, State> {

  state = {
    term: ''
  }

  static defaultProps = {
    header: 'No Header'
  }

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ term: e.currentTarget.value });
  }

  render() {
    const { header, articleNo, content, people } = this.props || {};
    const { term } = this.state;
    const lowerCaseTerm = term && term.trim().toLowerCase();
    const filteredPeople = [ ...people ]
      .filter(({ firstName, lastName, age }) => {
        const firstNameIncludesTerm = firstName && firstName.toLowerCase().includes(lowerCaseTerm);
        const lastNameIncludesTerm = lastName && lastName.toLowerCase().includes(lowerCaseTerm);
        const ageMatch = age.toString().includes(lowerCaseTerm);
        return firstNameIncludesTerm || lastNameIncludesTerm || ageMatch;
      });

    return (
      <div style={{ border: '1px solid red', margin: '10px' }}>
        <h2>Class Component</h2>
        <p>Article Number: { articleNo }</p>
        <p>Content: { content }</p>
        <h3>{ header }</h3>
        <p>
          <input onChange={this.handleChange} value={term} />
        </p>
        <div>
          {
            filteredPeople.map(({ id, firstName, lastName, age }) => (
              <div key={id} style={{border: '1px solid black', maxWidth: '300px', margin: '10px auto'}}>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Age: {age}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default ClassComponent;