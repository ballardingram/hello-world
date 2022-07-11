import React from 'react';
import NavSm from '../components/NavSm';
import NavLg from '../components/NavLg';
import ExpandSkills from '../components/ExpandSkills';
import ExpandAdd from '../components/ExpandAdd';
import ExpandMenu from '../components/ExpandMenu';

const Account = () => {
  return (

  <div class="flex flex-col h-screen justify-between">
    <header>
      <NavLg></NavLg>
      <NavSm></NavSm>
    </header>
    <main class="mb-auto">
      <div className="w-full p-4 m-auto bg-white rounded-lg max-w-lg">
      <form>
        <div className='mb-2'>
          <label
            htmlFor='displayName'
            className='block text-md font-semibold'>
            Display Name
          </label>
          <input
            type='text'
            className='cursor-not-allowed block text-md w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
            placeholder='Kevin Puggles'
            id='displayName'
            disabled/>
        </div>
        <div className='mb-2'>
          <label
            htmlFor='email'
            className='block text-md font-semibold'> 
            Email
          </label>
          <input
            type='email'
            className='cursor-not-allowed block text-md w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
            placeholder='admin@helloworld.com'
            id='email'
            disabled/>
        </div>
        <div className='mb-2'>
          <label
            htmlFor='password'
            className='block text-md font-semibold'> 
            Password*
          </label>
          <input
            type='password'
            className='cursor-pointer block text-md w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
            placeholder='**********'
            id='password'/>
        </div>
        <div className='mb-2'>
          <label
            htmlFor='newPassword'
            className='block text-md'> 
          </label>
          <input
            type='password'
            className='cursor-pointer block text-md w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
            placeholder='New Password'
            id='newPassword'/>
        </div>
        <div className='mt-2'>
          <button 
            type='submit'
            className='w-full py-1 mt-2 tracking-wide text-white rounded-lg text-xl font-thin'
            id='form-btn'>
              Update Account
          </button>
        </div>
      </form>
      </div>
      <div className="w-full p-4 pb-10 m-auto bg-white rounded-lg max-w-lg">
          <ExpandSkills></ExpandSkills>
          <ExpandAdd></ExpandAdd>
      </div>
    </main>
    <footer 
      class="fixed bottom-0">
        <ExpandMenu></ExpandMenu>
    </footer>
  </div>
  );
}

export default Account;