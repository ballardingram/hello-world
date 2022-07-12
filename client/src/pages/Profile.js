import React from 'react';
import NavSm from '../components/NavSm';
import NavLg from '../components/NavLg';
import FooterMenu from '../components/FooterExpand';
import Card from '../components/Card';
import Will from '../assets/willGit.png'
import Robert from '../assets/robertGit.png'
import Ballard from '../assets/ballardGit.png'
import Ramu from '../assets/ramuGit.png'
import Cass from '../assets/cassGit.png'


const Profile = () => {
  return (

  <div class="flex flex-col h-screen justify-start">
    {/* navigation header start */}
    <header>
      <NavLg></NavLg>
      <NavSm></NavSm>
    </header>
    {/* navigation header end */}
    <h1 className='font-bold mb-1 text-2xl lg:text-xl px-4 pt-4 md:pt-0 w-screen md:text-right md:pr-9 lg:pb-5'>Dashboard</h1>
    
    {/* body start */}
    <main class="sm:grid sm:grid-cols-2 lg:grid-cols-3 mx-4 text-lg">
    {/*md break column 1 */}
    <div className="pt-1 sm:px-2 rounded-lg w-sm lg:max-w-sm">
      <h2 className='font-semibold text-xl'>Friends</h2>
      <h3 className='font-normal mb-1 text-lg'>5 friends</h3>
        <div className='grid grid-cols-4 gap-1 w-sm mb-5 rounded-2xl' id='friends'>
          <a href='/'><img src={Ramu} alt="Ramu" className='h-20 p-1'/></a>
          <a href='/'><img src={Will} alt="Will" className='h-20 p-1'/></a>
          <a href='/'><img src={Cass} alt="Cass" className='h-20 p-1'/></a>
          <a href='/'><img src={Robert} alt="Robert" className='h-20 p-1'/></a>
          <a href='/'><img src={Ballard} alt="Ballard" className='h-20 p-1'/></a>
        </div>
      <div className='hidden sm:contents'>
      <h2 className='font-semibold text-xl mb-1 pt-2'>Message Center</h2>
        <div className='flex flex-col justify-center text-lg md:text-xl tracking-wide font-semibold'>
          <a href='/' className='flex flex-row items-center mb-1 rounded-r-2xl' id='friends'>
            <img src={Will} alt="Will" className='h-20 p-1'/>
            <div className='w-full text-center'>BeanceStock</div>
          </a>
          <a href='/' className='flex flex-row items-center mb-1 rounded-r-2xl' id='friends'>
            <img src={Ramu} alt="Ramu" className='h-20 p-1'/>
            <div className='w-full text-center'>RamuMakkenAwesome</div>
          </a>
          <a href='/' className='flex flex-row items-center mb-1 rounded-r-2xl' id='friends'>
            <img src={Cass} alt="Cass" className='h-20 p-1'/>
            <div className='w-full text-center'>cassDoes</div>
          </a>
          <a href='/' className='flex flex-row items-center mb-1 rounded-r-2xl' id='friends'>
            <img src={Robert} alt="Robert" className='h-20 p-1'/>
            <div className='w-full text-center'>SabotageCat</div>
          </a>
          <a href='/' className='flex flex-row items-center mb-1 rounded-r-2xl' id='friends'>
            <img src={Ballard} alt="Ballard" className='h-20 p-1'/>
            <div className='w-full text-center'>ballard.io</div>
          </a>
        </div>
      </div>
    </div>
    {/*md break column 2 */}
    <div className="pt-1 sm:px-2 rounded-lg min-w-md">
      <div className='flex flex-col justify-between'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  </main>
    {/* body end */}

    {/* footer start */}
    <footer class="fixed bottom-0 display-contents">
      <FooterMenu></FooterMenu>
    </footer>
    {/* footer end */}
  </div>
  );
}

export default Profile;