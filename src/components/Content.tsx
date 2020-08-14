import React from 'react';

function Content(props: { children: React.ReactNode; }) {
  return (
    <div className="content">
      {props.children}
    </div>
  );
}

export default Content;