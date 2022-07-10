import React from 'react';
import LoginForm from '../components/LoginForm';
import Card from '../components/Card';
import LogoLg from '../components/LogoLg';
import FooterLg from '../components/FooterLg';

const Login = () => {
  return (

    <div className='lg:flex justify-center'>
      <div className='grid h-screen place-items-center'>
        <div className='ml-2'>
          <LogoLg></LogoLg>
        </div>
        <div>
          <LoginForm></LoginForm>
        </div>
        <div className='relative'>
          <div className='fixed bottom-0 left-0 right-0 mb-1'>
            <FooterLg></FooterLg>
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