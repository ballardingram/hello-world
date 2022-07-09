import React from 'react';
import LoginForm from '../components/LoginForm';
import Card from '../components/Card';
import LogoLarge from '../components/LogoLarge';
import LoginFooter from '../components/LoginFooter';

const Login = () => {
  return (

    <div className='lg:flex justify-center'>
      <div className='grid h-screen place-items-center'>
        <div className='ml-2'>
          <LogoLarge></LogoLarge>
        </div>
        <div>
          <LoginForm></LoginForm>
        </div>
        <div className='relative'>
          <div className='fixed bottom-0 left-0 right-0 mb-1'>
            <LoginFooter></LoginFooter>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col overflow-y-scroll overflow-hidden hidden lg:contents">
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