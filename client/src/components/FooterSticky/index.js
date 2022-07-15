import React from 'react';
import { Icon } from '@iconify/react';
import hamburgerIcon from '@iconify/icons-ph/hamburger';
import chatText from '@iconify/icons-bi/chat-text';
import homeIcon from '@iconify/icons-iconoir/home';
import codeIcon from '@iconify/icons-fa/code';
import searchLoading from '@iconify/icons-gg/search-loading';
import Auth from '../../utils/auth';

const FooterSticky = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
  <div>
    <div className='p-2 rounded-t-2xl'>
    <div className='hidden lg:contents text-xl font-semibold'>
      <a href='/terms' className='mx-5 color-sY' id='terms'>Terms</a>
      <a href='about' className='mx-5 color-sY' id='about'>About</a>
      <a href='/' onClick={logout} className='mx-5 color-sY' id='about'>Log Out</a>
    </div>
    </div>
 
    <footer className="h-16 bg-gray-300 rounded-t-xl md:hidden">
      <div className='flex flex-row justify-around items-center py-2'>
        <a href='/profile'><Icon icon={homeIcon} height="42" className='display-contents md:hidden'/></a>
        <a href='/'><Icon icon={searchLoading} height="42" className='invisible sm:visible md:hidden'/></a>
        <a href='/projecthub'><Icon icon={codeIcon} height="32" className='display-contents md:hidden'/></a>
        <a href='/'><Icon icon={chatText} height="36" className='invisible sm:visible md:hidden'/></a>
        <a href='/'><Icon icon={hamburgerIcon} height="42" className='display-contents md:hidden'/></a>
      </div>
    </footer>
  </div>
  );
}
export default FooterSticky;