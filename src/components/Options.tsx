import React from 'react';

function Options(props: { children: React.ReactNode; }) {
  return (
    <div className="options">
      {props.children}
    </div>
  );
}

export default Options;