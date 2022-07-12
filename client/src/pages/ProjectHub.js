import React from 'react';
import NavLg from '../components/NavLg';
import NavSm from '../components/NavSm';
import FooterSticky from '../components/FooterSticky';
import Card from '../components/Card';
import FooterBody from '../components/FooterBody';

const ProjectHub = () => {
  return (
  <div className="flex flex-col h-screen justify-start text-lg">
  {/* navigation header start */}
  <header>
    <NavLg></NavLg>
    <NavSm></NavSm>
  </header>
  {/* navigation header end */}
  <div className='w-screen px-5 my-5 md:pt-0 md:pr-9 font-bold text-2xl lg:text-3xl 2xl:text-4xl md:text-right'>
    Project Hub
  </div>

  {/* body start */}
  <main class="sm:grid sm:grid-cols-2 lg:grid-cols-3">

    {/*md break column 1 */}
    <div className="grid content-start px-5 mb-5">
      {/* submit project form start */}
      <div className='font-semibold mb-2 text-xl'>Submit a New Project:</div>
      <form>
        <label
          htmlFor='projectTitle'
          className='block'>
        </label>
        <input
          type='text'
          className='block w-full px-2 py-2 mb-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
          placeholder='Project Title'
          id='projectTitle'
          />
        <label
          htmlFor='projectSub'
          className='block'>
        </label>
        <input
          type='text'
          className='block w-full px-2 py-2 mb-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
          placeholder='Brief Description'
          id='projectSub'
          />
        <label
          htmlFor='projectDetails'
          className='block'>
        </label>
        <textarea 
          class="w-full h-40 px-2 py-2 border rounded-lg focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder='Detailed Project Information'
          id='projectDetails'>
        </textarea>
        <div className='mt-2'>
          <button 
              className='form-btn w-full py-2 mb-2 text-white tracking-wide rounded-lg text-xl'
              id='projectSubmit'>
              Submit Project
          </button>
        </div>
      </form>
      {/* submit project form end */}

    </div>

    {/*md break column 2 */}
    <div className="grid content-start md:grid-col-2 px-3 pb-5">
      <div>
        <div className='font-semibold mb-2 text-xl px-2'>My Projects:</div>
        <Card></Card>
        <Card></Card>
      </div>

    </div>

    {/*md break column 3 */}
    <div className="grid content-start px-3 pb-5">
      <div className='font-semibold mb-2 text-xl px-2'>My Collaborations:</div>
      <Card></Card>
      <Card></Card>
    </div>

  </main>
  {/* body end */}
  <FooterBody></FooterBody>

  {/* footer start */}
    <FooterSticky></FooterSticky>
  {/* footer end */}
  </div>
);
}
export default ProjectHub;