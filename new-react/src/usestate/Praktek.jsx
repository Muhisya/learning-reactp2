import React, {useState} from 'react'

function Praktek() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1);
    console.log(count + 1);
  }
  function handleClick2() {
    setCount(count + 2);
    console.log(count + 2);
  }
  function handleClick3() {
    setCount(count - 1);
    console.log(count - 1);
  }

  return (
    <div className=''>
      <p>Antum udah nge-klik sebanyak: {count} </p>
      <button onClick={handleClick}>
        Yuk klik ana 1+
      </button>
      <button onClick={handleClick2}>
        Yuk klik ana 2+
      </button>
      <button onClick={() => {
        setCount(count + 3);
        console.log(count + 3);
      }}>
        Yuk klik ana 3+
      </button>
      <button onClick={handleClick3}>
        Yuk klik ana 1-
      </button>
    </div>
  )
}

export default Praktek