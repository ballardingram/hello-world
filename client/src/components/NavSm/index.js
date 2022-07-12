import React from "react";
import LogoSm from "../LogoSm";
import UserImage from "../UserImageDefault";
import { Icon } from '@iconify/react';
import boltIcon from '@iconify/icons-fxemoji/bolt';

// NavBar for screens 767 and smaller
const NavSm = () => {
  return (
    <div className="h-36 rounded-b-2xl display-contents md:hidden" id="mobile-nav">
      <div className="flex justify-between h-36" id="close">
        <div className="flex justify-start font-semibold">
          <div className="my-5 ml-5 object-center h-28 w-28">
            <UserImage></UserImage>
          </div>
          <div className="text-xs sm:text-sm grid content-center ml-1">
            <div className="flex">
              <div className="font-bold">Kevin Puggles</div>
              <div className="ml-1"><Icon icon={boltIcon} height="12"/></div>
            </div>
            <div className="flex flex-row flex-wrap">
              <div className="mr-1">Member Since:</div>
              <div>July 2022!</div>
            </div>
            <div className="italic">Verified Member</div>
          </div>
        </div>
        <div className="grid content-center h-36">
          <div className="my-5 mr-5 object-center h-24 w-24 sm:h-28 sm:w-28">
            <LogoSm></LogoSm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavSm;