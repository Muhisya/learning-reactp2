import React, { useState } from 'react';

function LoginFormControlled() { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [submittedUsername, setSubmittedUsername] = useState('');
  const [submittedPassword, setSubmittedPassword] = useState('');
  const [submittedPhone, setSubmittedPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username);
    setSubmittedPassword(password);
    setSubmittedPhone(phone);
  }

  return (
    <div className='flex flex-col items-center justify-center p-6'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-white shadow-md rounded-lg p-6 w-80'>
        <input 
          className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-orange-500' 
          type="text" 
          placeholder='Username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-orange-500' 
          type="password" 
          placeholder='Password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-orange-500' 
          type="tel" 
          placeholder='Phone Number' 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        
        <button 
          className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-colors' 
          type='submit'
        >
          Login
        </button>

        <p className='text-sm text-gray-600 mt-2'>
          Your username: <span className='font-semibold text-orange-600'>{submittedUsername}</span>
        </p>
        <p className='text-sm text-gray-600'>
          Your password: <span className='font-semibold text-orange-600'>{submittedPassword}</span>
        </p>
        <p className='text-sm text-gray-600'>
          Your phone number: <span className='font-semibold text-orange-600'>{submittedPhone}</span>
        </p>
      </form>
      
    </div>
  )
}

export default LoginFormControlled;