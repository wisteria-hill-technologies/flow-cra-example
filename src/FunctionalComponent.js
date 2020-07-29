// @flow
import React, { useState } from 'react';

// functional component example

type Item = {
  id: string,
  title: string,
  description: string,
  published: boolean
}

type Props = {
  title: string,
  description?: string,
  items: Array<Item>
};

const FunctionalComponent = ({ title, description, items }: Props) => {
  const [ term, setTerm ] = useState<string>('');

  // You can type useState like below as well.
  // const [ filteredItems, setFilteredItems ] = useState<Array<Item>>(items);
  const onHandleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  }

  const lowerCaseTerm = term && term.trim().toLowerCase();

  const filteredItems = [ ...items ]
    .filter(({ title, description, published }) => {
      const titleIncludesTerm = title && title.toLowerCase().includes(lowerCaseTerm);
      const descriptionIncludesTerm = description && description.toLowerCase().includes(lowerCaseTerm);
      const publishedMatch = lowerCaseTerm === 'true' && published;
      const notPublishedMatch = lowerCaseTerm === 'false' && !published;
      return titleIncludesTerm || descriptionIncludesTerm || publishedMatch || notPublishedMatch;
    });

  return (
    <div style={{ border: '1px solid blue', margin: '10px' }}>
      <h2>Functional Component</h2>
      <h3>{ title || 'No Title'}</h3>
      <p>{ description }</p>
      <p>Search Term: </p>
      <p>{ term }</p>
      <p>
        <input onChange={onHandleChange} value={term} />
      </p>
      <div>
        {
          filteredItems.map(({ id, title, description, published }) => (
            <div key={id} style={{border: '1px solid black', maxWidth: '300px', margin: '10px auto'}}>
              <p>Title: {title}</p>
              <p>Description: {description}</p>
              <p>published: {published.toString()}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FunctionalComponent;