import React from 'react';
import DesktopNav from '../components/DesktopNav';
import aboutImg1 from '../../src/assets/thats-how-it-works.jpg';
import aboutImg2 from '../../src/assets/make-it-happen.jpg';

const About = () => {
  return (
    <div>
      <DesktopNav></DesktopNav>

      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-10 mt-10 font-thin">
          <p class="p-6 xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl text-4xl text-end tracking-wide" id='about-height'>
            Coder to Coder<br></br>
            Developer to Developer<br></br>
            You to Community<br></br>
            <span className='font-bold italic tracking-wider'>that's how it works</span>
          </p>
          <img class="flex p-6" src={aboutImg1} alt="people creating a computer program"/>
          <img class="flex p-6" src={aboutImg2} alt="group collaboration for computer program"/>
          <p class="p-6 xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl text-4xl tracking-wide" id='about-height'>
            Expand your projects<br></br>
            Fix your bugs<br></br>
            Connect the dots<br></br>
            <span className='font-bold italic tracking-wider'>make it happen</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;