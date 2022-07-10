import React from 'react';
import NavSm from '../components/NavSm';
import NavLg from '../components/NavLg';
import FooterSm from '../components/FooterSm';

const Account = () => {
  return (
    <div>
      <div className='flex flex-col h-screen justify-between'>
        
        <div>
          <NavSm></NavSm>
          <NavLg></NavLg>
        </div>

        <div className='flex flex-col h-screen justify-start'>
          <div className="relative flex flex-col tracking-wide">
            <div className="w-full p-6 m-auto bg-white rounded-lg max-w-lg">
              <form>
                <div className='mb-3'>
                  <label
                    htmlFor='displayName'
                    className='block text-sm font-semibold'>
                    Display Name
                  </label>
                  <input
                    type='text'
                    className='cursor-not-allowed block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    placeholder='Kevin Puggles'
                    id='displayName'
                    disabled
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold'> 
                    Email
                  </label>
                  <input
                    type='email'
                    className='cursor-not-allowed block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    placeholder='admin@helloworld.com'
                    id='email'
                    disabled
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-semibold'> 
                    Password*
                  </label>
                  <input
                    type='password'
                    className='cursor-pointer block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    placeholder='**********'
                    id='password'
                  />
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='newPassword'
                    className='block text-sm'> 
                  </label>
                  <input
                    type='password'
                    className='cursor-pointer block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    placeholder='New Password'
                    id='newPassword'
                  />
                </div>
                <div className='mt-2'>
                  <button 
                    className='w-full py-1 mt-2 tracking-wide text-white rounded-lg text-2xl font-thin'
                    id='form-btn'>
                      Update Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="w-full px-6 bg-white rounded-lg max-w-lg">
              <button 
                className='w-full px-1 py-1 tracking-wide text-white rounded-lg text-2xl font-thin'
                id='form-btn'>
                View Profile
              </button>
            </div>
          </div>
          <FooterSm></FooterSm>
        </div>

      </div>
    </div>
  );
}

export default Account;