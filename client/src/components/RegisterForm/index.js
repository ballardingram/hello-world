import React from 'react';
import Switch from '../Toggle';


const RegisterForm = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-lg shadow-md max-w-xs">
            <form className='mt-6'>
              <div className='mb-3'>
                <label
                  for='displayName'
                  className='block text-sm'> 
                </label>
                <input
                  type='text'
                  className='block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Display Name*'
                  id='displayName'
                />
              </div>
              <div className='mb-3'>
                <label
                  for='email'
                  className='block text-sm'> 
                </label>
                <input
                  type='email'
                  className='block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Email Address*'
                  id='email'
                />
              </div>
              <div className='mb-3'>
                <label
                  for='password'
                  className='block text-sm'> 
                </label>
                <input
                  type='password'
                  className='block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Password*'
                  id='password'
                />
              </div>
                <div className='mt-8 flex content-center justify-between' id='terms-label'>
                  <div className='inline-block ml-4 text-sm font-bold h-full content-center'>
                    Agree to terms & conditions
                  </div>
                    <Switch></Switch>
                </div>               
                <div className='mt-2'>
                    <button 
                      className='w-full px-4 pb-1 tracking-wide text-white rounded-lg text-2xl font-thin'
                      id='form-btn'>
                          Create Account
                    </button>
                </div>
            </form>

        </div>
    </div>
);
}
export default RegisterForm;