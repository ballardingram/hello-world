import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Switch from '../components/Toggle';
import { Icon } from '@iconify/react';
import githubFill from '@iconify/icons-akar-icons/github-fill'
import facebookIcon from '@iconify/icons-bi/facebook';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';


const Register = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);



  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-lg shadow-md max-w-xs">
            <form onSubmit={handleFormSubmit} className='mt-6'>
              <div className='mb-3'>
                <label
                  htmlFor='displayName'
                  className='block text-sm'> 
                </label>
                <input
                  type='text'
                  className='cursor-pointer block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Display Name*'
                  id='displayName'
                  name='displayName'
                  value={formState.displayName}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='email'
                  className='block text-sm'> 
                </label>
                <input
                  type='email'
                  className='cursor-pointer block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Email Address*'
                  id='email'
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='password'
                  className='block text-sm'> 
                </label>
                <input
                  type='password'
                  className='cursor-pointer block text-lg w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Password*'
                  id='password'
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <div className='mt-2'>
                  <button 
                    className='form-btn w-full py-1 mt-2 tracking-wide text-white rounded-lg text-2xl font-thin'
                    id='create-account' type='submit'>
                        Create Account
                  </button>
              </div>
              <p className='text-center mt-5 font-semibold underline'>or</p>
              <div className='mt-2'>
                <p className="text-sm mr-2 font-semibold text-center mb-2 tracking-wider">Sign up with:</p>
                <div className='flex justify-center'>
                  <a href='http://localhost:3001/api/auth/facebook' className='facebook mx-3'><Icon icon={facebookIcon} height="30" /></a>
                  <a href='/' className='github mx-3'><Icon icon={githubFill} height="30" /></a>
                </div>
              </div>
              <div className='mt-10 flex content-center justify-between' id='terms-label'>
                <div className='inline-block ml-4 text-sm h-full content-center'>
                  Agree to<Link to='/terms'> terms & conditions</Link>
                </div>
                 <Switch></Switch>
              </div> 
            </form>
            {error && <div>Signup failed</div>}
        </div>
    </div>
  );
}
export default Register;