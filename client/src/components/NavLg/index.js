import React from "react";
import { Icon } from '@iconify/react';
import accountIcon from '@iconify/icons-codicon/account';
import homeIcon from '@iconify/icons-iconoir/home';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import LogoLg from "../LogoLg";

// NavBar for screens 768 and larger
function NavLg() {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="hidden">
      <div id="border">
        <nav id="second-border">
          <div className="mx-5" id="content">
            <div className="flex items-center justify-between h-10">
              <div className="md:w-52 lg:w-64">
                <LogoLg></LogoLg>
              </div>
              <div>
                <div className="flex justify-center items-center space-x-4">
                  <a
                    href="/"
                    id="nav-home">
                    <Icon icon={homeIcon} height="34" className="mb-1 mr-4"/>
                  </a>
                  <a
                    href="/account"
                    className="px-3" 
                    id="nav-user">
                    <Icon icon={accountIcon} height="29" className="mb-1 mr-5"/>
                  </a>
                  {Auth.loggedIn() ? (
                    <>
                      <Link to='/login' onClick={logout}>Logout</Link>
                    </>
                  ) : (
                    <>
                      {/* <Link to="/login">Login</Link> */}
                    </>
                  )}
                  <a
                    href="/help"
                    className="font-light px-3 text-lg" 
                    id="nav-help">
                    Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavLg;