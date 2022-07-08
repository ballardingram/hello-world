import React from 'react';
import LoginForm from '../components/LoginForm';
import Card from '../components/Card';
import LogoLarge from '../components/LogoLarge';


const DeskLogin = () => {
  return (

    <div id='border-login-start'>
      <div id='second-border-login-start'>

        <div className='mx-4 grid-cols-1 md:grid-cols-2 flex' id='content'>
          <div className='w-3/5'>

            <div className='flex justify-center w-full mt-10 object-cover h-80 w-160'>
              <LogoLarge></LogoLarge>
            </div>

            <div className='w-full flex justify-end mr-10'>
              <LoginForm></LoginForm>
            </div>

          </div>

          <div className='mt-5 flex flex-col w-2/5 mr-8 pr-8'>
            <div className='flex justify-end'>
              <Card></Card>
            </div>
            <div className='mt-3 flex justify-end'>
              <Card></Card>
            </div>
            <div className='mt-3 flex justify-end'>
              <Card></Card>
            </div>
            <div className='mt-3 flex justify-end'>
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeskLogin;