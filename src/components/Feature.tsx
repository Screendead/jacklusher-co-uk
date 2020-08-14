import React from 'react';

function Feature(props: { content: React.ReactNode; }) {
  return (
    <li className="options__option__features__feature">{props.content}</li>
  );
}

export default Feature;