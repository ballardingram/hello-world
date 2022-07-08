import React from 'react';
import LoginForm from '../components/LoginForm';
import Card from '../components/Card';
import LogoLarge from '../components/LogoLarge';


const DeskLogin = () => {
  return (

    <div>

    
    <div id='border-login-start'>
      <div id='second-border-login-start'>

        <div className='mx-4 flex place-items-center' id='content'>
          <div className='w-3/5'>

            <div className='flex justify-center object-cover lg:h-96'>
              <LogoLarge></LogoLarge>
            </div>

            <div className='flex justify-end mr-10'>
              <LoginForm></LoginForm>
            </div>

          </div>

          <div className='flex flex-col w-2/5 mr-8 pr-8'>
            <div className='flex justify-end'>
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
    </div>
  );
}

export default DeskLogin;