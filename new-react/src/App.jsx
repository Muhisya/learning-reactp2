import React from 'react';
import USDasar from './usestate/USDasar'; 
import Praktek from './usestate/Praktek';
import Practice from './usestate/Practice';
import URDasar from './useref/URDasar';
import TP from './useref/TP';
import LoginForm from './components/LoginForm';
import LoginFormWUR from './components/LoginFormWUR';
import LoginFormControlled from './components/LoginFormControlled';
import SignUp from './components/SignUp';
import DropdownMenuDemo from './style-components/RadixPrimitive'
import SimpleCounter from './components/SimpleCounter';

function App() {
  return (
    <div className='min-h-screen flex justify-center bg-white p-8 gap-8 items-center'>
      <SimpleCounter />
    </div>
  );
}

export default App;