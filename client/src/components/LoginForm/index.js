import React from 'react';


const LoginForm = () => {
  return (
    <div className="flex flex-col overflow-hidden">
        <div className="p-6 m-auto w-96">

            <form className='mt-6'>

            <div className='mb-3'>
                <label
                  for='email'
                  className='block text-sm'> 
                </label>
                <input
                  type='email'
                  className='block text-xl w-full px-4 py-3 mt-2 bg-white border rounded-xl focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Email Address'
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
                  className='block text-xl w-full px-4 py-3 mt-2 bg-white border rounded-xl focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Password'
                  id='password'
                />
              </div>               

              <div className='mt-5'>
                  <button 
                    className='w-full py-2 tracking-wide text-white rounded-xl text-3xl font-thin'
                    id='form-btn'>
                        Log In
                  </button>
              </div>

              <div className='mt-5 flex justify-center w-full'>
                <div 
                  className='inline-block text-md font-bold h-full content-center text-center'>
                  Need an account?
                  <a href='/' className='ml-1' id='register'>Register Here!</a>
                </div>
              </div>
            </form>

        </div>
    </div>
);
}
export default LoginForm;