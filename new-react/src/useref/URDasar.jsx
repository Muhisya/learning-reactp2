import React, { useRef, useState, useEffect } from 'react';

function URDasar() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Now: {count}, Before: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Add 1+</button>
      <button onClick={() => setCount(count - 1)}>Add 1-</button>
    </div>
  );
}

export default URDasar;
