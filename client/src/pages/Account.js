import React from 'react';
import NavSm from '../components/NavSm';
import NavLg from '../components/NavLg';
import ExpandSkills from '../components/ExpandSkills';
import ExpandAdd from '../components/ExpandAdd';
import FooterMenu from '../components/FooterExpand';
import Switch from '../components/Toggle';
import { Icon } from '@iconify/react';
import boltIcon from '@iconify/icons-fxemoji/bolt';

const Account = () => {
  return (

  <div class="flex flex-col h-screen justify-start text-lg">
    {/* navigation header start */}
    <header>
      <NavLg></NavLg>
      <NavSm></NavSm>
    </header>
    {/* navigation header end */}
    <h1 className='font-bold mb-5 mt-5 w-screen text-2xl lg:text-3xl xl:text-4xl px-4 md:pt-0 md:text-right md:pr-9'>Account Settings</h1>
    {/* body start */}
    <main class="sm:grid sm:grid-cols-3 sm:mx-5 text-lg">
      {/*md break column 1 */}
      <div className="w-full px-4 pt-1 sm:px-2 rounded-lg w-sm">
      {/* update account form start*/}
      <h2 className='font-semibold mb-2 text-xl'>Privacy and Security</h2>
      <form className='md:mt-2'>
        <div className='mb-2'>
          <label
            htmlFor='displayName'
            className='block font-semibold'>
            Display Name
          </label>
          <input
            type='text'
            className='cursor-not-allowed block w-full px-4 py-2 md:py-1 mt-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
            placeholder='Kevin Puggles'
            id='displayName'
            disabled/>
        </div>
        <div className='mb-2 md:mb-1'>
          <label
            htmlFor='email'
            className='block font-semibold'> 
            Email
          </label>
          <input
            type='email'
            className='cursor-not-allowed block w-full px-4 py-2 md:py-1 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
            placeholder='admin@helloworld.com'
            id='email'
            disabled/>
        </div>
        <div className='mb-2 md:mb-1'>
          <label
            htmlFor='password'
            className='block font-semibold'> 
            Password*
          </label>
          <input
            type='password'
            className='cursor-pointer block w-full px-4 py-2 md:py-1 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
            placeholder='**********'
            id='password'/>
        </div>
        <div className='mb-2 md:mb-1'>
          <label
            htmlFor='newPassword'
            className='block font-semibold'> 
          </label>
          <input
            type='password'
            className='cursor-pointer block w-full px-4 py-2 md:py-1 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
            placeholder='New Password'
            id='newPassword'/>
        </div>
        <div className='mt-2 md:mb-1'>
          <button 
            type='submit'
            className='form-btn w-full py-1 mt-2 md:mt-1 tracking-wide text-white rounded-lg text-xl'
            id='updateAccount'>
              Update Account
          </button>
        </div>
      </form>
      {/* update account form end*/}
      {/* expand skills start (only on xs and sm screen)*/}
      <div className="w-full px-1 pt-4 m-auto rounded-lg w-sm display-contents sm:hidden">
      <h2 className='font-semibold mb-1 text-xl'>Update Proficiencies</h2>
        <ExpandSkills></ExpandSkills>
        <ExpandAdd></ExpandAdd>
      </div>
      {/* expand skills end*/}
      </div>

      {/*md break column 2 */}
      <div className="w-full px-4 sm:p-2 pt-4 sm:pt-1 bg-white rounded-lg w-sm">
      <div className='flex flex-col justify-between'>
        {/* donation center start */}
        <div className='md:mb-2 block font-regular'>
          <h2 className='font-semibold mb-1 text-xl'>Donation Center</h2>
          <div className='flex justify-between mt-2'>
            <p className='grid content-center'>Balance:</p>
            <p>$450.00</p>
          </div>
          <div className='flex justify-between mt-2'>
            <p className='grid content-center'>Payment Method:</p>
            <p>XXXXXX4600</p>
          </div>
          <div className='flex justify-between mt-2'>
            <p className='grid content-center'>Last Deposit Amount:</p>
            <p>$650.00</p>
          </div>
          <div className='flex justify-between mt-2'>
            <p className='grid content-center'>Automatic Payments:</p>
            <Switch></Switch>
          </div>
        </div>
        <button 
          type='submit'
          className='form-btn w-full py-1 mt-2 md:mt-1 tracking-wide text-white rounded-lg text-xl'
          id='requestDeposit'>
            Request Deposit
        </button>
        {/* donation center end */}
        {/* verification form start*/}
        <div className='flex justify-between mt-4 sm:mt-2'>
          <h2 className='font-semibold text-xl sm:pt-1'>Verification:</h2>
          <div className='flex'>
            <h2 className='mt-1 mr-1 text-xl'>Verified</h2>
            <div className='grid content-center mr-1'><Icon icon={boltIcon} height="20"/></div>
          </div>
        </div>
        <form>
          <div className='mb-2'>
            <label
              htmlFor='githubVerify'
              className='block font-semibold'>
              GitHub User Name
            </label>
            <input
              type='text'
              className='cursor-not-allowed block w-full px-4 py-2 md:py-1 mt-2 rounded-lg'
              placeholder='HelloPuggles'
              id='githubVerify'
              disabled/>
          </div>
          <div className='mt-2 md:mb-1'>
            <button 
              type='submit'
              className='form-btn w-full py-1 mt-2 md:mt-1 tracking-wide text-white rounded-lg text-xl'
              id='requestVerify'>
                Request Verification
            </button>
          </div>
        </form>
        {/* verification form end*/}
        </div>
      </div>

      {/*md break column 3 */}
      <div className="w-full p-4 sm:p-1 mb-10 rounded-lg w-sm">
      {/* delete or snooze account start */}
      <div className='font-semibold text-xl mb-1'>Account Status</div>
      <div className='mt-2 sm:mb-1'>
        <div className='font-semibold'>Temporarily disable</div>
        <button 
          type='submit'
          className='w-full py-1 mt-2 sm:mt-1 tracking-wide text-white rounded-lg'
          id='snooze-btn'>
            Deactivate Account
        </button>
      </div>
      <div className='mt-3 md:mb-1'>
        <h3 className='font-semibold'>Permanently delete</h3>
        <button 
          type='submit'
          className='w-full py-1 mt-2 md:mt-1 tracking-wide text-white rounded-lg'
          id='delete-btn'>
            Delete Account
        </button>
      </div>
      {/* delete or snooze account end */}
      <div className="w-full px-1 rounded-lg w-sm hidden sm:contents">
      <h2 className='font-semibold mb-1 text-lg pt-2'>Update Proficiencies</h2>
        <ExpandSkills></ExpandSkills>
        <ExpandAdd></ExpandAdd>
      </div>
      </div>

    </main>
    {/* body end */}

    {/* footer start */}
    <footer class="fixed bottom-0 display-contents">
        <FooterMenu></FooterMenu>
    </footer>
    {/* footer end */}
  </div>
  );
}

export default Account;