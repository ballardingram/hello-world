import React from 'react';
import DesktopNav from '../components/DesktopNav';
import aboutImg1 from '../../src/assets/thats-how-it-works.jpg';
import aboutImg2 from '../../src/assets/make-it-happen.jpg';

const About = () => {
  return (
    <div>
      <DesktopNav></DesktopNav>

      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 pt-10 mt-10 font-thin">
          <p class="p-6 lg:text-5xl md:text-2xl text-end">
            Coder to Coder,<br></br>
            Developer to Developer,<br></br>
            You to Community,<br></br>
            <span className='font-bold italic'>that's how it works.</span>
          </p>
          <img class="flex p-6" src={aboutImg1} alt="people creating a computer program"/>
          <img class="flex p-6" src={aboutImg2} alt="group collaboration for computer program"/>
          <p class="p-6 lg:text-5xl md:text-2xl">
            Expand your projects,<br></br>
            Fix your bugs,<br></br>
            Connect the dots,<br></br>
            <span className='font-bold italic'>make it happen.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;