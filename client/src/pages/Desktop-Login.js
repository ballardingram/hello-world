import React from 'react';
import LoginForm from '../components/LoginForm';
import Card from '../components/Card';
import LogoLarge from '../components/LogoLarge';
import DeskFooter from '../components/DeskFooter';

const DeskLogin = () => {
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
            <DeskFooter></DeskFooter>
          </div>
        </div>
      </div>

      <div className='hidden lg:contents'>
        <Card></Card>
 
      </div>

    </div>
  )
}
 export default DeskLogin;