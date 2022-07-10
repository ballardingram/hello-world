import React, { useState } from 'react';
import RegisterForm from '../RegisterForm';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';


const LoginForm = (props) => {
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

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
  }
  


  return (
    <div className="flex flex-col overflow-hidden">
      {isModalOpen && <RegisterForm />}
        <div className="p-6 m-auto w-96">

            <form onSubmit={handleFormSubmit} className='mt-6'>

            <div className='mb-3'>
                <label
                  htmlFor='email'
                  className='block text-sm'> 
                </label>
                <input
                  type='email'
                  className='block text-xl w-full px-4 py-3 mt-2 bg-white border rounded-xl focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
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
                  className='block text-sm'> 
                </label>
                <input
                  type='password'
                  className='block text-xl w-full px-4 py-3 mt-2 bg-white border rounded-xl focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
                  placeholder='Password'
                  id='password'
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
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
                  <button type='button' onClick={() => toggleModal()} className='ml-1 color-pY' id='register'>Register Here!</button>
                </div>
              </div>
            </form>
            {error && <div>Login failed</div>}
        </div>
    </div>
);
}
export default LoginForm;