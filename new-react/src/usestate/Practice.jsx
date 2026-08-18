import React, { useState } from 'react';

function Practice() {
  const [name, setName] = useState('Ali');
  const [tempName, setTempName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setName(tempName);
    setTempName('');
  }

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="cn" value={tempName} onChange={(e) => setTempName(e.target.value)} placeholder="Enter your name"
        />
        <button type="submit">Enter Name</button>
      </form>
    </>
  );
}

export default Practice;