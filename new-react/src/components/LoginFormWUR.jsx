import React, { useRef } from 'react';

function LoginFormWUR() { 
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value, passwordRef.current.value);
  }

  return (
    <div className='flex flex-col items-center justify-center p-6'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-white shadow-md rounded-lg p-6 w-80'>
        <input className='border border-gray-300 rounded-md px-3 py-2' type="text" placeholder='Username' ref={usernameRef} />
        <input className='border border-gray-300 rounded-md px-3 py-2' type="password" placeholder='Password' ref={passwordRef} />
        <button className='border border-gray-300 font-semibold py-1 rounded-md' type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginFormWUR;
