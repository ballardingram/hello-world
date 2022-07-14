import React from 'react';
import { Icon } from '@iconify/react';
import githubFill from '@iconify/icons-akar-icons/github-fill';
// import Carousel from '../components/Carousel';

const NoMatch = () => {
  return (

<div className='select-none grid h-screen place-items-center'>
  {/* <Carousel /> */}
  <div className="page_404">
    <div className="container mx-auto">
      <div className="text-center">
        <div className="caveman">
          <h1 className="text-center text-6xl font-semibold">404</h1>
        </div>
        <div className="font-semibold tracking-wide">
          <p className='text-3xl'>OH NO!</p>
          <p className='mt-2 text-lg'>Our website!</p>
          <p className='text-lg'>It's BrOkEn!</p>
        </div>
        <div className='flex mt-5'>
          <p className="grid content-center text-md mr-2 font-semibold">Want to help us fix it?</p>
          <a href='https://github.com/CassDoes/hello-world' className='github'><Icon icon={githubFill} height="30" /></a>
        </div>
        <div className='safety rounded-xl mt-5 font-semibold'><a href='/'>Back to Safety</a></div>
      </div>
    </div>
  </div>
</div>
  );
};

export default NoMatch;