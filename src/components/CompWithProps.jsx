import React, { useState } from 'react';
import './CompWithProps.css';
function CompWithProps() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="center-container">
      <input 
        type="text" 
        onChange={handleInputChange} 
        placeholder="Escribe tu nombre..."
        className="input-box"
      />
      <p className="text-output">User: {text}</p>
    </div>
  );
}

export default CompWithProps;

