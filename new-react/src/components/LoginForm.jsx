import React from 'react';

function LoginForm() { 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); 
    const username = formData.get('username');
    const password = formData.get('password');
    console.log(username, password);
  }

  return (
    <div className='flex flex-col items-center justify-center p-6'>
      <form 
        onSubmit={handleSubmit} 
        className='flex flex-col gap-3 bg-white shadow-md rounded-lg p-6 w-80'
      >
        <input 
          className='border border-gray-300 rounded-md px-3 py-2' 
          type="text" 
          name="username" 
          placeholder='Username' 
        />
        <input 
          className='border border-gray-300 rounded-md px-3 py-2' 
          type="password" 
          name="password" 
          placeholder='Password' 
        />
        <button 
          className='border border-gray-300 font-semibold py-1 rounded-md' 
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm;
