import React, { useEffect, useState } from 'react'
import { Toast } from "radix-ui";

function SimpleCounter() {
  const [count, setCount] = React.useState(0)

    useEffect(() => {
        if (count > 0) {
            alert(`Count is now ${count} instead of the previous value of ${count - 1}.`);
        }

        setTimeout(() => {
            console.log("Waitin' for me?");
        }, 3000);

        // Cleanup function
        return () => {
            clearTimeout();
        }
    }, [count]);

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={ () => setCount(count + 1)}>+</button>
        <button onClick={ () => setCount(count - 1)}>-</button>
    </div>
  )
}

export default SimpleCounter