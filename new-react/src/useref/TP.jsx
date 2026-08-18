import React, { useState, useRef } from 'react';

function TP() {
  const [name, setName] = useState('Ahmad');
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">
        Hello!, Your name is... <span className='text-white bg-linear-to-tr from-orange-400 to-amber-400 py-1 px-3 rounded-xl'>{name}</span>!
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-white shadow-md rounded-lg p-6 w-80">
        <input type="text" name="cn" ref={inputRef} placeholder="Enter your name"className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <button type="submit" className="bg-linear-to-bl from-red-600 to-orange-400 text-white font-semibold py-2 rounded-md hover:bg-linear-to-br hover:from-orange-400 hover:to-red-600 transition ">
          Enter your name!
        </button>
      </form>
    </div>
  );
}

export default TP;
