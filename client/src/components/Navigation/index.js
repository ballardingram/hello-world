import React from "react";
import UserImage from "../UserImageDefault";
import { Icon } from '@iconify/react';
import boltIcon from '@iconify/icons-fxemoji/bolt';
import codeIcon from '@iconify/icons-fa/code';
import homeIcon from '@iconify/icons-iconoir/home';
import accountIcon from '@iconify/icons-codicon/account';
import { QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';

const Navigation = () => {

  const { data } = useQuery(QUERY_USER, {  variables: { email: Auth.getUserEmail() }});

  const userData = data;
  console.log(userData);

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="h-36 rounded-b-2xl lg:w-full text-lg lg:fixed" id="mobile-nav">
      <div className="flex justify-between w-full h-36">
        <div className="flex justify-center font-semibold">

          {/* USER IMAGE AND CONTENT ROUTES HERE */}
          <div className="my-2 ml-2 object-center overflow-visible h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-60 xl:w-60">
            {/* IMAGE */}
            <a href="/"><UserImage></UserImage></a>
          </div>
          <div className="flex flex-col justify-end ml-2 mb-1 text-lg tracking-wide overflow-visible">
            <div className="flex items-center mb-2">
              {/* DISPLAY NAME */}
              <div className="font-bold text-3xl lg:text-4xl">{userData ? userData.user.displayName : 'user'}</div>
              {/* VERIFICATION ICON */}
              <div className="ml-1"><Icon icon={boltIcon} height="32"/></div>
            </div>
            <div className="flex flex-col flex-nowrap">
              {/* VERIFICATION STATUS */}
              <div className="italic text-base md:text-xl lg:text-xl">Verified Member</div>
              {/* ACCOUNT CREATED */}
              <div className="text-base pb-1 flex-nowrap lg:text-lg xl:text-2xl">Connected: July 2022</div>
            </div>
          </div>
        </div>

        {/* Dashboard RIGHT content, some content visible at small but all large breakpoint */}
        <div className="hidden sm:contents">
          <div className="grid grid-cols-5 text-2xl justify-items-center content-end w-1/2 lg:w-2/5 xl:w-1/3 mb-1">
            <a href="/about" id="nav-about" className="invisible lg:visible grid content-end px-1">About</a>
            <a href="/terms" id="nav-terms" className="invisible lg:visible grid content-end px-1">Terms</a>
            <a href='/projecthub' id="nav-projects" className="mt-2 p-1"><Icon icon={codeIcon} height="32"/></a>
            <a href="/" id="nav-home" className="pt-1"><Icon icon={homeIcon} height="43"/></a>
            <a href="/account" id="nav-account" className="mt-1 p-1"><Icon icon={accountIcon} height="36"/></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navigation;