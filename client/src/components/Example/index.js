import React from 'react';
import NavLg from '../components/NavLg';
import NavSm from '../components/NavSm';
import FooterSticky from '../components/FooterSticky';
import FooterBody from '../components/FooterBody';

const Example = () => {
  return (
  <div className="flex flex-col h-screen justify-start text-lg" id='close'>
  {/* navigation header start */}
  <header>
    <NavLg></NavLg>
    <NavSm></NavSm>
  </header>
  {/* navigation header end */}
  <div className='w-screen px-5 my-5 md:pt-0 md:pr-7 font-bold text-2xl lg:text-3xl 2xl:text-4xl md:text-right'>
    Example Body Layout with Mobile Functionality
  </div>

  {/* body start */}
  <main class="sm:grid sm:grid-cols-2 lg:grid-cols-3 mb-12 pb-12">

    {/*md break column 1 */}
    <div className="grid content-start px-5 mb-5">
      <div className='font-semibold mb-2 text-xl'>Column 1 Header</div>
    </div>

    {/*md break column 2 */}
    <div className="grid content-start px-5 mb-5">
      <div className='font-semibold mb-2 text-xl'>Column 2 Header</div>
    </div>

    {/*md break column 3 */}
    <div className="grid content-start px-5 mb-5">
      <div className='font-semibold mb-2 text-xl'>Column 3 Header</div>
    </div>

  </main>
  {/* body end */}


  {/* footer start */}
  <FooterBody></FooterBody>
  <FooterSticky></FooterSticky>
  {/* footer end */}
  </div>
);
}
export default Example;