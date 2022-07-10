import React from "react";
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-iconoir/home';
import searchIcon from '@iconify/icons-bi/search';
import plusSquareO from '@iconify/icons-fa/plus-square-o';
import chatDotRound from '@iconify/icons-ep/chat-dot-round';
import hamburgerIcon from '@iconify/icons-ph/hamburger';

const FooterSm = () => {
  return (

    <div className="display-contents md:hidden rounded-t-2xl mt-4" id="mobile-footer">
      <footer className="px-2 rounded-lg">
        <ul className="flex flex-wrap justify-between h-20">
          <li className="grid content-center">
            <a href="/" className="mx-2"><Icon icon={homeIcon} height="44" className="mx-2"/></a>
          </li>
          <li className="grid content-center">
            <a href="/" className="mx-2"><Icon icon={searchIcon} height="34" className="mx-2"/></a>
          </li>
          <li className="grid content-center">
            <a href="/" className="mx-2"><Icon icon={plusSquareO} height="34" className="mx-2"/></a>
          </li>
          <li className="grid content-center">
            <a href="/" className="mx-2"><Icon icon={chatDotRound} height="41" className="mx-2"/></a>
          </li>
          <li className="grid content-center">
            <a href="/" className="mx-2"><Icon icon={hamburgerIcon} height="43" className="mx-2"/></a>
          </li>
        </ul>
      </footer>
    </div>


  );
}

export default FooterSm;