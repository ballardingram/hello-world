import React from "react";
import { Icon } from '@iconify/react';
import accountIcon from '@iconify/icons-codicon/account';
import homeIcon from '@iconify/icons-iconoir/home';


// NavBar for screens larger than 770
function DesktopNav() {
  return (
    <div id="border">
      <nav id="second-border">
        <div className="max-w-full mx-10 px-10" id="content">
          <div className="flex items-center justify-between h-16">
            <div id="circle-logo">
              <div className="flex justify-end min-h-full items-center text-4xl font-extralight pr-2">
                hello
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center space-x-4">

                <a
                  href="#"
                  className="py-2 rounded-md text-md">
                  <Icon icon={homeIcon} height="30" className="mb-1 mr-4"/>
                </a>

                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-md">
                  <Icon icon={accountIcon} height="26" className="mb-1 mr-5"/>
                </a>
                
                <a
                  href="#"
                  className="text-300 hover:bg-gray-100 px-3 py-2 rounded-md text-md">
                  About
                </a>

                <a
                  href="#"
                  className="text-300 hover:bg-gray-100 px-3 py-2 rounded-md text-md">
                  Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DesktopNav;