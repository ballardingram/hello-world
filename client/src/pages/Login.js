import React, { useState } from 'react';
import Card from '../components/Card';
import LogoLg from '../components/LogoLg';
import FooterLg from '../components/FooterLg';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

const Login = () => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (

    <div className='lg:flex justify-center'>
      <div className='grid h-screen place-items-center'>
        <div className='ml-2'>
          <LogoLg></LogoLg>
        </div>
        <div>
        <div className="flex flex-col overflow-hidden">
        <div className="p-6 m-auto w-96">

            <form onSubmit={handleFormSubmit} className='mt-6'>

            <div className='mb-3'>
                <label
                  htmlFor='email'
                  className='block'> 
                </label>
                <input
                  type='email'
                  className='block text-xl w-full px-4 py-3 mt-2 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Email Address'
                  id='email'
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-3'>
                <label
                  htmlFor='password'
                  className='block'> 
                </label>
                <input
                  type='password'
                  className='block text-xl w-full px-4 py-3 mt-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Password'
                  id='password'
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>               

              <div className='mt-5'>
                  <button 
                    className='form-btn w-full py-2 tracking-wide text-white rounded-lg text-2xl'
                    id='login-btn' type='submit'>
                        Log In
                  </button>
              </div>

              <div className='mt-5 flex justify-center w-full'>
                <div 
                  className='inline-block text-lg font-bold h-full content-center text-center'>
                  Need an account?
                  <a href='/register' className='ml-1 color-pY' id='register'>Register Here!</a>
                </div>
              </div>
            </form>
            {error && <div>Login failed</div>}
        </div>
    </div>
        </div>
        <div className='relative'>
          <div className='fixed bottom-0 left-0 right-0 mb-1'>
            <FooterLg></FooterLg>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col overflow-y-scroll overflow-hidden hidden lg:contents">
          <div>
            <Card></Card>
          </div>
          <div>
            <Card></Card>
          </div>
          <div>
            <Card></Card>
          </div>
          <div>
            <Card></Card>
          </div>
          <div>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  )
}
 export default Login;