import React from 'react';

const MyComponent = () => {
  
  const myStyles = {
    color: 'darkblue',
    fontSize: '16px',
    border: '1px solid blue',
    padding: '10px',
    backgroundColor: 'lightblue',
    borderRadius:'5px',
  };

  return (
      <div>
        <h1 style={{color:'green'}}>Inline Style in JSX Example</h1>
      <p style={myStyles}>This is a paragraph with inline styles applied.</p>
    </div>
  );
};

export default MyComponent;
