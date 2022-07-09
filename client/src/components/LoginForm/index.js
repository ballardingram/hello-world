import React, { useState } from 'react';
import RegisterForm from '../RegisterForm';


const LoginForm = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e) => {
    // e.preventDefault();
    setIsModalOpen(true);
  }
  console.log(isModalOpen, Date.now)
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      {isModalOpen && <RegisterForm />}
        <div className="w-full p-6 m-auto bg-white rounded-lg shadow-md max-w-xs">

            <form className='mt-6'>

            <div className='mb-3'>
                <label
                  htmlFor='email'
                  className='block text-sm'> 
                </label>
                <input
                  type='email'
                  className='block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Email Address'
                  id='email'
                />
              </div>

              <div className='mb-3'>
                <label
                  htmlFor='password'
                  className='block text-sm'> 
                </label>
                <input
                  type='password'
                  className='block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Password'
                  id='password'
                />
              </div>               

              <div className='mt-5'>
                  <button 
                    className='w-full px-4 pb-1 tracking-wide text-white rounded-lg text-2xl font-thin'
                    id='form-btn'>
                        Log In
                  </button>
              </div>

              <div className='mt-5 flex justify-center w-full'>
                <div 
                  className='inline-block text-xs font-bold h-full content-center text-center'>
                  Need an account? 
                  <button onClick={() => toggleModal()}> Register Here!</button>
                </div>
              </div>
            </form>

        </div>
    </div>
);
}
export default LoginForm;