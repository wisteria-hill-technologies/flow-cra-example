// @flow
import React from 'react';

type Props = {
  description?: string;
  title: string,
};

const Greetings = (props: Props) => {
  return (
    <div>
      <h1>{ props.title || 'No Title'}</h1>
      <p>{ props.description }</p>
    </div>
  );
};

export default Greetings;