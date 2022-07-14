import React from 'react';
import Switch from '../Toggle';
import { Icon } from '@iconify/react';
import githubFill from '@iconify/icons-akar-icons/github-fill'
import facebookIcon from '@iconify/icons-bi/facebook';

function RegisterForm() {

  return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-lg shadow-md max-w-xs">
            <form className='mt-6'>
              <div className='mb-3'>
                <label
                  htmlFor='displayName'
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
                  htmlFor='email'
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
                  htmlFor='password'
                  className='block text-sm'> 
                </label>
                <input
                  type='password'
                  className='block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Password*'
                  id='password'
                />
              </div>

              <div className='mt-2'>
                  <button 
                    className='w-full py-1 mt-2 tracking-wide text-white rounded-lg text-2xl font-thin'
                    id='form-btn'>
                        Create Account
                  </button>
              </div>

              <p className='text-center mt-5 font-semibold underline'>or</p>
              
              <div className='mt-2'>
                <p className="text-sm mr-2 font-semibold text-center mb-2 tracking-wider">Sign up with:</p>
                <div className='flex justify-center'>
                  <a href='/' className='facebook mx-3'><Icon icon={facebookIcon} height="30" /></a>
                  <a href='/' className='github mx-3'><Icon icon={githubFill} height="30" /></a>
                </div>

              </div>

              <div className='mt-10 flex content-center justify-between' id='terms-label'>
                <div className='inline-block ml-4 text-sm h-full content-center'>
                  Agree to terms & conditions
                </div>
                    <Switch></Switch>
              </div> 
            </form>

        </div>
    </div>
  );
}


export default RegisterForm;























// import Toggle from '../Toggle';
// import React from 'react';


// const RegisterForm = () => {
//   return (
//     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//         <div className="w-full p-6 m-auto bg-white rounded-lg shadow-md max-w-xs">

//             <form className='mt-6'>

//               <div className='mb-3'>
//                 <label
//                   for='displayName'
//                   className='block text-sm'> 
//                 </label>
//                 <input
//                   type='displayName'
//                   className='block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
//                   placeholder='Display Name*'
//                   id='username'
//                 />
//               </div>

//               <div className='mb-3'>
//                 <label
//                   for='email'
//                   className='block text-sm'> 
//                 </label>
//                 <input
//                   type='email'
//                   className='block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
//                   placeholder='Email Address*'
//                   id='email'
//                 />
//               </div>

//               <div className='mb-3'>
//                 <label
//                   for='password'
//                   className='block text-sm'> 
//                 </label>
//                 <input
//                   type='password'
//                   className='block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
//                   placeholder='Password*'
//                   id='password'
//                 />
//               </div>

//                 <div className='mt-8 flex content-center justify-between' id='terms-label'>
//                   <div className='inline-block ml-4 text-sm font-bold h-full content-center'>
//                     Agree to terms & conditions
//                   </div>
//                     <Toggle></Toggle>
//                 </div>               

//                 <div className='mt-2'>
//                     <button 
//                       className='w-full px-4 pb-1 tracking-wide text-white rounded-lg text-2xl font-thin'
//                       id='form-btn'>
//                           Create Account
//                     </button>
//                 </div>
//             </form>

//         </div>
//     </div>
// );
// }
// export default RegisterForm;