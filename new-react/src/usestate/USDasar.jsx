import React, { useState } from 'react';

function USDasar() {
  const [number, setNumber] = useState(0);

  function plus() {
    setNumber(number + 1);
    console.log(number + 1);
    
  }

  return (
    <>
      <h2>Current Number: {number}</h2>
      <button onClick={plus}>Add</button>
    </>
  );
}

export default USDasar;