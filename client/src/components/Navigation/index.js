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
    <div className="h-36 rounded-b-2xl display-contents text-lg lg:fixed lg:w-full" id="mobile-nav">
      <div className="flex justify-between w-full h-36">
        <div className="flex justify-center font-semibold">

          {/* USER IMAGE AND CONTENT ROUTES HERE */}
          <div className="my-2 ml-5 object-center overflow-visible h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48">
            {/* IMAGE */}
            <a href="/profile"><UserImage></UserImage></a>
          </div>
          <div className="flex flex-col justify-end ml-2 mb-3 text-lg">
            <div className="flex">
              {/* DISPLAY NAME */}
              <div className="font-bold text-xl sm:text-2xl">{userData ? userData.user.displayName : 'user'}</div>
              {/* VERIFICATION ICON */}
              <div className="ml-1"><Icon icon={boltIcon} height="22"/></div>
            </div>
            <div className="flex flex-col flex-wrap text-base">
              {/* ACCOUNT CREATED */}
              <div className="mr-1">Connected: July 2022</div>
              {/* VERIFICATION STATUS */}
              <div className="italic">Verified Member</div>
            </div>
            <div className="flex mt-2">
              <button
                  type="submit"
                  onClick={logout}
                  className="form-btn px-2 rounded-md w-3/4"
                  id="logout">
                  Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard RIGHT content, some content visible at small but all large breakpoint */}
        <div className="hidden md:contents">
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